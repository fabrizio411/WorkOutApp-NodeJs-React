import { createContext, useContext, useEffect, useState } from 'react'
import { registerRequest, loginRequest, verifyTokenrequest } from '../api/auth.js'
import Cookie from 'js-cookie'


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
    // Controlar la recarga una vez cargan los datos de las cookies
    const [loading, setLoading] = useState(true)

    // Funcion sign up, conecta con el backend
    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
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
            setUser(res.data)
            setIsAuthenticated(true)
            
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

    // Comprobar la validacion del token para acceder a rutas
    useEffect(() => {
        async function checkLogin () {
            // Obtenemos las cookies del navegador
            const cookies = Cookie.get()

            // En caso de que no exista el token
            if (!cookies.token) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
                return
            }

            try {
                // Verificar si el token es correcto en backend
                const res = await verifyTokenrequest(cookies.token)
                // Si el backend no responde
                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false)
                    setUser(null)
                    return
                }

                // Si existe una respuesta
                setIsAuthenticated(true)
                setUser(res.data)
                setLoading(false)
            } catch (error) {
                // En caso de error
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
                console.log(error)
            }
        }

        checkLogin()

    }, [])

    return (
        <AuthContext.Provider 
            value={{
                signUp, 
                signIn,
                loading,
                user, 
                isAuthenticated, 
                errors
            }}
        >
            
            {children}
        </AuthContext.Provider>
    )
}