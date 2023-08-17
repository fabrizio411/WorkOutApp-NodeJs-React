import { useForm } from 'react-hook-form'
import Header from '../../components/header/Header'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useExercise } from '../../context/ExerciseContext'

function ExerciseUpdatePage() {

    const [isUpdated, setIsUpdated] = useState(false)

    const { updateExercise, getExerciseToUpdate, toUpdate } = useExercise()

    const { id } = useParams()

    useEffect(() => {
        getExerciseToUpdate(id)
    }, [])

    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit((data) => {
        updateExercise(id, data)
        setIsUpdated(true)
    })

    if (isUpdated) return (<Navigate to='/exercises'/>)

  return (
    <main className='create-exercise-page-container'>
    <Header/>

    <section className='content'>
        <div className='title-box'>
            <Link className='back-btn' to='/exercises'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
            </Link>
            <h1 className='page-title'>Edit Exercise</h1>
        </div>
        <article className='form-container'>
            <form onSubmit={onSubmit}>
                <input className='name-input' type='text' autoComplete='off' placeholder='Exercise Name' defaultValue={toUpdate.name} {...register('name')} autoFocus required/>
                <div className='inputs-container'>
                    <div className='input-box'>
                        <label>Main Muscle</label>
                        <select className='' {...register('muscle')} defaultValue={toUpdate.muscle} required>
                            <option value={toUpdate.muscle}>{toUpdate.muscle}</option>
                            <option value='Cardio'>Cardio</option>
                            <option value='Abdominals'>Abdominals</option>
                            <option value='Back'>Back</option>
                            <option value='Biceps'>Biceps</option>
                            <option value='Forearms'>Forearms</option>
                            <option value='Chest'>Chest</option>
                            <option value='Shoulders'>Shoulders</option>
                            <option value='Traps'>Traps</option>
                            <option value='Triceps'>Triceps</option>
                            <option value='Queadirceps'>Quadriceps</option>
                            <option value='Hamstrings'>Hamstrings</option>
                            <option value='Glutes'>Glutes</option>
                            <option value='Calver'>Calves</option>
                            <option value='Abductors'>Abductors</option>
                            <option value='Adductors'>Adductors</option>
                            <option value='upper Body'>Upper Body</option>
                            <option value='Lower Body'>Lower Body</option>
                            <option value='Full Body'>Full Body</option>
                        </select>
                    </div>
                </div>
                <div className='buttons-box'>
                    <Link className='cancel-btn form-btn' to='/exercises'>Cancel</Link>
                    <button className='save-btn form-btn'>Save Exercise</button>
                </div>
            </form>
        </article>
    </section>
</main>
  )
}

export default ExerciseUpdatePage