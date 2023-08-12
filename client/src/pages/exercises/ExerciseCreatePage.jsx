import { useForm } from 'react-hook-form'
import Header from '../../components/header/Header'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useExercise } from '../../context/ExerciseContext'

function ExerciseCreatePage() {

    const [isCreated, setIsCreated] = useState(false)

    const { createExercise } = useExercise()

    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit((data) => {
        createExercise(data)
        setIsCreated(true)
    })

    if (isCreated) return (<Navigate to='/exercises'/>)

  return (
    <div className='create-exercise-page-container'>
        <Header/>

        <div className='content'>
            <div className='title-box'>
                <Link className='back-btn' to='/exercises'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
                </Link>
                <h2 className='page-title'>Create Exercise</h2>
            </div>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <input className='name-input' type='text' placeholder='Exercise Name' {...register('name')} autoFocus required/>
                    <div className='inputs-container'>
                        <div className='input-box'>
                            <label>Exercise Type</label>
                            <select className='' {...register('type')} defaultValue='' required>
                                <option className='option-hidden' value='' disabled>Select...</option>
                                <option value='REPS/WEIGHT'>Weight Reps</option>
                                <option value='REPS'>Reps Only</option>
                                <option value='DUR'>Duration</option>
                                <option value='DUR/WEIGHT'>Weight Duration</option>
                                <option value='DIST/DUR'>Distance Duration</option>
                            </select>
                        </div>

                        <div className='hr-bar'></div>

                        <div className='input-box'>
                            <label>Main Muscle</label>
                            <select className='' {...register('muscle')} defaultValue='' required>
                                <option className='option-hidden' value='' disabled>Select...</option>
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
            </div>
        </div>
    </div>
  )
}

export default ExerciseCreatePage