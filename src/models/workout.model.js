import mongoose from 'mongoose'

const workoutScheema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    records: {
        type: Array,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Workout', workoutScheema)