import mongoose from 'mongoose'

const programScheema = new mongoose.Schema({
    mon: {
        type: Array,
        required: true
    },
    tue: {
        type: Array,
        required: true
    },
    wed: {
        type: Array,
        required: true
    },
    thu: {
        type: Array,
        required: true
    },
    fri: {
        type: Array,
        required: true
    },
    sat: {
        type: Array,
        required: true
    },
    sun: {
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