import { useEffect } from 'react'
import { useRoutine } from '../../context/RoutineContext'
import Header from '../../components/Header'

function RoutinesPage() {

  const { getRoutines, routines } = useRoutine()

  useEffect(() => {
    getRoutines()
  }, [])

  return (
    <div>
      <Header/>
      {routines.map(routine => (
        <p key={routine._id}>{routine.name}</p>
      ))}
    </div>
  )
}

export default RoutinesPage