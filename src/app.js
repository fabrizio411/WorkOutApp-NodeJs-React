import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import routinesRoutes from './routes/routines.routes.js'
import exercisesRoutes from './routes/exercises.routes.js'
import measuresRoutes from './routes/measures.routes.js'
import recordRoutes from './routes/record.routes.js'
import programRoutes from './routes/program.routes.js'

const app = express()

// Coneccion de frontend y backend
app.use(cors({
    origin: ['http://localhost:5173', 'http://192.168.1.3:5173'],
    credentials: true
}))

// Ver request por consola
app.use(morgan('dev'))

// Trabajar con archivos .json
app.use(express.json())
// Leer datos de una cookie
app.use(cookieParser())

// Configuracion de rutas
app.use('/api', authRoutes)
app.use('/api', routinesRoutes)
app.use('/api', exercisesRoutes)
app.use('/api', measuresRoutes)
app.use('/api', recordRoutes)
app.use('/api', programRoutes)

export default app

