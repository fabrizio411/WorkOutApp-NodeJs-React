import { useForm } from 'react-hook-form'
import { useRoutine } from '../../context/RoutineContext'

function RoutineCreatePage() {

  const {register, handleSubmit} = useForm()
  const {createRoutine} = useRoutine()


  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Routine Title"
          {...register('name')}
          autoFocus
        />
        <button>Save</button>
      </form>
    </div>
  )
}

export default RoutineCreatePage