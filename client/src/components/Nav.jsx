import React, { useState } from 'react'
import { NavProvider, useNav } from '../context/NavContext'

function Nav() {

    const {isActive, setIsActive} = useNav()

    const handleCloseNav = () => {
        setIsActive(false)
    }

    return (
        <NavProvider>
            <div className={`nav-component-container overlay ${isActive ? 'active' : 'inactive'}`}>
                <div className='nav-container'>
                    
                    <div className='profile-info-box'>
                        <div className='accesibility'>
                            <button className='menu-svg-btn' onClick={handleCloseNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                            </button>
                            <button className='color-theme-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path><path d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"></path></svg>
                            </button>
                        </div>
                        <img className='profile-img' src='/assets/img/profilepic.png' alt='profile-pic'/>
                        <div className='info-box'>
                            <div className='user-info-box'>
                                <h3 className='username'>Username</h3>
                                <p className='date-p'>Joined: <span className='date'>16/6/2023</span></p>
                            </div>
                            <button className='logout-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
                            </button>
                        </div>
                    </div>

                    <div className='nav-options-box'>

                    </div>

                </div>
            </div>
        </NavProvider>
    )
}

export default Nav