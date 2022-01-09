import connectDB from '../../../util/connectDB'
import Events from '../../../models/eventModel'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case"GET":
            await getEvents(req, res)
            break;
    }
}

const getEvents = async (req, res) => {
    try{
        const events = await Events.find()
        res.json({
            status: 'success',
            result: events.length,
            // index: events.
            events
        })
    }
    catch (err){
        return res.status(500).json({err: err.message})
    }
}