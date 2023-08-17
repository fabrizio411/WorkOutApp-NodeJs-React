import { useForm } from 'react-hook-form'
import { useRoutine } from '../../context/RoutineContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import { useEffect, useState } from 'react'
import { useExercise } from '../../context/ExerciseContext'

function RoutineEditPage() {

  const { id } = useParams()

  const [isUpdated, setIsUpdated] = useState(false)

  const [exrList, setExrList] = useState([])

  const { register, handleSubmit } = useForm()
  const { updateRoutine, getOneRoutine, toView } = useRoutine()
  const { getExercises, exercises } = useExercise()

  useEffect(() => {
    getExercises()
    getOneRoutine(id)
    if(toView.exercises) setExrList([...toView.exercises])
  }, [])

  // Solo permitir ingresar numeros en los inputs
  const handleKeyPress = (event) => {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
  }

  // Exercises window Display
  const [isExrWindow, setIsExrWindow] = useState(false)
  const handleOpenExrWindow = () => {
    setIsExrWindow(true)
  }
  const handleCloseExrWindow = () => {
    setIsExrWindow(false)
  }

  // Create routine added exercises list
  const addExercise = (exrName, exrMuscle, exrId) => {
    let currentList = [...exrList]
    const newExercise = {
        name: exrName,
        muscle: exrMuscle,
        id: exrId
    }
    currentList.push(newExercise)
    setExrList(currentList)
  }
  const removeExercise = (exrId) => {
    let currentList = [...exrList]
    let index = currentList.findIndex(item => item.id === exrId)
    currentList.splice(index, 1)
    setExrList(currentList)
  }

  console.log(exrList)

  const onSubmit = handleSubmit((data) => {
    updateRoutine(id, data)
    setIsUpdated(true)
  })

  if (isUpdated) return (<Navigate to={`/routines/${id}`}/>)

  return (
    <main className='create-routine-page-container'>
    
      <section className={`exercises-window ${isExrWindow ? 'active' : 'inactive'}`}>
        <div className='exercises-container'>
          <button className='cancel-btn' onClick={handleCloseExrWindow}>Cancel</button>

          <article className='exercises-window-component'>
            {exercises.map((item, i) => (
              <button key={i} className='exercise-info' onClick={() => {
                addExercise(item.name, item.muscle, item._id)
                handleCloseExrWindow()
              }}>
                <div className='info-box'>
                  <h3 className='name'>{item.name}</h3>
                  <p className='mainmuscle'>{item.muscle}</p>
                </div>
                {item.isCustom &&
                  <p className='is-custom'>Custom</p>
                }
              </button>
            ))}
          </article>

        </div>
        <button className='overlay' onClick={handleCloseExrWindow}></button>
      </section>


      <Header/>
      <section className='content'>
        <div className='title-box'>
          <Link className='back-btn' to='/routines'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
          </Link>
          <h1 className='page-title'>Edit Routine</h1>
        </div>
        <article className='form-container'>
          <form onSubmit={onSubmit}>
            <div className='buttons-box'>
              <Link className='cancel-btn form-btn' to='/exercises'>Cancel</Link>
              <button className='save-btn form-btn'>Save Routine</button>
            </div>

            <input className='name-input' defaultValue={toView.name} type='text' autoComplete='off' placeholder='Routine Title' {...register('name')} autoFocus required/>
            
            <div className='hr-bar'></div>

            <div className='add-btn-box'>
              <button className='add-btn' type='button' onClick={handleOpenExrWindow}>Add Exercise</button>
            </div>

            <div className='inputs-container'>
              {exrList.length > 0 ? (
                exrList.map((item, i) => (
                  <div className='input-box' key={i}>
                    <div className='input-title-box'>
                      <h3 className='input-title'>{item.name}</h3>
                      <button type='button' className='delete-input-btn' onClick={() => removeExercise(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                      </button>
                    </div>
                    <div className='data-container'>
                      <input hidden value={item.id} {...register(`exercises[${i}].id`)}/>
                      <input hidden value={item.name} {...register(`exercises[${i}].name`)}/>
                      <input hidden value={item.muscle} {...register(`exercises[${i}].muscle`)}/>
                      <div className='data'>
                        <input autoComplete='off' defaultValue={item.sets ? item.sets : ''} type='text' onKeyDown={(event) => {handleKeyPress(event)}} placeholder='-' {...register(`exercises[${i}].sets`, {valueAsNumber: true})} required/>
                        <p>- Sets </p>
                      </div>
                      <div className='data'>
                        <input autoComplete='off' defaultValue={item.reps ? item.reps : ''} type='text' onKeyDown={(event) => {handleKeyPress(event)}} placeholder='-' {...register(`exercises[${i}].reps`, {valueAsNumber: true})} required/>
                        <p>- Reps Goal </p>
                      </div>
                      <div className='data'>
                        <input autoComplete='off' defaultValue={item.rest ? item.rest : ''} type='text' onKeyDown={(event) => {handleKeyPress(event)}} placeholder='-' {...register(`exercises[${i}].rest`, {valueAsNumber: true})} required/>
                        <p>- Rest Time (min) (optional) </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className='no-exercises-text'>No exercises added yet</p>
              )}

            </div>


          </form>
        </article>
      </section>
    </main>
  )
}

export default RoutineEditPage