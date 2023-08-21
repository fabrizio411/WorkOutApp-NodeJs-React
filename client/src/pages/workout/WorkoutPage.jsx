import { useEffect } from "react"
import { useRoutine } from "../../context/RoutineContext"
import { useParams } from "react-router-dom"

function WorkoutPage() {

    const { id } = useParams()

    const { getOneRoutine } = useRoutine()

    useEffect(() => {
        getOneRoutine(id)
    })


  return (
    <div>WorkoutPage</div>
  )
}

export default WorkoutPage