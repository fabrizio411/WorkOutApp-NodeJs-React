import { createContext, useContext, useState } from "react";
import { createRoutinesRequest, getRoutinesRequest } from '../api/routines'

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
            console.log(res)
            setRoutines(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Mandar datos de rutina nueva al backend
    const createRoutine = async (routine) => {
        try {
            const res = await createRoutinesRequest(routine)
            console.log(res)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <RoutineContext.Provider value={{
            createRoutine,
            getRoutines,
            routines
        }}>

            {children}
        </RoutineContext.Provider>
    )
}