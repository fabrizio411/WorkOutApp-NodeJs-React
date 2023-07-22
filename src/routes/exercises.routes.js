import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.js'

import Exercise from "../models/exercise.model.js";

const router = Router()

router.post('/exercise', authRequired, async (req, res) => {
    try {
        const { name, type, muscle, isCustom } = req.body

        const newExercise = new Exercise({
            name,
            type,
            muscle,
            isCustom,
        })
    
        const exerciseSaved = await newExercise.save()
    
        res.send('ok')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
   

})

export default router