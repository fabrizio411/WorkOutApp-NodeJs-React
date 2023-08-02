import { useAuth } from '../../context/AuthContext'

function RoutinesPage() {

  const { user } = useAuth()
  console.log(user)

  return (
    <div>RoutinesPage</div>
  )
}

export default RoutinesPage