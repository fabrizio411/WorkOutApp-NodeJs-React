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
        <h1 className='page-title'>Routines</h1>
        <div className='routines-container'>
          <button className='new-routine-btn'>+ New Routine</button>

          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>
          <Routine/>

        </div>
      </div>
    </div>
  )
}

export default RoutinesPage