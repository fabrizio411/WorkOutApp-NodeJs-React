import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'
import { createExerciseDEV, getExercise, createExercise, deleteExercise } from "../controllers/exercises.controller.js"


const router = Router()

// Ruta para crear ejercicios default
router.post('/exercisesDEV', authRequired, createExerciseDEV)

router.get('/exercises', authRequired, getExercise)
router.post('/exercises', authRequired, createExercise)
router.delete('/exercises/:id', authRequired, deleteExercise)

export default router