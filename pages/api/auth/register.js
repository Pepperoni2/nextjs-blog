import { connectToDatabase } from "../../../util/mongodb";
import Users from '../../../models/userModels'
import valid from '../../../util/valid'
import bcrypt from 'bycrpt'

connectToDatabase()

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

        const errMsg = valid(name, email, password, cf_password )
        if(errMsg) return res.status(400).json({err: errMsg})

        const passwordHash = await bcrypt.hash(password, 12)    //Encrypting the password

        const newUser = new Users({ 
            name, email, password: passwordHash, cf_password 
        })

        console.log(newUser)
        res.json({msg: "Registrierung Abgeschlossen"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}