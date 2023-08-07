import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'

function CalendarPage() {
  return (
    <div>
      <Header/>
      <Nav current_page={'CALENDAR'}/>
    </div>
  )
}

export default CalendarPage