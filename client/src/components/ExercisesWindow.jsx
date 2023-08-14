import { useEffect } from "react"
import { useExercise } from "../context/ExerciseContext"



function ExercisesWindow() {

  const { getExercises, exercises } = useExercise()

  useEffect(() => {
    getExercises()
  }, [])

  return (
    <div className='exercises-window-component'>
      {exercises.map((item, i) => (
        <button className='exercise-info'>
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