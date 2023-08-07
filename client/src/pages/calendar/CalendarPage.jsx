import { useNav } from '../../context/NavContext'
import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'

function CalendarPage() {

  const {swipeHandler} = useNav()

  return (
    <div {...swipeHandler}>
      <Header/>
      <Nav current_page={'CALENDAR'}/>
    </div>
  )
}

export default CalendarPage