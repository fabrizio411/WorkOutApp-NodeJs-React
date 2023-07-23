import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'
import { validateSchema } from '../middlewares/validatator.middleware.js'
import { registerSchema, loginSchema } from '../validations/auth.schema.js'
import {login, register, logout, home } from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)

router.get('/home',authRequired, home)

export default router