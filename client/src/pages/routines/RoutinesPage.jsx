import { useEffect } from 'react'
import { useRoutine } from '../../context/RoutineContext'
import { useNav } from '../../context/NavContext'

import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import Routine from '../../components/Routine'
import { Link } from 'react-router-dom'

function RoutinesPage() {

  const { swipeHandler } = useNav()

  const { getRoutines, routines } = useRoutine()

  useEffect(() => {
    getRoutines()
  }, [])

  return (
    <main className='routines-page-container' {...swipeHandler}>
      <LogOutPopUp/>
      <Header/>
      <Nav current_page={'ROUTINES'}/>
      <section className='page-content'>
        <div className='routines-container'>
          <div className='title-box'>
            <h1 className='page-title'>Routines</h1>
            <Link className='new-routine-btn new-btn' to='/create-routine'>+ New Routine</Link>
          </div>

          <Routine/>
          <Routine/>
          <Routine/>

        </div>
      </section>
    </main>
  )
}

export default RoutinesPage