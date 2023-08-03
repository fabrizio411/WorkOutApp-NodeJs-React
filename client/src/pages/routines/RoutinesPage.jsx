import { useEffect } from 'react'
import { useRoutine } from '../../context/RoutineContext'

function RoutinesPage() {

  const { getRoutines, routines } = useRoutine()

  useEffect(() => {
    getRoutines()
  }, [])

  return (
    <div>
      {routines.map(routine => (
        <p key={routine._id}>{routine.name}</p>
      ))}
    </div>
  )
}

export default RoutinesPage