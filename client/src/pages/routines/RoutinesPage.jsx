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

          {routines.length > 0 ? (
            routines.map((item, i) => (
              <Routine key={i} id={item._id} name={item.name}/>
            ))
          ) : (
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12v6a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6h-2zm-6-1v2H6v-2h8zM6 9V7h8v2H6zm8 6v2h-3v-2h3z"></path></svg>
              <p>No Routines yet</p>
            </div>
          )}


        </div>
      </section>
    </main>
  )
}

export default RoutinesPage