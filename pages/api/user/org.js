import connectDB from '../../../util/connectDB'
import Organizers from '../../../models/organizerModels'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "PATCH":
            await uploadInfo(req,res)
            break;
        case "GET":
            await getOrganizers(req,res)
            break;
    }
}

const uploadInfo = async (req,res) => {
    try{
        const result = await auth(req, res)
        const {name, avatar} = req.body

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

    } catch(err){
        return res.status(500).json({err: err.message})
    }
}

const getOrganizers = async (req,res) => {
    try{
        const result = await auth(req, res) // authentication middleware
        if(result.role !== "admin") return res.status(400).json({err: "Authentication is not valid!"})

        const organizers = await Organizers.find().select('-password')
        res.json({organizers})

    } catch(err){
        return res.status(500).json({err: err.message})
    }
}