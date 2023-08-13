import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import Exercise from '../../components/Exercise'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import { Link } from 'react-router-dom'
import { useExercise } from '../../context/ExerciseContext'
import { useNav } from '../../context/NavContext'
import { useEffect } from 'react'

function ExercisesPage() {

  const { swipeHandler } = useNav()

  const { getExercises, exercies } = useExercise()

  useEffect(() => {
    getExercises()
  }, [])

  return (
    <main className='routines-page-container' {...swipeHandler}>
      <LogOutPopUp/>
      <Header/>
      <Nav current_page={'EXERCISES'}/>
      <section className='page-content'>
        <div className='routines-container'>
          <div className='title-box'>
            <h1 className='page-title'>Exercises</h1>
            <Link className='new-routine-btn new-btn' to='/create-exercise'>+ New Exercise</Link>
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
      </section>
    </main>
  )
}

export default ExercisesPage