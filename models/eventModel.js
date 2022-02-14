import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    images:
    {   
        type:Array,
        required: true,
        Object:
        {
            type: Object,
            required: true,
            public_id: {
                type: String,
                default: "eventx_media/NoThumbnail_cfkxha",
                required: true
            },
            url: {
                type: String,
                default: "https://res.cloudinary.com/eventx-cloud/image/upload/v1643798820/eventx_media/NoThumbnail_cfkxha.png",
                required: true
            },
        }
        

    },
    category: {
        type: String,
        required: true
    },
    openslots: {
        type: Number,
    },
    closedSlots: {
        type: Number,
        default: 0
    },
    onGoing: {
        type: Boolean,
        default: true
    },
    organizer: {
        type: String,
        default: ""
    },
    participants: {
        type: Array,
    },
    checked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.event || mongoose.model('event', eventSchema)
export default Dataset