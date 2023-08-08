import { useNav } from "../../context/NavContext"

function LogOutPopUp() {

    const {activePopUp, setActivePopUp} = useNav()

    const handleClosePopUp = () => {
        setActivePopUp(false)
    }

  return (
    <div className={`logout-popup-component ${activePopUp ? 'active' : 'inactive'}`}>
        <button className="overlay" onClick={handleClosePopUp}></button>
        <div className="content"></div>
    </div>
  )
}

export default LogOutPopUp