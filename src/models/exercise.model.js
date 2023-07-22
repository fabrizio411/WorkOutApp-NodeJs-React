import mongoose from 'mongoose'

const exerciseScheema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
    },
    muscle: {
        type: String,
        required: true
    },
    isCustom: {
        type: Boolean,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default mongoose.model('Exercise', exerciseScheema)