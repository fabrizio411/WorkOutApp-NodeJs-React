import { Link } from "react-router-dom"
import { NavProvider, useNav } from "../../context/NavContext"

function Header() {

    const {isActive, setIsActive} = useNav()

    const handleOpenNav = () => {
        setIsActive(true)
    }

  return (
    <NavProvider>
        <section className='header-component-container'>
            {!isActive && (
                <button className='menu-svg-btn' onClick={handleOpenNav}>
                    <svg className='menu-svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                </button>
            )}

            <h1 className='title'>WorkOutApp</h1>
        </section>
    </NavProvider>

  )
}

export default Header