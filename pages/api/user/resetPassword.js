import connectDB from '../../../util/connectDB'
import Users from '../../../models/userModels'
import Organizers from '../../../models/organizerModels'
import auth from '../../../middleware/auth'
import bcrypt from 'bcrypt'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "PATCH":
            await resetPassword(req,res)
            break;
    }
}

const resetPassword = async (req, res) => {
    try{
        const result = await auth(req, res)
        const { password } = req.body
        const passwordHash = await bcrypt.hash(password, 12)

        if(result.role === 'user') await Users.findOneAndUpdate({_id: result.id}, {password: passwordHash})
        else if(result.role === 'organizer') await Organizers.findOneAndUpdate({_id: result.id}, {password: passwordHash})

        res.json({msg: "Update Success!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}