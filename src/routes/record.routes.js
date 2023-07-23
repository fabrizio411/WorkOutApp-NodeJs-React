import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'


const router = Router()

router.get('/record', authRequired, )

export default router