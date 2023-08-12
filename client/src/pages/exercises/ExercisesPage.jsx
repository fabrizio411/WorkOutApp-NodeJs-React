import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import { useNav } from '../../context/NavContext'
import { Link } from 'react-router-dom'
import Exercise from '../../components/Exercise'

function ExercisesPage() {

  const {swipeHandler} = useNav()

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

          <Exercise/>
          <Exercise/>
          <Exercise/>

        </div>
      </div>
    </div>
  )
}

export default ExercisesPage