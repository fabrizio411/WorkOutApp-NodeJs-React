import Record from '../models/record.model.js'
import History from '../models/recordHisroty.model.js'
import Workout from '../models/workout.model.js'
import User from '../models/user.model.js'
import Exercise from '../models/exercise.model.js'

import { newRecordMax, newRecordAverage, updateTotal, updateRecordAverage, updateRecordMax, updateRecordMaxIfChanged, updateRecordAverageIfChanged } from '../libs/recordManagement.js'

export const getRecord = async (req, res) => {
    try {
        const record = await Record.find({ user: req.user.id })

        res.json(record)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createRecord = async (req, res) => {
    let { exercise, mainData, secondaryData } = req.body

    // En caso de que los datos numericos no sean numeros, se convierten en 0
    for (let i = 0; i < mainData.length; i++) {
        for (let x = 0; x < mainData[i].length; x++) {
            if (isNaN(mainData[i][x])) mainData[i][x] = 0
            if (isNaN(secondaryData[i][x])) secondaryData[i][x] = 0
        }
    }

    try {
        // Update de contador de workouts
        await User.findByIdAndUpdate(
            req.user.id,
            {
                $inc: { "workouts": 1 }
            }
        )

        let workoutRecords = []
        // Por cada ejercicio registrado
        for (let i = 0; i < exercise.length; i++) {
            const newHistory = new History({
                exercise: exercise[i],
                mainData: mainData[i],
                secondaryData: secondaryData[i],
                order: i,
                user: req.user.id
            })
            const savedHistory = await newHistory.save()
            workoutRecords.push(savedHistory._id)
        }

        const newWorkout = new Workout({
            title: req.body.title,
            records: workoutRecords,
            user: req.user.id
        })
        await newWorkout.save()

        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateRecord = async (req, res) => {
    let {exercise, mainData, secondaryData } = req.body

    try {
        const { records } = await Workout.findById(req.params.id)

        // Del documento workouts sacamos los Histoys para actualizar
        let historysToUpdate = []
        for (const val of records) {
            const wkHistory = await History.findById(val)
            historysToUpdate.push(wkHistory)
        }

        // Por cada history para actualizar 
        for (let index = 0; index < historysToUpdate.length; index++) {
            const updatedHistory = await History.findByIdAndUpdate(
                records[index],
                {
                    exercise: exercise[index],
                    mainData: mainData[index],
                    secondaryData: secondaryData[index],
                    order: index
                },
                {new: true}
            ).where({ user: req.user.id })
        }

        // Update de los ID de records
        const newRecords = []
        records.forEach((val, index) => {
            console.log(val.toString() !== exercise[index])
            console.log(val.toString())
            console.log( exercise[index])
            if (val.toString() !== exercise[index]) newRecords.push(exercise[index])
            else newRecords.push(val)
        })

        await Workout.findByIdAndUpdate(
            req.params.id,
            { 
                title: req.body.title,
                records: newRecords 
            }
        )

        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteRecord = async (req, res) => {
    try {
        // Update de contador de workouts
        await User.findByIdAndUpdate(
            req.user.id,
            {
                $inc: { "workouts": -1 }
            }
        )

        const workout = await Workout.findByIdAndDelete(req.params.id)
        if (!workout) return res.status(404).json({message: 'Workout not found'})

        // Por cada ejercicio en workout
        for (let i = 0; i < workout.records.length; i++) {
            const deletedHistory = await History.findByIdAndDelete(workout.records[i]).where({ user: req.user.id })
            if (!deletedHistory) return res.status(404).json({message: 'Record History not found'})
        }

        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getHistory = async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user.id })
        const sortedWorkouts = workouts.sort((x, y) => y.createdAt.getTime() - x.createdAt.getTime())

        // Por cada workout registrado
        for (let i = 0; i < sortedWorkouts.length; i++) {
            const exercisesArray = []

            // Por cada ejercicio del workout
            for (let x = 0; x < sortedWorkouts[i].records.length; x++) {
                const history = await History.findById(sortedWorkouts[i].records[x])
                const exercise = await Exercise.findById(history.exercise)
                const exerciseObject = {
                    name: exercise.name,
                    type: exercise.type,
                    muscle: exercise.muscle,
                    isCustom: exercise.isCustom,
                    mainData: history.mainData,
                    secondaryData: history.secondaryData,
                    order: history.order
                }
                exercisesArray.push(exerciseObject)
            }

            const sortedExercises = exercisesArray.sort((x, y) => x.order - y.order)
            sortedWorkouts[i].records = sortedExercises
        }

        res.json(sortedWorkouts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}