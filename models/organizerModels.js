import mongoose from 'mongoose'

const orgSchema = new mongoose.Schema({
    //required data for register
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'organizer'
    },
    root: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/eventx-cloud/image/upload/v1643798820/eventx_media/NoThumbnail_cfkxha.png'
    },
    // Not required data for org-register
    location: {
        type: String,
        required: false
    },
    phone:{
        type: String,
        required: false
    },
    address:{
        type: String,
        required: false
    }

},{
    timestamps: true
})

let Dataset = mongoose.models.organizer || mongoose.model('organizer', orgSchema)
export default Dataset