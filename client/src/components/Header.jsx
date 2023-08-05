import { NavProvider } from "../context/NavContext"

function Header() {
  return (
    <NavProvider>
        <div className='header-component-container'>
            <div className='menu-svg-box'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
            </div>

            <h1 className='title'>WorkOutApp</h1>
        </div>
    </NavProvider>

  )
}

export default Header