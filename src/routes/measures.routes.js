import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.js'


const router = Router()

router.get('/measures', authRequired, )
router.post('/measures', authRequired, )
router.put('/measures/:id', authRequired, )
router.delete('/measures/:id', authRequired, )

export default router