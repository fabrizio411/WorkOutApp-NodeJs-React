import { createContext, useContext, useState } from 'react';
import { createExercisesRequest, deleteExerciseRequest, getExercisesRequest } from '../api/exercises';

const ExerciseContext = createContext()

export const useExercise = () => {
    const context = useContext(ExerciseContext)
    if(!context) {
        throw new Error('useExercise must be used within a TaskProvider')
    }
    return context
}

export function ExerciseProvider({children}) {
    
    const [exercies, setExercises] = useState([])

    // Obtener ejercicios del backend
    const getExercises = async () => {
        try {
            const res = await getExercisesRequest()
            setExercises(res.data)
        } catch (error) {
           console.log(error) 
        }
    }

    // Crear ejercicio en BD
    const createExercise = async (exercise) => {
        try {
            const res = await createExercisesRequest(exercise)
        } catch (error) {
            console.log(error)
        }
    }

    // Eliminar un ejericio
    const deleteExercise = async (id) => {
        try {
            const res = await deleteExerciseRequest(id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ExerciseContext.Provider value={{
            getExercises,
            createExercise,
            deleteExercise,
            exercies
        }}
        >
            {children}
        </ExerciseContext.Provider>
    )
}