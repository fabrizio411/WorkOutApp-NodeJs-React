import { useForm } from 'react-hook-form'
import '../../css/register/register.css'
import { useAuth } from '../../context/AuthContext.jsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const {register, handleSubmit} = useForm()
    const {signUp, isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/routines')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signUp(values)
    })


    return (
        <div className='page-container'>
            <form className='form-container' onSubmit={onSubmit}>
                <input className='input' placeholder='Username' type='text' {...register('username', {required: true})}/>
                <input className='input' placeholder='Email' type='email' {...register('email', {required: true})}/>
                <input className='input' placeholder='Password' type='password' {...register('password', {required: true})}/>
                <button className='submit-btn' type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage