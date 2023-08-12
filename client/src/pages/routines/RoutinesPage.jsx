import { useEffect } from 'react'
import { useRoutine } from '../../context/RoutineContext'
import { useNav } from '../../context/NavContext'

import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import Routine from '../../components/Routine'

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
        <div className='routines-container'>
          <div className='title-box'>
            <h1 className='page-title'>Routines</h1>
            <button className='new-routine-btn new-btn'>+ New Routine</button>
          </div>

          <Routine/>
          <Routine/>
          <Routine/>

        </div>
      </div>
    </div>
  )
}

export default RoutinesPage