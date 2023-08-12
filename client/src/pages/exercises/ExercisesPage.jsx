import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import { useNav } from '../../context/NavContext'
import { Link } from 'react-router-dom'
import Exercise from '../../components/Exercise'
import { useExercise } from '../../context/ExerciseContext'
import { useEffect } from 'react'

function ExercisesPage() {

  const { swipeHandler } = useNav()

  const { getExercises, exercies } = useExercise()

  useEffect(() => {
    getExercises()
  }, [])

  console.log(exercies)

  return (
    <div className='routines-page-container' {...swipeHandler}>
      <LogOutPopUp/>
      <Header/>
      <Nav current_page={'EXERCISES'}/>
      <div className='page-content'>
        <div className='routines-container'>
          <div className='title-box'>
            <h1 className='page-title'>Exercises</h1>
            <button className='new-routine-btn new-btn'>+ New Exercise</button>
          </div>

          {exercies.map((item, i) => (
            <Exercise 
              key={i} 
              name={item.name} 
              mainMuscle={item.muscle} 
              isCustom={item.isCustom}
              id={item._id}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default ExercisesPage