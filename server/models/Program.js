const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ProgramSchema = new Schema({

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
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


    
})


module.exports = mongoose.model('Program', ProgramSchema)