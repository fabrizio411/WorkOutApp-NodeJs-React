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
    <div {...swipeHandler}>
      <Header/>
      <Nav current_page={'ROUTINES'}/>
    </div>
  )
}

export default RoutinesPage