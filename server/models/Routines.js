const mongoose = require('mongoose')

const Schema = mongoose.Schema
const RoutineSchema = new Schema({


    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    exercises: {
        type: Array,
        required: true
    }


})


module.exports = mongoose.model('Routine', RoutineSchema)