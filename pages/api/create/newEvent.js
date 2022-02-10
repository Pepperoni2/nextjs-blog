import connectDB from "../../../util/connectDB"
import Events from "../../../models/eventModel"
import Organizers from "../../../models/organizerModels"

connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            await create(req, res)
            break;

    }
}

const create = async (req, res) => {
    try {
        const { 
            title,
            description,
            content,
            category,
            openslots,
            organizer,
            images
        } = req.body

        const events = await Events.findOne({ title })
        if(events) return res.status(400).json({err: 'This title is already in use!'})
        const org = await Organizers.findOne({ organizer })
        if(!org) return res.status(400).json({err: 'Organizer does not exist!'})
        const newEvent = new Events({
            title, description, content, category, openslots, organizer: org._id, images
        })
        
        await newEvent.save()
        res.json({msg: "Event-Creating Success!"})
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}