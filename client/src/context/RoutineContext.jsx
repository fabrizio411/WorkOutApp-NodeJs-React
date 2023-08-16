import { createContext, useContext, useState } from "react";
import { createRoutinesRequest, getOneRoutineRequest, getRoutinesRequest } from '../api/routines'

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

    // Create routine added exercises list
    const [exrList, setExrList] = useState([])
    const addExercise = (exrName, exrId) => {
        let currentList = exrList
        const newExercise = {
            name: exrName,
            id: exrId
        }
        currentList.push(newExercise)
        setExrList(currentList)
    }
    const removeExercise = (exrId) => {
        let currentList = exrList
        let index = currentList.findIndex(item => item.id === exrId)
        currentList.splice(index, 1)
    }

    return (
        <RoutineContext.Provider value={{
            createRoutine,
            getRoutines,
            getOneRoutine,
            toView,
            routines,
            addExercise,
            removeExercise,
            exrList
        }}>

            {children}
        </RoutineContext.Provider>
    )
}