import { createContext, useContext } from "react";

const ExerciseContext = createContext()

export const useExercise = () => {
    const context = useContext(ExerciseContext)
    if(!context) {
        throw new Error('useExercise must be used within a TaskProvider')
    }
    return context
}

export function ExerciseProvider({children}) {
    

    return (
        <ExerciseContext.Provider value={{
            
        }}
        >
            {children}
        </ExerciseContext.Provider>
    )
}