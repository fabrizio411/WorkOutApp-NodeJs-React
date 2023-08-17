import { createContext, useContext, useState } from "react";
import { createRoutinesRequest, deleteRoutinesRequest, getOneRoutineRequest, getRoutinesRequest } from '../api/routines'

const RoutineContext = createContext()

export const useRoutine = () => {
    const context = useContext(RoutineContext)
    if(!context) {
        throw new Error('useRoutine must be used within a TaskProvider')
    }
    return context
}

export function RoutineProvider({ children }) {

    const [routines, setRoutines] = useState([])

    // Obtener rutinas del backend
    const getRoutines = async () => {
        try {
            const res = await getRoutinesRequest()
            setRoutines(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Obtener datos una rutina 
    const [toView, setToView] = useState({})
    const getOneRoutine = async (id) => {
        try {
            const res = await getOneRoutineRequest(id)
            console.log(res)
            setToView(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Crear rutina en backend
    const createRoutine = async (routine) => {
        try {
            const res = await createRoutinesRequest(routine)
        } catch (error) {
            console.log(error)
        }
    }

    // Delete Routine
    const deleteRoutine = async (id) => {
        try {
            const res = await deleteRoutinesRequest(id)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <RoutineContext.Provider value={{
            createRoutine,
            getRoutines,
            getOneRoutine,
            deleteRoutine,
            toView,
            routines
        }}>

            {children}
        </RoutineContext.Provider>
    )
}