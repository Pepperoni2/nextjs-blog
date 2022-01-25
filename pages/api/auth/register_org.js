import connectDB from '../../../util/connectDB'
import Organizers from '../../../models/organizerModels'
import valid from '../../../util/valid'
import bcrypt from 'bcrypt'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
        
    }
}

const register = async (req, res) => {
    try{
        const { name, email, password, cf_password, phone, location, address } = req.body

        const errMsg = valid(name, email, password, cf_password)
        if(errMsg) return res.status(400).json({err: errMsg})

        const orgs = await Organizers.findOne({ email })
        if(orgs) return res.status(400).json({err: 'This email already exists.'})

        const passwordHash = await bcrypt.hash(password, 12)

        const newOrganizer = new Organizers({ 
            name, email, password: passwordHash, cf_password, phone, location, address
        })

        await newOrganizer.save()
        res.json({msg: "Register Success!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}