import { useForm } from 'react-hook-form'
import '../../css/register/register.css'
import { useAuth } from '../../context/AuthContext.jsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signUp, isAuthenticated, errors: registerErrors} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/routines')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signUp(values)
    })

    console.log(registerErrors)

    return (
        <div className='page-container'>
            <form className='form-container' onSubmit={onSubmit}>
                { registerErrors.map((error, i) => (
                    <div key={i}>{error}</div>
                ))}

                <input className='input' placeholder='Username' type='text' {...register('username', {required: true})}/>
                { errors.username && (<p>Username is required</p>)}

                <input className='input' placeholder='Email' type='email' {...register('email', {required: true})}/>
                { errors.email && (<p>Email is required</p>)}

                <input className='input' placeholder='Password' type='password' {...register('password', {required: true})}/>
                { errors.password && (<p>Password is required</p>)}

                <button className='submit-btn' type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage