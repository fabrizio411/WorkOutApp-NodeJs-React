import mongoose from 'mongoose'

export const connectDB = async () => {
    // Coneccion con base de datos
    try {
        mongoose.connect('mongodb+srv://fabrizio:h24kj327UySJhClk@workoutapp.ywivijj.mongodb.net/')
        console.log('>>> DB connected')
    } catch (error) {
        console.log(error)
    }
}
