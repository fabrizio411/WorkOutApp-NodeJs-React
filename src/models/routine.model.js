import mongoose from 'mongoose'

const routineScheema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    total: {
        type: Number,
        required: true,
    },
    exercises: {
        type: Array,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

export default mongoose.model('Routine', routineScheema)