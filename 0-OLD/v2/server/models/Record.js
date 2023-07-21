const mongoose = require('mongoose')

const Schema = mongoose.Schema
const RecordSchema = new Schema({


    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    workouts: {
        type: Object,
        required: true,
    },
    exercises: {
        type: Array,
        required: true,
    },


})


module.exports = mongoose.model('Record', RecordSchema)