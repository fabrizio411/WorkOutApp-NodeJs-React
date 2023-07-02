const Exercises = require('../models/Exercises')
const Routine = require('../models/Routines')

const mongoose = require('mongoose')



//////////////////////////////
/////////// HOME /////////////
//////////////////////////////
// GET Home
exports.home = (req, res) => {
    const locals = {
        title: 'Home | WorkOutApp'
    }
    res.render('home')
}







//////////////////////////////
////////// PROFILE ///////////
//////////////////////////////
// GET Profile
exports.profile = async (req, res) => {
    const locals = {title: 'Profile | WorkOutApp'}
    console.log(req.user.id)
    res.render('profile', {
        userName: req.user.name,
        locals
    })

}





//////////////////////////////
////////// SETTINGS //////////
//////////////////////////////
// GET Profile
exports.settings = async (req, res) => {
    const locals = {title: 'Settings | WorkOutApp'}
    res.render('settings', {
        userName: req.user.name,
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
        const routineData = await Routine.find({user: req.user.id})
        res.render('routines', {
            userName: req.user.name,
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
        const routine = await Routine.findById({ _id: req.params.id }).where({ user: req.user.id }).lean()
        const locals = {title: `${routine.title} | WorkOutApp`,}
        res.render('routine-view', {
            userName: req.user.name,
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
        userName: req.user.name,
        exercises,
        locals
    })
}

exports.routineCreateAdd = async(req, res) => {
    try {
        const exercisesArray = []
        if (Array.isArray(req.body.name)) {
            for (let i = 0; i < req.body.name.length; i++) {
                let eachExercise = {
                    name: req.body.name[i],
                    class: req.body.class[i],
                    note: req.body.note[i],
                    sets: req.body.sets[i],
                    reps: req.body.reps[i],
                    rest: req.body.rest[i]
                }
                exercisesArray.push(eachExercise)
            }
        } else {
            exercisesArray.push({
                name: req.body.name,
                class: req.body.class,
                note: req.body.note,
                sets: req.body.sets,
                reps: req.body.reps,
                rest: req.body.rest
            })
        }

        const newRoutine = {
            user: req.user.id,
            title: req.body.routine_title,
            exercises: exercisesArray
        }

        await Routine.create(newRoutine)
        res.redirect('/routines')
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
    const routine = await Routine.findById({ _id: req.params.id }).where({ user: req.user.id }).lean()
    const exercises = await Exercises.find({})

    if (routine) {
        res.render('routine-edit', {
            userName: req.user.name,
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
        const exercisesArray = []
        if (Array.isArray(req.body.name)) {
            for (let i = 0; i < req.body.name.length; i++) {
                let eachExercise = {
                    name: req.body.name[i],
                    class: req.body.class[i],
                    note: req.body.note[i],
                    sets: req.body.sets[i],
                    reps: req.body.reps[i],
                    rest: req.body.rest[i]
                }
                exercisesArray.push(eachExercise)
            }
        } else {
            exercisesArray.push({
                name: req.body.name,
                class: req.body.class,
                note: req.body.note,
                sets: req.body.sets,
                reps: req.body.reps,
                rest: req.body.rest
            })
        }


        await Routine.findOneAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.routine_title,
                exercises: exercisesArray
            }
        )
        res.redirect('/routines')

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
            userName: req.user.name,
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