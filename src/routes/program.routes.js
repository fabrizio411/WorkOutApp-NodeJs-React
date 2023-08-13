import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'
import { getProgram, updateProgram } from "../controllers/program.conteoller.js"

const router = Router()

router.get('/program', authRequired, getProgram)
router.put('/program/:id', authRequired, updateProgram)

export default router