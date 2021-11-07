import { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
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
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        defaul: 'https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1636292537~hmac=2e4dc16cbbf0741d2ff4397d63804b26'
    }
},{
    timestamps: true
})

let Dataset = mongoose.models.users || mongoose.model('user', userSchema)
export default Dataset