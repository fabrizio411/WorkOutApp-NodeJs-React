import mongoose from 'mongoose'

const workoutScheema = new mongoose.Schema({
    records: {
        type: Array,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Workout', workoutScheema)