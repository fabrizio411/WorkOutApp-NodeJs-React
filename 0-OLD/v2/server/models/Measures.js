const mongoose = require('mongoose')

const Schema = mongoose.Schema
const MeasuresSchema = new Schema({

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    goal: {
        type: String,
        required: true
    },
    measures: {
        type: Array,
        required: true
    },
    dates: {
        type: Array,
        required: true
    },


    
})


module.exports = mongoose.model('Measures', MeasuresSchema)