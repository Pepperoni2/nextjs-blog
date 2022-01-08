import connectDB from '../../../util/connectDB'
import Users from '../../../models/userModels'
import Organizers from '../../../models/organizerModels'
import auth from '../../../middleware/auth'
import bcrypt from 'bcrypt'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "PATCH":
            await uploadInfo(req,res)
            break;
    }
}

const uploadInfo = async (req,res) => {
    try{
        const result = await auth(req, res)
        const {name, avatar} = req.body

        const newUser = await Users.findByIdAndUpdate({_id: result.id}, {name, avatar})
        if(!newUser){
            const newOrg = await Organizers.findByIdAndUpdate({_id: result.id}, {name, avatar})

            res.json({
                msg: "Update Success",
                user:{
                    name,
                    avatar,
                    email: newOrg.email,
                    role: newOrg.role
                }
            })
        }
        res.json({
            msg: "Update Success",
            user: {
                name,
                avatar,
                email: newUser.email,
                role: newUser.role
            }
        })


    } catch(err){
        return res.status(500).json({err: err.message})
    }
}