import { useRoutine } from '../../context/RoutineContext'
import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import { useNav } from '../../context/NavContext'

function HomePage() {

  const {swipeHandler} = useNav()

  return (
    <div className="home-container" {...swipeHandler}>
        <LogOutPopUp/>
        <Header/>
        <Nav current_page={'HOME'}/>

        <section className="program-container">
            <h2 className="section-title">Program</h2>
            <div className="program-box">
                <div>
                    <h3 className="box-title">My week</h3>
                    <p className="btn">EIDT</p>
                </div>
                <div className="day-display-box">
                    <div className="display letter">
                        <p>M</p>
                        <p>T</p>
                        <p>W</p>
                        <p>T</p>
                        <p>F</p>
                        <p>S</p>
                        <p>S</p>
                    </div>
                    <div className="display circle">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>

        <section className="for-today-container">
            <h2 className="section-title">For Today</h2>
            <p>Component Routine</p>
        </section>
    </div>
  )
}

export default HomePage