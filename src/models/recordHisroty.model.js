import mongoose, { mongo } from 'mongoose'

const recordScheema = new mongoose.Schema({
    exercise: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Exercise'
    },
    mainData: {
        type: Array,
        required: true
    },
    secondaryData: {
        type: Array,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

export default mongoose.model('Record', recordScheema)