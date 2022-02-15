import connectDB from '../../../util/connectDB'
import Users from '../../../models/userModels'
import Organizers from '../../../models/organizerModels'
import auth from '../../../middleware/auth'
import bcrypt from 'bcrypt'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "PATCH":
            await uploadRole(req,res)
            break;
        case "GET":
            await getUsers(req,res)
            break;
    }
}

const uploadRole = async (req, res) => {
    try {
        const result =  await auth(req,res)
        if(result.role !== 'admin' || !result.root )
        return res.status(400).json({err: "Authentication is not valid!"})

        const { id } = req.query
        const { role } = req.query

        await Users.findOneAndUpdate({_id: id}, {role})
        res.json({msg: 'Update Success!'})


    } catch (err) {
        return res.status(500).json({err: err.message})
    }   
}