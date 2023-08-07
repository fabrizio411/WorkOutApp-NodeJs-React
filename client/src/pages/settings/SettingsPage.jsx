import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import { useNav } from '../../context/NavContext'

function SettingsPage() {

  const {swipeHandler} = useNav()

  return (
    <div {...swipeHandler}>
      <Header/>
      <Nav current_page={'SETTINGS'}/>
    </div>
  )
}

export default SettingsPage