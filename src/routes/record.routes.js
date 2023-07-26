import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'
import { getRecord, createRecord, updateRecord, deleteRecord, getHistory } from "../controllers/record.controller.js"


const router = Router()

router.get('/record', authRequired, getRecord)
router.post('/record', authRequired, createRecord)
router.put('/record/:id', authRequired, updateRecord)
router.delete('/record/:id', authRequired, deleteRecord)

router.get('/history', authRequired, getHistory)

export default router