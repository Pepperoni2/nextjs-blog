import connectDB from '../../../util/connectDB'
import Events from '../../../models/eventModel'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getEvents(req, res)
            break;
    }
}

const getEvents = async (req, res) => {
    try{
        const { id } = req.query;

        const event = await Events.findById(id)
        if(!event) return res.status(400).json({err: 'This event does not exist.'})

        res.json({ event })
    }
    catch (err){
        return res.status(500).json({err: err.message})
    }
}