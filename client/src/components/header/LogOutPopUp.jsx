import { useAuth } from "../../context/AuthContext"
import { useNav } from "../../context/NavContext"


function LogOutPopUp() {

    const { logout } = useAuth()

    const {activePopUp, setActivePopUp} = useNav()

    const handleClosePopUp = () => {
        setActivePopUp(false)
    }

  return (
    <div className={`logout-popup-component ${activePopUp ? 'active' : 'inactive'}`}>
        <button className="overlay" onClick={handleClosePopUp}></button>
        <div className="content">
          <div className="text-box">
            <h3 className="alert-title">Confirmation</h3>
            <p className="alert-text">Are you shure you want to logout?</p>
          </div>
          <div className="alert-buttons">
            <button className="alert-btn cancel" onClick={handleClosePopUp}>Cancel</button>
            <button className="alert-btn submit" onClick={logout}>Log Out</button>
          </div>
        </div>
    </div>
  )
}

export default LogOutPopUp