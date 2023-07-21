import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import routinesRoutes from './routes/routines.routes.js'

const app = express()

app.use(morgan('dev'))

app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', routinesRoutes)

export default app

