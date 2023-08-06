import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function LoginPage() {

  const { register, handleSubmit, formState: {errors} } = useForm()

  const { signIn, isAuthenticated, errors: signInErrors } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/home')
  }, [isAuthenticated])

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    signIn(data)
  })

  return (
    <div className='register-container'>
      <h1 className='page-title'>Log In</h1>
      <form className='form-container' onSubmit={onSubmit}>
        { signInErrors.map((error, i) => (
          <div key={i}>{error}</div>
        ))}

        <input className='input' placeholder='Username' type='text' {...register('username', {required: true})}/>
        { errors.username && (<p>Username is required</p>)}

        <input className='input' placeholder='Password' type='password' {...register('password', {required: true})}/>
        { errors.password && (<p>Password is required</p>)}

        <button className='submit-btn' type='submit'>Log in</button>

        <p className='footer-txt'>
          Dont have an account?
          <Link to='/register' className='link'>Sign Up</Link>
        </p>
      </form>

    </div>
  )
}

export default LoginPage