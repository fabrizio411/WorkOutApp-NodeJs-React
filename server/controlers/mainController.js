const Exercises = require('../models/Exercises')
const Routine = require('../models/Routines')

const mongoose = require('mongoose')



//////////////////////////////
/////////// HOME /////////////
//////////////////////////////
// GET Home
exports.home = (req, res) => {
    const locals = {title: 'Home | WorkOutApp'}
    res.render('home')
}







//////////////////////////////
////////// PROFILE ///////////
//////////////////////////////
// GET Profile
exports.profile = async (req, res) => {
    const locals = {title: 'Profile | WorkOutApp'}
    res.render('profile', {
        locals
    })
}





//////////////////////////////
////////// ROUTINES //////////
//////////////////////////////
// GET Routines
exports.routines = async (req, res) => {
    const locals = {title: 'Routines | WorkOutApp',}

    try {
        const routineData = await Routine.find({})
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


    try {
        const routine = await Routine.findById({ _id: req.params.id })
        const locals = {title: `${routine.title} | WorkOutApp`,}
        res.render('routine-view', {
            noteID: req.params.id,
            routine,
            locals
        })
    } catch (error) {
        console.log(error)
    }
}

// ADD Routine
exports.routineCreate = async(req, res) => {
    const locals = {title: 'Create Routine | WorkOutApp',}

    const exercises = await Exercises.find({})

    res.render('routine-create', {
        exercises,
        locals
    })
}

exports.routineCreateAdd = async(req, res) => {
    try {
        await Routine.create(req.body)
        res.redirect('/routines')  // Not working, Redirect in js file
    } catch (error) {
        console.log(error)
    }

}

// DELETE Routine
exports.routineDelete = async(req, res) => {
    try {
        await Routine.deleteOne({ _id: req.params.id })
        // .where({user: req.user.id})  Para que solo el usuario pueda acceder a la nota
        res.redirect('/routines')
    } catch (error) {
        console.log(error)
    }
}

// EDIT Routine
exports.routineEdit = async(req, res) => {
    const locals = {title: 'Edit Routine | WorkOutApp',}
    const routine = await Routine.findById({ _id: req.params.id })
    const exercises = await Exercises.find({})

    if (routine) {
        res.render('routine-edit', {
            routine,
            exercises,
            locals
        })
    } else {
        res.send("Somenthig went wrong")
    }
}

exports.routineEditUpdate = async(req, res) => {
    try {
        await Routine.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                title: req.body.title,
                exercises: req.body.exercises
            }
        )
        res.redirect('/routines')  // Not working, Redirect in js file

    } catch (error) {
        console.log(error)
    }
}





///////////////////////////////
////////// EXERCISES //////////
///////////////////////////////
exports.exercises = async(req, res) => {
    const locals = {title: 'Exercises | WorkOutApp',}

    try {
        const exercises = await Exercises.find({})
        res.render('exercises', {
            exercises,
            locals
        })
    } catch (error) {
        console.log(error);
    }
}

// ADD Exercise
exports.exercisesCreate = async(req, res) => {
    try {
        await Exercises.create(req.body)
        res.redirect('/routines')  // Not working, Redirect in js file
    } catch (error) {
        console.log(error)
    }
}

// DELETE Exercise
exports.exerciseDelete = async(req, res) => {
    try {
        await Exercises.deleteOne({ _id: req.params.id })
        // .where({user: req.user.id})  Para que solo el usuario pueda acceder a la nota
        res.redirect('/exercises')
    } catch (error) {
        console.log(error)
    }
}