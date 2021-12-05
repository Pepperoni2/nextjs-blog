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
        default: 'https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1636292537~hmac=2e4dc16cbbf0741d2ff4397d63804b26'
    },
    // Not required data for org-register
    location: {
        type: String,
        required: false
    },
    phone:{
        type: String,
        required: false
    }
},{
    timestamps: true
})

let Dataset = mongoose.models.organizer || mongoose.model('organizer', orgSchema)
export default Dataset