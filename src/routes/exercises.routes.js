import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'
import { createExerciseDEV, getExercise, createExercise, deleteExercise, getOneExercise, updateExercise, getExerciseToUpdate } from "../controllers/exercises.controller.js"


const router = Router()

// Ruta para crear ejercicios default
router.post('/exercisesDEV', authRequired, createExerciseDEV)

router.get('/exercises', authRequired, getExercise)
router.get('/exercises/:id', authRequired, getOneExercise)
router.post('/exercises', authRequired, createExercise)
router.put('/edit-exercise/:id', authRequired, updateExercise)
router.get('/edit-exercise/:id', authRequired, getExerciseToUpdate)
router.delete('/exercises/:id', authRequired, deleteExercise)

export default router