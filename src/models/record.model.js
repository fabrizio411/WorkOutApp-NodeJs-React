import mongoose, { mongo } from 'mongoose'

const recordScheema = new mongoose.Schema({
    exercise: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Exercise',
        unique: true
    },
    mainData: {
        type: Object,
        required: true
    },
    secondaryData: {
        type: Object,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    }
})

export default mongoose.model('Record', recordScheema)