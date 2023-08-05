import { createContext, useContext, useState } from "react";

const NavContext = createContext()

export const useNav = () => {
    const context = useContext(NavContext)
    if (!context) {
        throw new Error('useHeader must be used within a TaskProvider')
    }
    return context
}

export function NavProvider({ children }) {
    const [isActive, setIsActive] = useState(false)

    return (
        <NavContext.Provider value={{
            isActive,
            setIsActive
        }}>
            {children}
        </NavContext.Provider>
    )
}