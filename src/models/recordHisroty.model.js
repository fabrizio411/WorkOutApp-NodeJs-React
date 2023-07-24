import mongoose, { mongo } from 'mongoose'

const recordHistoryScheema = new mongoose.Schema({
    exercise: {
        type: mongoose.Schema.Types.ObjectId,
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
    order: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

export default mongoose.model('RecordHistory', recordHistoryScheema)