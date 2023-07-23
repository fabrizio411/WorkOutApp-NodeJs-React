import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'
import { getMeasures, createMeasure, updateMeasure, deleteMeasure } from "../controllers/measures.controller.js"


const router = Router()

router.get('/measures', authRequired, getMeasures)
router.post('/measures', authRequired, createMeasure)
router.put('/measures/:id', authRequired, updateMeasure)
router.delete('/measures/:id', authRequired, deleteMeasure)

export default router