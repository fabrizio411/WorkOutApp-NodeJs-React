import Routine from '../models/routine.model.js'

export const getRoutines = async (req, res) => {
    try {
        const routines = await Routine.find({ user: req.user.id })

        res.json(routines)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getOneRoutine = async (req, res) => {
    try {
        const routine = await Routine.findById(req.params.id).where({ user: req.user.id })

        if (!routine) return res.status(404).json({message: 'Routine not found'})
        res.json(routine)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createRoutine = async (req, res) => {
    const { name, exercises } = req.body
    try {
        const newRoutine = new Routine({
            name: name,
            total: 0,
            exercises: exercises,
            user: req.user.id
        })
        const savedRoutine = await newRoutine.save()
    
        res.json(savedRoutine)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateRoutine = async (req, res) => {
    try {
        const routine = await Routine.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                exercises: req.body.exercises
            },
            {new: true}).where({ user: req.user.id })
    
        if (!routine) return res.status(404).json({message: 'Routine not found'})
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteRoutine = async (req, res) => {
    try {
        const routine = await Routine.findByIdAndDelete(req.params.id).where({ user: req.user.id })

        if (!routine) return res.status(404).json({message: 'Routine not found'})
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
