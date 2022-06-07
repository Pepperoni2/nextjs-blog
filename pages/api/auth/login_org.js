import connectDB from '../../../util/connectDB'
import Organizers from '../../../models/organizerModels'
import valid from '../../../util/valid'
import bcrypt from 'bcrypt'
import { createAccessToken, CreateAccessToken, createRefreshToken } from '../../../util/generateToken'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await login(req, res)
            break;
        
    }
}

const login = async (req, res) => {
    try{
        const {email, password} = req.body

        // Search the email from the user in the Users Database

        const org = await Organizers.findOne({ email },{role:'organizer'})
        if(!org) return res.status(400).json({err: 'Dieser Organizator existiert nicht.'})

        // Does the typed in password equal to the users.password?

        const isMatch = await bcrypt.compare(password, org.password)       
        if(!isMatch) return res.status(400).json({err: 'Falsches Passwort.'})

        const access_token = createAccessToken({id: org._id})
        const refresh_token = createRefreshToken({id: org._id})


        res.json({
            msg: "Login Success!",
            refresh_token, 
            access_token, 
            organizer: {
                _id: org.id,
                name: org.name,
                email: org.email, 
                role: org.role,
                avatar: org.avatar, 
                root: org.root
            }
        })

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}