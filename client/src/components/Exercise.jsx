import { useState } from "react"
import { Link } from "react-router-dom"

function Exercise(props) {

  // Menu display
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuActive(true)
  }

  const handleCloseMenu = () => {
    setIsMenuActive(false)
  }

  return (
    <div className="exercise-component">

      <div className={`menu-display-mobile ${isMenuActive ? 'active' : 'inactive'}`}>
        <button className="overlay" onClick={handleCloseMenu}></button>
        <div className="content">
          <div className="menu-option">
            <svg className="svg-fix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg>
            <p>Edit</p>
          </div>
          <div className="hr-bar"></div>
          <div className="menu-option delete">
            <svg className="delete-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
            <p>Delete</p>
          </div>
        </div>
      </div>

      <Link className='exercises-component-container' to={props.id}>
        <div className='exercise-info'>
            <div className='info-box'>
                <h3 className='name'>{props.name}</h3>
                <p className='mainmuscle'>{props.mainMuscle}</p>
            </div>
            {props.isCustom &&
              <p className='is-custom'>Custom</p>
            }
        </div>
        <Link className="menu-helper">
          <button className='menu-box' type='button' onClick={(event) => {
            if (!isMenuActive) handleOpenMenu()
            else handleCloseMenu()
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

            <div className={`menu-display ${isMenuActive ? 'active' : 'inactive'}`}>
              <div className="content">
                <div className="menu-option">
                  <svg className="svg-fix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg>
                  <p>Edit</p>
                </div>
                <div className="hr-bar"></div>
                <div className="menu-option">
                  <svg className="delete-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                  <p>Delete</p>
                </div>
              </div>
            </div>
          </button>
        </Link>
      </Link>

    </div>

  )
}

export default Exercise