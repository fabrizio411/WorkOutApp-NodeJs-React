import { createContext, useContext, useEffect, useState } from 'react'
import { registerRequest, loginRequest } from '../api/auth.js'


export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({children}) => {
    // Estados para obtener informacion del usuario, si esta autenticado y errores
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    // Funcion sign up, conecta con el backend
    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            let errorsArray = []
            errorsArray.push(error.response.data)
            setErrors(errorsArray)
        }
    }

    // Funcion sing in, conecta con el backend
    const signIn = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            
        } catch (error) {
            let errorsArray = []
            errorsArray.push(error.response.data)
            setErrors(errorsArray)
        }
    }

    // Eliminar los errores luego de 5seg
    useEffect(() => {
        if(errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000);
            return () => clearTimeout(timer)
        }
    }, [errors])

    return (
        <AuthContext.Provider 
            value={{
                signUp, 
                signIn,
                user, 
                isAuthenticated, 
                errors
            }}
        >
            
            {children}
        </AuthContext.Provider>
    )
}