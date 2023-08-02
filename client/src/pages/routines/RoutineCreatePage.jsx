import { useForm } from 'react-hook-form'

function RoutineCreatePage() {

  const {register, handleSubmit} = useForm()

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