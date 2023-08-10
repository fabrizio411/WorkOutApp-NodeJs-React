import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import { useNav } from '../../context/NavContext'

function ExercisesPage() {

  const {swipeHandler} = useNav()

  return (
    <div {...swipeHandler}>
      <LogOutPopUp/>
      <Header/>
      <Nav current_page={'EXERCISES'}/>
    </div>
  )
}

export default ExercisesPage