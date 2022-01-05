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
    avatar: {
        type: String,
        default: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
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