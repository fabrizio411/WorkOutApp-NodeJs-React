import app from './app.js'
import {connectDB} from './db.js'

connectDB()

// Start server
app.listen(3000)
console.log('Server on port', 3000)