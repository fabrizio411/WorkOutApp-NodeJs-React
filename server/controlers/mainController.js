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

// VIEW Routines
exports.routineView = async(req, res) => {
    const routine = await Routine.findById({ _id: req.params.id })
    // .where({user: req.user.id})  Para que solo el usuario pueda acceder a la nota
    console.log(routine)

    if (routine) {
        res.render('routine-view', {
            noteID: req.params.id,
            routine,
            layout: '../views/layouts/main'
        })
    } else {
        res.send("Somenthig went wrong")
    }
}

// EDIT Routine
exports.routineEdit = async(req, res) => {
    const routine = await Routine.findById({ _id: req.params.id })

    if (routine) {
        res.render('routine-edit', {
            noteID: req.params.id,
            routine,
            layout: '../views/layouts/main'
        })
    } else {
        res.send("Somenthig went wrong")
    }
}