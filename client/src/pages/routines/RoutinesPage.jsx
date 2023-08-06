import { useEffect } from 'react'
import { useRoutine } from '../../context/RoutineContext'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

function RoutinesPage() {

  const { getRoutines, routines } = useRoutine()

  useEffect(() => {
    getRoutines()
  }, [])

  return (
    <div>
      <Nav current_page={'ROUTINES'}/>
      <Header/>
    </div>
  )
}

export default RoutinesPage