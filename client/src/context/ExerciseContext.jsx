import { createContext, useContext, useState } from 'react';
import { createExercisesRequest, deleteExerciseRequest, getExerciseToUpdateRequest, getExercisesRequest, getOneExerciseRequest, updateExerciseRequest } from '../api/exercises';
import { getExerciseToUpdate } from '../../../src/controllers/exercises.controller';
import { set } from 'mongoose';

const ExerciseContext = createContext()

export const useExercise = () => {
    const context = useContext(ExerciseContext)
    if(!context) {
        throw new Error('useExercise must be used within a TaskProvider')
    }
    return context
}

export function ExerciseProvider({children}) {
    
    const [exercises, setExercises] = useState([])
    const [exerciseData, setExerciseData] = useState()

    // Obtener ejercicios del backend
    const getExercises = async () => {
        try {
            const res = await getExercisesRequest()
            setExercises(res.data)
        } catch (error) {
           console.log(error) 
        }
    }

    // Obtener estadisticas e informacion de un ejercicio
    const getOneExercise = async (id) => {
        try {
            const res = await getOneExerciseRequest(id)
            setExerciseData(res.data)
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

    // Editar un ejerciico
    const updateExercise = async (id, data) => {
        try {
            const res = await updateExerciseRequest(id, data)
        } catch (error) {
            console.log(error)
        }
    }

    const [toUpdate, setToUpdate] = useState({})
    // Obtener valores del ejercicio para editar
    const getExerciseToUpdate = async (id) => {
        try {
            const res = await getExerciseToUpdateRequest(id)
            setToUpdate(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ExerciseContext.Provider value={{
            getExercises,
            getOneExercise,
            createExercise,
            deleteExercise,
            updateExercise,
            getExerciseToUpdate,
            exerciseData,
            toUpdate,
            exercises
        }}
        >
            {children}
        </ExerciseContext.Provider>
    )
}