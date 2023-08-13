import { useForm } from 'react-hook-form'
import { useRoutine } from '../../context/RoutineContext'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import { useEffect, useState } from 'react'
import { useExercise } from '../../context/ExerciseContext'
import ExercisesWindow from '../../components/ExercisesWindow'

function RoutineCreatePage() {

  // Solo permitir ingresar numeros en los inputs
  const handleKeyPress = (event) => {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
  }

  const { register, handleSubmit } = useForm()
  const { createRoutine } = useRoutine()
  const { getExercises, exercises } = useExercise()

  useEffect(() => {
    getExercises()
  }, [])

  const [isExrWindow, setIsExrWindow] = useState(false)

  const handleOpenExrWindow = () => {
    setIsExrWindow(true)
  }
  const handleCloseExrWindow = () => {
    setIsExrWindow(false)
  }

  const [exrList, setExrList] = useState([])


  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <main className='create-routine-page-container'>
      
      <div className={`exercises-window ${isExrWindow ? 'active' : 'inactive'}`}>
        <div className='exercises-container'>
          <button onClick={handleCloseExrWindow}>Cancel</button>
          <ExercisesWindow/>
        </div>
        <button className='overlay' onClick={handleCloseExrWindow}></button>
      </div>


      <Header/>
      <section className='content'>
        <div className='title-box'>
          <Link className='back-btn' to='/routines'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
          </Link>
          <h1 className='page-title'>Create Routine</h1>
        </div>
        <article className='form-container'>
          <form onSubmit={onSubmit}>
            <div className='buttons-box'>
              <Link className='cancel-btn form-btn' to='/exercises'>Cancel</Link>
              <button className='save-btn form-btn'>Save Routine</button>
            </div>

            <input className='name-input' type='text' autoComplete='off' placeholder='Routine Title' {...register('name')} autoFocus required/>
            
            <div className='hr-bar'></div>

            <div className='add-btn-box'>
              <button className='add-btn' type='button' onClick={handleOpenExrWindow}>Add Exercise</button>
            </div>

            <div className='inputs-container'>
              <div className='input-box'>
                <div className='input-title-box'>
                  <h3 className='input-title'>Exercise Name</h3>
                  <button className='delete-input-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                  </button>
                </div>
                <div className='data-container'>
                  <div className='data'>
                    <input autoComplete='off' type='text' onKeyDown={(event) => {handleKeyPress(event)}} placeholder='-' {...register('sets')} required/>
                    <p>- Sets </p>
                  </div>
                  <div className='data'>
                    <input autoComplete='off' type='text' onKeyDown={(event) => {handleKeyPress(event)}} placeholder='-' {...register('sets')} required/>
                    <p>- Reps Goal </p>
                  </div>
                  <div className='data'>
                    <input autoComplete='off' type='text' onKeyDown={(event) => {handleKeyPress(event)}} placeholder='-' {...register('sets')} required/>
                    <p>- Rest Time (min) (optional) </p>
                  </div>
                </div>
              </div>
            </div>


          </form>
        </article>
      </section>
    </main>
  )
}

export default RoutineCreatePage