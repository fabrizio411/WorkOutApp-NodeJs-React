import { Router } from "express"
import {authRequired } from '../middlewares/validateToken.js'
import {
    login, 
    register, 
    logout, 
    home
} from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

router.get('/home',authRequired, home)

export default router