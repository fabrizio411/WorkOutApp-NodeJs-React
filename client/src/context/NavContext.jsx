import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";
import { useSwipeable } from 'react-swipeable'
import { useEffect } from 'react'

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

    const swipeHandler = useSwipeable({
        onSwipedRight: ({event}) => {
          event.stopPropagation()
          setIsActive(true)
        },
        onSwipedLeft: ({event}) => {
          event.stopPropagation()
          setIsActive(false)
        }
      })
    
      const {ref: documentRef} = useSwipeable({
        onSwipedRight: ({event}) => {
          setIsActive(true)
        },
        onSwipedLeft: ({event}) => {
          setIsActive(false)
        }
      })
    
      useEffect(() => {
        documentRef(document)
        return () => documentRef({})
      })

    return (
        <NavContext.Provider value={{
            isActive,
            setIsActive,
            swipeHandler
        }}>
            {children}
        </NavContext.Provider>
    )
}