import { useEffect } from 'react'
import { useRoutine } from '../../context/RoutineContext'
import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import { useNav } from '../../context/NavContext'
import LogOutPopUp from '../../components/header/LogOutPopUp'

function RoutinesPage() {

  const {swipeHandler} = useNav()

  const { getRoutines, routines } = useRoutine()

  useEffect(() => {
    getRoutines()
  }, [])

  return (
    <div className='routines-page-container' {...swipeHandler}>
      <LogOutPopUp/>
      <Header/>
      <Nav current_page={'ROUTINES'}/>
      <div className='page-content'>
        <h1 className='page-title'>Routines</h1>
        <div className='routines-container'>
          <button className='new-routine-btn'>+ New Routine</button>

          <div className='routine-component-container'>
            <h3 className='routine-name'>Name</h3>
            <p className='routine-mainmuscles'>main muscles</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RoutinesPage