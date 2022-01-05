import connectDB from '../../../util/connectDB'
import Users from '../../../models/userModels'
import Organizers from '../../../models/organizerModels'
import { createAccessToken } from '../../../util/generateToken'
import jwt from 'jsonwebtoken'

connectDB()

export default async (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken;
        if (!rf_token) return res.status(400).json({ err: 'Bitte jetzt anmelden!' })

        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if (!result) return res.status(400).json({ err: 'Ihr Token ist ungültig oder abgelaufen!' })
        // ----- Searches the user with the current id in the users and organizers collections ----
        const user = await Users.findById(result.id)
        if (!user) {
            const org = await Organizers.findById(result.id)
            if (!org) return res.status(400).json({ err: 'Dieser Benutzer existiert nicht.' })
            const access_token = createAccessToken({ id: org._id })
            res.json({
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
            const access_token = createAccessToken({ id: user._id })
            res.json({
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

    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

