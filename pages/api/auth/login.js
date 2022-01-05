import connectDB from '../../../util/connectDB'
import Users from '../../../models/userModels'
import Organizers from '../../../models/organizerModels'
import valid from '../../../util/valid'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from '../../../util/generateToken'


connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            await login(req, res)
            break;

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // Search the email from the user in the Users Database

        const user = await Users.findOne({ email })
        if (!user) {
            const org = await Organizers.findOne({ email })
            if (!org) return res.status(400).json({ err: 'Dieser Benutzer existiert nicht.' })
            const isMatch_org = await bcrypt.compare(password, org.password)
            if (!isMatch_org) return res.status(400).json({ err: 'Falsches Password.' })
            const access_token = createAccessToken({ id: org._id })
            const refresh_token = createRefreshToken({ id: org._id })

            res.json({
                msg: "Login Success! (org)",
                refresh_token,
                access_token,
                user: {
                    name: org.name,
                    email: org.email,
                    role: org.role,
                    avatar: org.avatar,
                    root: org.root,
                    location: org.location,
                    phone: org.phone,
                    address: org.address
                }
            })
        }
        else {

            // Does the typed in password equal to the users.password?

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ err: 'Falsches Password.' })

            const access_token = createAccessToken({ id: user._id })
            const refresh_token = createRefreshToken({ id: user._id })


            res.json({
                msg: "Login Success!",
                refresh_token,
                access_token,
                user: {
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    avatar: user.avatar,
                    root: user.root
                }
            })
        }


    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}