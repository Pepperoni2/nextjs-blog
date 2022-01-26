import connectDB from '../../../util/connectDB'
import Users from '../../../models/userModels'
import valid from '../../../util/valid'
import nc from 'next-connect'
import bcrypt from 'bcrypt'

connectDB()

const handler = nc()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
        
    }
}

const register = async (req, res) => {
    try{
        const { name, email, password, cf_password } = req.body

        const errMsg = valid(name, email, password, cf_password)
        if(errMsg) return res.status(400).json({err: errMsg})

        const users = await Users.findOne({ email })
        if(users) return res.status(400).json({err: 'This email already exists.'})

        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = new Users({ 
            name, email, password: passwordHash, cf_password 
        })

        await newUser.save()
        res.json({msg: "Register Success!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}