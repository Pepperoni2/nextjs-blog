import connectDB from '../../../util/connectDB'
import Users from '../../../models/userModels'
import Organizers from '../../../models/organizerModels'
import auth from '../../../middleware/auth'
import bcrypt from 'bcrypt'


connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "PATCH":
            await updateRole(req, res)
            break;
        case "PATCH":
            await deleteUser(req, res)
            break;
    }
}

const updateRole = async (req, res) => {
    try {
        const result = await auth(req, res)
        if (result.role !== 'admin' || !result.root)
            return res.status(400).json({ err: "Authentication is not valid!" })

        const { id } = req.query
        const { role } = req.body

        await Users.findOneAndUpdate({ _id: id }, { role })
        res.json({ msg: 'Update Success!' })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const result = await auth(req, res)
        if (result.role !== 'admin' || !result.root)
            return res.status(400).json({ err: "Authentication is not valid!" })

        const { id } = req.query
        const { role } = req.body

        await Users.findByIdAndDelete(id)
        res.json({ msg: 'Deletion Successful!' })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}