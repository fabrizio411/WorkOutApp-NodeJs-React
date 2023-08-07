import { useEffect } from 'react'
import { useRoutine } from '../../context/RoutineContext'
import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import { useNav } from '../../context/NavContext'

function RoutinesPage() {

  const {swipeHandler} = useNav()

  const { getRoutines, routines } = useRoutine()

  useEffect(() => {
    getRoutines()
  }, [])

  return (
    <div className='routines-page-container' {...swipeHandler}>
      <Header/>
      <Nav current_page={'ROUTINES'}/>
      <div className='page-content'>
        <h1>Hola</h1>
      </div>
    </div>
  )
}

export default RoutinesPage