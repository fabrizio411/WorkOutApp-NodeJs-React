const mongoose = require('mongoose')

const Schema = mongoose.Schema
const RoutineSchema = new Schema({


    title: {
        type: String,
        required: true,
    },
    note: {
        type: String
    },
    exercises: {
        type: Array,
        required: true
    }

    

})


module.exports = mongoose.model('Routine', RoutineSchema)