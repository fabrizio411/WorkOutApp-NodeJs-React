import Exercise from "../models/exercise.model.js";

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

export const deleteExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id).where({ user: req.user.id })
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

