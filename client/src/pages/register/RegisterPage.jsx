import { useForm } from 'react-hook-form'
import { registerRequest } from '../../api/auth.js'
import '../../css/register/register.css'

function RegisterPage() {

    const {register, handleSubmit} = useForm()

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)
        console.log(res)
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