import { useEffect } from "react"
import { useExercise } from "../context/ExerciseContext"
import { useRoutine } from "../context/RoutineContext"



function ExercisesWindow() {

  const { getExercises, exercises } = useExercise()

  useEffect(() => {
    getExercises()
  }, [])

  const { exrList, addExercise } = useRoutine()

  return (
    <div className='exercises-window-component'>
      {exercises.map((item, i) => (
        <button key={i} className='exercise-info' onClick={() => {
          addExercise(item.name, item._id)
          console.log(exrList)
        }}>
          <div className='info-box'>
            <h3 className='name'>{item.name}</h3>
            <p className='mainmuscle'>{item.muscle}</p>
          </div>
          {item.isCustom &&
            <p className='is-custom'>Custom</p>
          }
        </button>
      ))}
    </div>
  )
}

export default ExercisesWindow