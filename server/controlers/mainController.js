const Routine = require('../models/Routines')
const mongoose = require('mongoose')

// GET Profile
exports.profile = async (req, res) => {
    const locals = {
        title: 'Profile | WorkOutApp'
    }
    res.render('profile', {
        locals
    })
}


// GET Routines
exports.routines = async (req, res) => {


    try {
        const routineData = await Routine.find({})
        console.log(routineData)

        const locals = {
            title: 'Routines | WorkOutApp',
            description: 'View and create routines'
        }
        res.render('routines', {
            locals,
            routineData
        })

    } catch (error) {
        console.log(error)
    }
}