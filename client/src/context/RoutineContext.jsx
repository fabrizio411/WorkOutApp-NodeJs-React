import { createContext, useContext, useState } from "react";
import { createRoutinesRequest, deleteRoutinesRequest, getOneRoutineRequest, getRoutinesRequest, updateRoutineRequest } from '../api/routines'

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
        } catch (error) {
            console.log(error)
        }
    }

    // Update routine
    const updateRoutine = async (id, routine) => {
        try {
            const res = await updateRoutineRequest(id, routine)
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
            updateRoutine,
            toView,
            routines
        }}>

            {children}
        </RoutineContext.Provider>
    )
}