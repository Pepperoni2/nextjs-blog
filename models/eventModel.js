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
    images: {
        type: Array,
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    openslots: {
        type: Number,
        default: 0
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
    checked: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

let Dataset = mongoose.models.event || mongoose.model('event', eventSchema)
export default Dataset