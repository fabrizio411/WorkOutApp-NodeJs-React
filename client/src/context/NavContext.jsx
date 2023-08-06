import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const NavContext = createContext()

export const useNav = () => {
    const context = useContext(NavContext)
    if (!context) {
        throw new Error('useNav must be used within a NavProvider')
    }
    return context
}

export function NavProvider({ children }) {
    const [isActive, setIsActive] = useState(false)

    return (
        <NavContext.Provider value={{
            isActive,
            setIsActive,
        }}>
            {children}
        </NavContext.Provider>
    )
}