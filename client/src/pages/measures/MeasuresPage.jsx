import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import { useNav } from '../../context/NavContext'

function MeasuresPage() {

  const {swipeHandler} = useNav()

  return (
    <div {...swipeHandler}>
      <Header/>
      <Nav current_page={'MEASURES'}/>
    </div>
  )
}

export default MeasuresPage