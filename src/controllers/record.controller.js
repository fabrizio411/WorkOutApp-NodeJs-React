import Record from '../models/record.model.js'
import History from '../models/recordHisroty.model.js'
import Workout from '../models/workout.model.js'
import User from '../models/user.model.js'

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
    let {exercise, mainData, secondaryData } = req.body

    /* TODO: CUANDO MANDE LOS DATOS VER QUE SIGAN LA ESTRUCTURA
        funcion se va a ecribir en carpeta libs
        {
            "exercise": ['', '', ''],
            "mainData": [[], [], []],
            "secondaryData": [[], [], []]
        }

        tambien redondear los valores en caso de que se igresen decimales
    */

    for (let i = 0; i < mainData.length; i++) {
        for (let x = 0; x < mainData[i].length; x++) {
            if (isNaN(mainData[i][x])) mainData[i][x] = 0
            if (isNaN(secondaryData[i][x])) secondaryData[i][x] = 0
        }
    }

    try {
        User.findByIdAndUpdate(
            req.user.id,
            {
                $inc: { "workouts": 1 }
            }
        )

        let workoutRecords = []
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

            const recordData = await Record.findOne({ user: req.user.id, exercise: savedHistory.exercise })
            const record = await Record.findOneAndUpdate(
                {
                    user: req.user.id,
                    exercise: savedHistory.exercise
                },
                {
                    mainData: {
                        total: recordData.mainData.total + savedHistory.mainData.reduce((acc, val) => acc + val),
                        max: newRecordMax(recordData.mainData.max, savedHistory.mainData, savedHistory.id),
                        average: newRecordAverage(recordData.mainData.average, savedHistory.mainData, recordData.mainData.averageCounter),
                        averageCounter: recordData.mainData.averageCounter + savedHistory.mainData.length
                    },
                    secondaryData: {
                        total: recordData.secondaryData.total + savedHistory.secondaryData.reduce((acc, val) => acc + val),
                        max: newRecordMax(recordData.secondaryData.max, savedHistory.secondaryData, savedHistory.id),
                        average: newRecordAverage(recordData.secondaryData.average, savedHistory.secondaryData, recordData.secondaryData.averageCounter),
                        averageCounter: recordData.secondaryData.averageCounter + savedHistory.secondaryData.length
                    }
                }
            ).where({ user: req.user.id })
        }

        const newWorkout = new Workout({
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

        let historysToUpdate = []
        for (const val of records) {
            const wkHistory = await History.findById(val)
            historysToUpdate.push(wkHistory)
        }

        for (let index = 0; index < historysToUpdate.length; index++) {
            const history = await History.findById(records[index])
            let exerciseChange = history.exercise !== exercise[index]
            
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

            const recordData = await Record.findOne({ user: req.user.id, exercise: updatedHistory.exercise })
            const record = await Record.findOneAndUpdate(
                {
                    user: req.user.id,
                    exercise: updatedHistory.exercise
                },
                {
                    mainData: {
                        total: updateTotal(recordData.mainData.total, history.mainData, updatedHistory.mainData, exerciseChange),
                        max: updateRecordMax(recordData.mainData.max, updatedHistory.mainData, updatedHistory.id),
                        average: updateRecordAverage(recordData.mainData.average, history.mainData, updatedHistory.mainData, recordData.mainData.averageCounter),
                        averageCounter: recordData.mainData.averageCounter - history.mainData.length + updatedHistory.mainData.length
                    },
                    secondaryData: {
                        total: updateTotal(recordData.secondaryData.total, history.secondaryData, updatedHistory.secondaryData, exerciseChange),
                        max: updateRecordMax(recordData.secondaryData.max, updatedHistory.secondaryData, updatedHistory.id),
                        average: updateRecordAverage(recordData.secondaryData.average, history.secondaryData, updatedHistory.secondaryData, recordData.secondaryData.averageCounter),
                        averageCounter: recordData.secondaryData.averageCounter - history.secondaryData.length + updatedHistory.secondaryData.length
                    }
                }
            )

            if (!record) return res.status(404).json({message: 'Record not found'})

            if (exerciseChange) {
                const oldRecordData = await Record.findOne({ user: req.user.id, exercise: history.exercise })

                const oldRecord = await Record.findOneAndUpdate(
                    { user: req.user.id, exercise: history.exercise },
                    {
                        mainData: {
                            total: oldRecordData.mainData.total - mainData[index].reduce((acc, val) => acc + val),
                            max: updateRecordMaxIfChanged(oldRecordData.mainData.max, history.id),
                            average: updateRecordAverageIfChanged(oldRecordData.mainData.average, history.mainData, oldRecordData.mainData.averageCounter),
                            averageCounter: oldRecordData.mainData.averageCounter - history.mainData.length
                        },
                        secondaryData: {
                            total: oldRecordData.secondaryData.total - secondaryData[index].reduce((acc, val) => acc + val),
                            max: updateRecordMaxIfChanged(oldRecordData.secondaryData.max, history.id),
                            average: updateRecordAverageIfChanged(oldRecordData.secondaryData.average, history.secondaryData, oldRecordData.secondaryData.averageCounter),
                            averageCounter: oldRecordData.secondaryData.averageCounter - history.secondaryData.length
                        }
                    }
                )
            }
        }

        records.forEach((val, index) => {
            if (val !== exercise[index]) val = exercise[index]
        })

        await Workout.findByIdAndUpdate(
            req.params.id,
            { records: records }
        )

        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    /* TODO: CUANDO MANDE LOS DATOS VER QUE SIGAN LA ESTRUCTURA
        funcion se va a ecribir en carpeta libs
        {
            "exercise": ['', '', ''],
            "mainData": [[], [], []],
            "secondaryData": [[], [], []]

            tambien redondear los valores en caso de que se igresen decimales
        }
    */
}

export const deleteRecord = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id)
        if (!workout) return res.status(404).json({message: 'Workout not found'})


        for (let i = 0; i < workout.records.length; i++) {
            const wkHistory = await History.findById(workout.records[i])

            const oldRecord = await Record.findOne({ user: req.user.id, exercise: wkHistory.exercise })
            const newRecord = await Record.findOneAndUpdate(
                { user: req.user.id, exercise: wkHistory.exercise },
                {
                    mainData: {
                        total: oldRecord.mainData.total - wkHistory.mainData.reduce((acc, val) => acc + val),
                        max: updateRecordMaxIfChanged(oldRecord.mainData.max, wkHistory.id),
                        average: updateRecordAverageIfChanged(oldRecord.mainData.average, wkHistory.mainData, oldRecord.mainData.averageCounter),
                        averageCounter: oldRecord.mainData.averageCounter - wkHistory.mainData.length
                    },
                    secondaryData: {
                        total: oldRecord.secondaryData.total - wkHistory.secondaryData.reduce((acc, val) => acc + val),
                        max: updateRecordMaxIfChanged(oldRecord.secondaryData.max, wkHistory.id),
                        average: updateRecordAverageIfChanged(oldRecord.secondaryData.average, wkHistory.secondaryData, oldRecord.secondaryData.averageCounter),
                        averageCounter: oldRecord.secondaryData.averageCounter - wkHistory.secondaryData.length
                    }
                },
                {new: true}
            )

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
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}