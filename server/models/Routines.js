const mongoose = require('mongoose')

const Schema = mongoose.Schema
const RoutineSchema = new Schema({


    title: {
        type: String,
        required: true,
    },
    exercises: {
        type: Array,
        required: true
    }

    

})


module.exports = mongoose.model('Routine', RoutineSchema)