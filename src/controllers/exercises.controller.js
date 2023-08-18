import { getAverage, getMax, getTotal } from '../libs/getExerciseData.js'
import Exercise from '../models/exercise.model.js'
import History from '../models/recordHisroty.model.js'

/*
-- DEV -- Create regular exercise
*/
export const createExerciseDEV = async (req, res) => {
    try {
        const { name, type, muscle } = req.body

        const newExercise = new Exercise({
            name,
            type,
            muscle,
            isCustom: false
        })
    
        const exerciseSaved = await newExercise.save()
    
        res.send('ok')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
   
}

export const getExercise = async (req, res) => {
    try {
        const exercises = await Exercise.find({ isCustom: false })
        const exercisesCustom = await Exercise.find({ user: req.user.id })
        const exercisesAll = [...exercises, ...exercisesCustom]

        res.json(exercisesAll)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getOneExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        const exerciseData = await History.find({ user: req.user.id, exercise: req.params.id })

        if (exerciseData.length === 0) {
            const data = {
                id: exercise._id,
                name: exercise.name,
                muscle: exercise.muscle,
                isCustom: exercise.isCustom,
                isData: false
            }

            res.json(data)
            return
        }

        let typeFormated = ['', 'Weight']
        let unitMain = ''
        let unitSecondary = 'kg'
        if (exercise.type === 'REPS/WEIGHT' || exercise.type === 'REPS') {
            typeFormated[0] = 'Repetitions'
            unitMain = 'reps'
        }
        else if (exercise.type === 'DUR/WEIGHT' || exercise.type === 'DUR') {
            typeFormated[0] = 'Duration'
            unitMain = 'seg'
        }
        else if (exercise.type === 'DIST/DUR') {
            typeFormated = ['Distance', 'Duration']
            unitMain = 'km'
            unitSecondary = 'min'
        }

        let isSecondaryData = true
        if (exercise.type === 'REPS' || exercise.type === 'DUR') isSecondaryData = false

        const data = {
            id: exercise._id,
            name: exercise.name,
            type: typeFormated,
            unitMain: unitMain,
            unitSecondary: unitSecondary,
            muscle: exercise.muscle,
            isCustom: exercise.isCustom,
            isData: true,
            mainData: {
                total: getTotal(exerciseData, 'MAIN'),
                max: getMax(exerciseData, 'MAIN'),
                average: getAverage(exerciseData, 'MAIN')
            },
            isSecondaryData: isSecondaryData,
            secondaryData: {
                total: getTotal(exerciseData, 'SECONDARY'),
                max: getMax(exerciseData, 'SECONDARY'),
                average: getAverage(exerciseData, 'SECONDARY')
            }
        }

        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createExercise = async (req, res) => {
    const { name, type, muscle } = req.body

    try {

        const newExercise = new Exercise({
            name,
            type,
            muscle,
            isCustom: true,
            user: req.user.id
        })
    
        const exerciseSaved = await newExercise.save()
    
        res.send(exerciseSaved)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
   
}

export const updateExercise = async (req, res) => {
    const { name, muscle } = req.body

    try {
        const exercise = await Exercise.findByIdAndUpdate(
            req.params.id, 
            {
                name: name,
                muscle: muscle
            },
            {new: true}
        )
        res.json(exercise)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getExerciseToUpdate = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        res.json(exercise)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id).where({ user: req.user.id, isCustom: true })
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

