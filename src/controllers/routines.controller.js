import User from '../models/user.model.js'
import Routine from '../models/routine.model.js'

export const getRoutines = async (req, res) => {
    const routines = await Routine.find({ user: req.user.id })

    res.json(routines)
}

export const getOneRoutine = async (req, res) => {
    const routine = await Routine.findById(req.params.id).where({ user: req.user.id })

    if (!routine) return res.status(404).json({message: 'Routine not found'})
    res.json(routine)
}

export const createRoutine = async (req, res) => {
    const newRoutine = new Routine({
        name: req.body.name,
        total: 0,
        exercises: req.body.exercises,
        user: req.user.id
    })
    const savedRoutine = await newRoutine.save()

    res.json(savedRoutine)
}

export const updateRoutine = async (req, res) => {
    const routine = await Routine.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            exercises: req.body.exercises
        },
        {new: true}).where({ user: req.user.id })

    if (!routine) return res.status(404).json({message: 'Routine not found'})
    res.sendStatus(204)
}

export const deleteRoutine = async (req, res) => {
    const routine = await Routine.findByIdAndDelete(req.params.id, {new: true}).where({ user: req.user.id })

    if (!routine) return res.status(404).json({message: 'Routine not found'})
    res.json(routine)
}
