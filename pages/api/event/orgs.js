import connectDB from '../../../util/connectDB'
import Events from '../../../models/eventModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case"GET":
            await getEventsFromOrganizers(req, res)
            break;
    }
}

const getEventsFromOrganizers = async (req, res) => {
    try{
        //const result = await auth(req, res)
        const events = await Events.find({organizer: req.id})
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