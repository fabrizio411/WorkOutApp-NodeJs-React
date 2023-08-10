import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import { useNav } from '../../context/NavContext'

function MeasuresPage() {

  const {swipeHandler} = useNav()

  return (
    <div {...swipeHandler}>
      <LogOutPopUp/>
      <Header/>
      <Nav current_page={'MEASURES'}/>
    </div>
  )
}

export default MeasuresPage