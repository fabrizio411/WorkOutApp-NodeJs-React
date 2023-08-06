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
      <Nav/>
      <Header/>
      {routines.map(routine => (
        <p key={routine._id}>{routine.name}</p>
      ))}
    </div>
  )
}

export default RoutinesPage