import mongoose from 'mongoose'

const measureScheema = new mongoose.Schema({
    data: {
        type: Number,
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

export default mongoose.model('Measure', measureScheema)