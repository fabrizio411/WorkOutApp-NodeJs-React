const Exercises = require('../models/Exercises')
const Routine = require('../models/Routines')
const Record = require('../models/Record')

const mongoose = require('mongoose')



//////////////////////////////
/////////// HOME /////////////
//////////////////////////////
// GET Home
exports.home = (req, res) => {
    const locals = {
        title: 'Home | WorkOutApp'
    }
    res.render('home', {
        userName: req.user.name,
        locals
    })
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

    try {
        const exercises = await Exercises.find({ isCustom: false })
        const exercisesCustom = await Exercises.find({ isCustom: true }).where({ user: req.user.id }).lean()
        exercisesCustom.forEach(element => { exercises.push(element) })
        res.render('routine-create', {
            userName: req.user.name,
            exercises,
            locals
        })
    } catch (error) {
        console.log(error);
    }
}

exports.routineCreateAdd = async(req, res) => {
    try {
        const exercisesArray = []
        if (Array.isArray(req.body.name)) {
            for (let i = 0; i < req.body.name.length; i++) {
                let eachExercise = {
                    name: req.body.name[i],
                    class: req.body.class[i],
                    mainMuscle: req.body.main_muscle[i],
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
                mainMuscle: req.body.main_muscle[i],
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
        await Routine.deleteOne({ _id: req.params.id }).where({ user: req.user.id })
        res.redirect('/routines')
    } catch (error) {
        console.log(error)
    }
}

// EDIT Routine
exports.routineEdit = async(req, res) => {
    const locals = {title: 'Edit Routine | WorkOutApp',}
    const routine = await Routine.findById({ _id: req.params.id }).where({ user: req.user.id }).lean()
    const exercises = await Exercises.find({ isCustom: false })
    const exercisesCustom = await Exercises.find({ isCustom: true }).where({ user: req.user.id }).lean()
    exercisesCustom.forEach(element => { exercises.push(element) })

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
        const exercises = await Exercises.find({ isCustom: false })
        const exercisesCustom = await Exercises.find({ isCustom: true }).where({ user: req.user.id }).lean()
        exercisesCustom.forEach(element => { exercises.push(element) })
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
        const newExercise = new Exercises ({
            user: req.user.id,
            name: req.body.name,
            mainMuscle: req.body.main_muscle,
            class: req.body.class,
            isCustom: true
        })
        await newExercise.save()

        const record = await Record.findOne({ user: req.user.id })
        record.exercises.push({
            id: newExercise.id,
            name: newExercise.name,
            class: newExercise.class,
            mainMuscle: newExercise.mainMuscle,
            setsIndex: [0],
            note: [],
            mainData: [],
            secondData: [],
        })
        await Record.findOneAndUpdate(
            { user: req.user.id },
            { exercises: record.exercises }
        )


        res.redirect('/exercises') 
    } catch (error) {
        console.log(error)
    }
}

// DELETE Exercise
exports.exerciseDelete = async(req, res) => {
    try {
        await Exercises.deleteOne({ _id: req.params.id }).where({user: req.user.id})
        res.redirect('/exercises')
    } catch (error) {
        console.log(error)
    }
}

// POST - CREATE DEFAUL EXERCISES (DEV)
exports.exerciseDefaultCreate = async(req, res) => {
    try {
        const newExercise = {
            name: req.body.name,
            mainMuscle: req.body.main_muscle,
            class: req.body.class,
            isCustom: false
        }

        await Exercises.create(newExercise)
        res.redirect('/exercises') 
    } catch (error) {
        console.log(error)
    }
}






///////////////////////////////
/////////// WORKOUT ///////////
///////////////////////////////
exports.workout = async(req, res) => {
    const routine = await Routine.findById({ _id: req.params.id }).where({ user: req.user.id }).lean()
    const locals = {title: `${routine.title} | WorkOutApp`,}

    const record = await Record.findOne({}).where({ user: req.user.id }).lean()

    res.render('workout', {
        userName: req.user.name,
        routine,
        record,
        locals
    })

}


// PUT Add Workout Record
exports.workoutRecord = async(req, res) => {
    try {
        const record = await Record.findOne({}).where({ user: req.user.id })
        console.log(req.body)

        // Workouts Data 
        const workoutsDates = record.workouts.dates
        workoutsDates.push(new Date(req.body.workout_date))

        // Procces sets into array indexes to send correct data
        exrSets = req.body.exercises_sets.map(element => parseInt(element))
        exrSetsIndex = []
        let x = 0
        exrSets.forEach(element => {
            const accumulatedValue = element + x
            exrSetsIndex.push(accumulatedValue)
            x = accumulatedValue
        })
        exrSetsIndex.unshift(0)

        // Main Data Process = Array[Array,,, Array] with correc data divition
        let mainDataArray = []
        reqBodyMainData = req.body.mainData.map(element => {
            if (element === '') return 0
            else return parseInt(element)
        })
        for (let i = 0; i < exrSetsIndex.length - 1; i++) {
            mainDataArray.push(reqBodyMainData.slice(exrSetsIndex[i], exrSetsIndex[i + 1]))
        }

        // Second Data Process
        let secondDataArray = []
        reqBodysecondData = req.body.secondData.map(element => {
            if (element === '') return 0
            else return parseInt(element)
        })
        for (let i = 0; i < exrSetsIndex.length - 1; i++) {
            secondDataArray.push(reqBodysecondData.slice(exrSetsIndex[i], exrSetsIndex[i + 1]))
        }


        
        
        // Exercises Data
        const exercisesGeneral = record.exercises
        exercisesGeneral.forEach(element => {
            for (let i = 0; i < req.body.name.length; i++) {
                if (element.name === req.body.name[i]) {
                    // If the exercise has data

                    // Update note
                    const newNoteArr = element.note
                    newNoteArr.push(req.body.note[i])

                    // Update sets index
                    const newSetsArr = element.setsIndex
                    let setValue = 0
                    if (newSetsArr.length > 1) setValue = newSetsArr[newSetsArr.length - 1] + parseInt(req.body.exercises_sets[i])
                    else setValue = parseInt(req.body.exercises_sets[i])
                    newSetsArr.push(setValue)
                    
                    // Update mainData
                    const newMainDataArr = element.mainData
                    mainDataArray[i].forEach(item => {
                        newMainDataArr.push(item)
                    })

                    //Update secondData
                    const newSecondDataArr = element.secondData
                    secondDataArray[i].forEach(item => {
                        newSecondDataArr.push(item)
                    })

                    element.note = newNoteArr
                    element.mainData = newMainDataArr
                    element.secondData = newSecondDataArr



                } 
            }
        })
        
        console.log(exercisesGeneral)

        // await Record.findOneAndUpdate(
        //     { user: req.user.id },
        //     {
        //         workouts: {
        //             total: record.workouts.total + 1,
        //             dates: workoutsDates
        //         },
        //         exercises: exercisesGeneral
        //     }
        // )
        res.redirect('/routines')
    } catch (error) {
        console.log(error)
    }
}   