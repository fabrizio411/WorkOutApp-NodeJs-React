import '../../css/register/register.css'
import { useForm } from 'react-hook-form'

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='page-container'>
      <form className='form-container' onSubmit={onSubmit}>

          <input className='input' placeholder='Username' type='text' {...register('username', {required: true})}/>
          { errors.username && (<p>Username is required</p>)}

          <input className='input' placeholder='Password' type='password' {...register('password', {required: true})}/>
          { errors.password && (<p>Password is required</p>)}

          <button className='submit-btn' type='submit'>Log in</button>
      </form>
  </div>
  )
}

export default LoginPage