import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import routinesRoutes from './routes/routines.routes.js'
import exercisesRoutes from './routes/exercises.routes.js'
import measuresRoutes from './routes/measures.routes.js'
import recordRoutes from './routes/record.routes.js'
import programRoutes from './routes/program.routes.js'

const app = express()

app.use(morgan('dev'))

app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', routinesRoutes)
app.use('/api', exercisesRoutes)
app.use('/api', measuresRoutes)
app.use('/api', recordRoutes)
app.use('/api', programRoutes)

export default app

