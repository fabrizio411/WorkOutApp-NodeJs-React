import { useNav } from '../../context/NavContext'
import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'

function CalendarPage() {

  const {swipeHandler} = useNav()

  return (
    <div {...swipeHandler}>
      <LogOutPopUp/>
      <Header/>
      <Nav current_page={'CALENDAR'}/>
    </div>
  )
}

export default CalendarPage