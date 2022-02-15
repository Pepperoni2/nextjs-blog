import connectDB from '../../../util/connectDB'
import Events from '../../../models/eventModel'
import Users from '../../../models/userModels'


connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getEvents(req, res)
            break;
        case "PUT":
            await joinEvent(req, res)
            break;
        case "DELETE":
            await deleteEvent(req, res)
            break;
    }
}

const getEvents = async (req, res) => {
    try {
        const { id } = req.query

        const event = await Events.findById(id)
        if (!event) return res.status(400).json({ err: 'This event does not exist.' })

        res.json({ event })
    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }

}

const joinEvent = async (req, res) => {
    try {
        
        const { id } = req.query;
        const { username } = req.body;

        const participator = await Users.findOne({ username })
        if (!participator) return res.status(400).json({ err: 'User does not exist.' })

        /* const alreadyPart = await Events.findById(id, { $elemMatch: { $in: [ participator._id, participants ]  } })
        if (alreadyPart) return res.status(400).json({ err: 'You are already taking part in this event!' }) */
        
        const event = await Events.findByIdAndUpdate(id, { $push: { participants: participator._id } })
        if (!event) return res.status(400).json({ err: 'Could not push participator ID into database' })

        res.json({ msg: `Success! You are now participating in ${event.title}` })
        
    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }
}



