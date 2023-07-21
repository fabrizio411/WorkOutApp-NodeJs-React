import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        mongoose.connect('mongodb+srv://fabrizio:h24kj327UySJhClk@workoutapp.ywivijj.mongodb.net/')
        console.log('>>> DB connected')
    } catch (error) {
        console.log(error)
    }
}
