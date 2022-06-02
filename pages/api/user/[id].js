import connectDB from '../../../util/connectDB'
import Users from '../../../models/userModels'
import Organizers from '../../../models/organizerModels'
import auth from '../../../middleware/auth'


connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "PATCH":
            await updateRole(req, res)
            break;
        case "DELETE":
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

        const user = await Users.findByIdAndDelete(id)
        if(!user) await Organizers.findByIdAndDelete(id)
        else res.json({msg: 'Failed to delete user!'})
        res.json({ msg: 'Deletion Successful!' })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}