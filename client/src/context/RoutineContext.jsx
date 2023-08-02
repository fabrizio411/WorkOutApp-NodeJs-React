import { createContext, useContext, useState } from "react";

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

    const createRoutine = (routine) => {
        console.log('task')
    }

    return (
        <RoutineContext.Provider value={{
            createRoutine,
            routines
        }}>

            {children}
        </RoutineContext.Provider>
    )
}