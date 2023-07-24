import Record from '../models/record.model.js'
import History from '../models/recordHisroty.model.js'
import Workout from '../models/workout.model.js'

import { newRecordMax, newRecordAverage, updateTotal, updateRecordAverage, updateRecordMax, updateRecordMaxIfChanged, updateRecordAverageIfChanged } from '../libs/recordManagement.js'
import { record } from 'zod'

export const getRecord = async (req, res) => {
    try {
        const record = await Record.find({ user: req.user.id })

        res.json(record)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}




// TODO LO DE ABAJO ESTA HECHO PARA CUANDO SOLO HAY UN EJERCICIO
//
//     CUIDADO
//

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
                        max: newRecordMax(recordData.mainData.max, savedHistory.mainData, savedHistory._id),
                        average: newRecordAverage(recordData.mainData.average, savedHistory.mainData, recordData.mainData.averageCounter),
                        averageCounter: recordData.mainData.averageCounter + savedHistory.mainData.length
                    },
                    secondaryData: {
                        total: recordData.secondaryData.total + savedHistory.secondaryData.reduce((acc, val) => acc + val),
                        max: newRecordMax(recordData.secondaryData.max, savedHistory.secondaryData, savedHistory._id),
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
    const {exercise, mainData, secondaryData } = req.body
    if (!Array.isArray(mainData)) mainData = [mainData]
    if (!Array.isArray(secondaryData)) secondaryData = [secondaryData]

    try {
        const history = await History.findByIdAndUpdate(
            req.params.id,
            {
                exercise,
                mainData,
                secondaryData
            },
            {new: true}
        ).where({ user: req.user.id })
        
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteRecord = async (req, res) => {
    try {
        
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