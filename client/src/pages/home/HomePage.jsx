import Header from "../../components/Header"


function HomePage() {
  return (
    <div className="home-container">
        <Header/>

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