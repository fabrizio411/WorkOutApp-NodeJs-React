import { Router } from "express"
import { authRequired } from '../middlewares/validateToken.middleware.js'
import { validateSchema } from '../middlewares/validatator.middleware.js'
import { registerSchema, loginSchema } from '../validations/auth.schema.js'
import {login, register, logout } from '../controllers/auth.controller.js'

const router = Router()

// Se usa la validacion con Zod como middleware
router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)

export default router