import { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import '../../css/register/register.css'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {

  const { register, handleSubmit, formState: {errors} } = useForm()

  const { signIn, isAuthenticated, errors: signInErrors } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/routines')
  }, [isAuthenticated])

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    signIn(data)
  })

  return (
    <div className='page-container'>
      <form className='form-container' onSubmit={onSubmit}>
        { signInErrors.map((error, i) => (
          <div key={i}>{error}</div>
        ))}

        <input className='input' placeholder='Username' type='text' {...register('username', {required: true})}/>
        { errors.username && (<p>Username is required</p>)}

        <input className='input' placeholder='Password' type='password' {...register('password', {required: true})}/>
        { errors.password && (<p>Password is required</p>)}

        <button className='submit-btn' type='submit'>Log in</button>

        <p>
          Dont have an account?
          <Link to='/register'>Sign Up</Link>
        </p>
      </form>

    </div>
  )
}

export default LoginPage