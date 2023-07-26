import mongoose from 'mongoose'

const programScheema = new mongoose.Schema({
    week: {
        type: Array,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

export default mongoose.model('Program', programScheema)