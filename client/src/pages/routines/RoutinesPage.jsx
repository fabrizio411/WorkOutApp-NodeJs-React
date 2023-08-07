import { useEffect } from 'react'
import { useRoutine } from '../../context/RoutineContext'
import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'

function RoutinesPage() {

  const { getRoutines, routines } = useRoutine()

  useEffect(() => {
    getRoutines()
  }, [])

  return (
    <div>
      <Header/>
      <Nav current_page={'ROUTINES'}/>
    </div>
  )
}

export default RoutinesPage