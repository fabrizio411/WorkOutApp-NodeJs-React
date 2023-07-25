const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ExercisesSchema = new Schema({

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    mainMuscle: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    isCustom: {
        type: Boolean,
        required: true
    }

})


module.exports = mongoose.model('Exercises', ExercisesSchema)