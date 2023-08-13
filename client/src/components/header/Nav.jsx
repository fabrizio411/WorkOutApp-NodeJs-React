import React, { useEffect, useState } from 'react'

import { NavProvider, useNav } from '../../context/NavContext'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Nav(props) {

    // User info display
    const {user} = useAuth()
    const username = user.username
    const JSDate = new Date(user.createdAt)
    const createdAt = `${JSDate.getDate()}/${JSDate.getMonth() + 1}/${JSDate.getFullYear()}`

    // Nav state
    const {isActive, setIsActive, setActivePopUp} = useNav()
    const handleCloseNav = () => {
        setIsActive(false)
    }

    // Current page display
    const [currentPage, setCurrentPage] = useState(props.current_page)

    useEffect(() => {
        setIsActive(false)
    }, [currentPage])

    // logout popup

    const handleOpenPopUp = () => {
        setActivePopUp(true)
    }

    return (
        <NavProvider>
            <header className={`nav-component-container ${isActive ? 'active' : 'inactive'}`}>
                <button className='overlay' onClick={handleCloseNav}></button>

                <div className='nav-container'>
                    
                    <section className='profile-info-box'>
                        <h1 className='desktop-title'>WorkOutApp</h1>
                        <div className='accesibility'>
                            <button className='menu-svg-btn' onClick={handleCloseNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                            </button>
                        </div>
                        <img className='profile-img' src='/assets/img/profilepic.png' alt='profile-pic'/>
                        <div className='info-box'>
                            <div className='user-info-box'>
                                <h3 className='username' id='this'>{username}</h3>
                                <p className='date-p'>Joined: <span className='date'>{createdAt}</span></p>
                            </div>
                            <div className='logout-box'>
                                <div className='tooltip'>
                                    <p>LogOut</p>
                                </div>
                                <button className='logout-btn' onClick={handleOpenPopUp}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </section>

                    <nav className='nav-options-box'>
                        <ul>
                            <li>
                                <Link to='/home' className='nav-item' id={`${currentPage === 'HOME' && 'current-page'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z"></path></svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/profile' className='nav-item' id={`${currentPage === 'PROFILE' && 'current-page'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to='/routines' className='nav-item' id={`${currentPage === 'ROUTINES' && 'current-page'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12v6a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6h-2zm-6-1v2H6v-2h8zM6 9V7h8v2H6zm8 6v2h-3v-2h3z"></path></svg>
                                    Routines
                                </Link>
                            </li>
                            <li>
                                <Link to='/exercises' className='nav-item' id={`${currentPage === 'EXERCISES' && 'current-page'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 5v14h3v-6h6v6h3V5h-3v6H9V5zM3 15a1 1 0 0 0 1 1h1V8H4a1 1 0 0 0-1 1v2H2v2h1v2zm18-6a1 1 0 0 0-1-1h-1v8h1a1 1 0 0 0 1-1v-2h1v-2h-1V9z"></path></svg>
                                    Exercises
                                </Link>
                            </li>
                            <li>
                                <Link to='/measures' className='nav-item' id={`${currentPage === 'MEASURES' && 'current-page'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"></circle><path d="M15 22V9h5V7H4v2h5v13h2v-7h2v7z"></path></svg>
                                    Measures
                                </Link>
                            </li>
                            <li>
                                <Link to='/calendar' className='nav-item' id={`${currentPage === 'CALENDAR' && 'current-page'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path></svg>
                                    Calendar
                                </Link>
                            </li>
                            <li>
                                <Link to='/settings' className='nav-item' id={`${currentPage === 'SETTINGS' && 'current-page'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </NavProvider>
    )
}

export default Nav