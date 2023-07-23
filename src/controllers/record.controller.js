import Record from '../models/record.model.js'
import History from '../models/recordHisroty.model.js'

import { newRecordMax, newRecordAverage } from '../libs/recordManagement.js'

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
    const {exercise, mainData, secondaryData } = req.body
    if (!Array.isArray(mainData)) mainData = [mainData]
    if (!Array.isArray(secondaryData)) secondaryData = [secondaryData]

    try {
        const newHistory = new History({
            exercise,
            mainData,
            secondaryData,
            user: req.user.id
        })
        const savedHistory = await newHistory.save()

        const recordData = await findOne({ user: req.user.id, exercise: savedHistory.exercise })
        const record = await Record.findOneAndUpdate(
            {
                user: req.user.id,
                exercise: savedHistory.exercise
            },
            {
                mainData: {
                    total: recordData.mainData.total + mainData.reduce((acc, val) => acc + val),
                    max: newRecordMax(recordData.mainData.max, mainData),
                    average: newRecordAverage(recordData.mainData.average, mainData, recordData.mainData.averageCounter),
                    averageCounter: recordData.mainData.averageCounter + 1
                },
                secondaryData: {
                    total: recordData.secondaryData.total + secondaryData.reduce((acc, val) => acc + val),
                    max: newRecordMax(recordData.secondaryData.max, secondaryData),
                    average: newRecordAverage(recordData.secondaryData.average, secondaryData, recordData.secondaryData.averageCounter),
                    averageCounter: recordData.secondaryData.averageCounter + 1
                }
            },
            {new: true}
        ).where({ user: req.user.id })

        res.json(record)
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