import mongoose, { mongo } from 'mongoose'

const recordScheema = new mongoose.Schema({
    exercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true,
        unique: false
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

export default mongoose.model('Record', recordScheema)