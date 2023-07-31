import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'
import { createRecord, updateRecord, deleteRecord, getHistory } from "../controllers/record.controller.js"


const router = Router()

router.post('/record', authRequired, createRecord)
router.put('/record/:id', authRequired, updateRecord)
router.delete('/record/:id', authRequired, deleteRecord)

// Obtener datos del historial de entrenamientos
router.get('/history', authRequired, getHistory)

export default router