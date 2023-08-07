import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import { useNav } from '../../context/NavContext'

function ExercisesPage() {

  const {swipeHandler} = useNav()

  return (
    <div {...swipeHandler}>
      <Header/>
      <Nav current_page={'EXERCISES'}/>
    </div>
  )
}

export default ExercisesPage