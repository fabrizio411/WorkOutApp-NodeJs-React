import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.js'
import {
    getRoutines,
    getOneRoutine,
    createRoutine,
    updateRoutine,
    deleteRoutine
} from '../controllers/routines.controller.js';

const router = Router()

router.get('/routines', authRequired, getRoutines)
router.get('/routines/:id', authRequired, getOneRoutine)
router.post('/routines', authRequired, createRoutine)
router.put('/routines/:id', authRequired, updateRoutine)
router.delete('/routines/:id', authRequired, deleteRoutine)

export default router