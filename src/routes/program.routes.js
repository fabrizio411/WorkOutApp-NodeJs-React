import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'
import { getProgram, updateProgram } from "../controllers/prgram.conteoller.js"

const router = Router()

router.get('/program', authRequired, getProgram)
router.put('/program', authRequired, updateProgram)

export default router