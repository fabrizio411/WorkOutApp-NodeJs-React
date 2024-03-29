import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import { useNav } from '../../context/NavContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useRoutine } from '../../context/RoutineContext'
import { useEffect, useState } from 'react'

function RoutineViewPage() {

    // Menu display management
    const [isActive, setIsActive] = useState(false)
    const handleOpenMenu = () => {
        setIsActive(true)
    }
    const handleCloseMenu = () => {
        setIsActive(false)
    }

    const { swipeHandler } = useNav()

    const { getOneRoutine, toView, deleteRoutine } = useRoutine()
    const { id } = useParams()

    useEffect(() => {
        getOneRoutine(id)
    }, [])

    console.log(toView)

    // Delete routine management
    const [isDeleted, setIsDeleted] = useState(false)
    if (isDeleted) return (<Navigate to='/routines'/>)

    // Created date
    const routineDate = new Date(toView.createdAt)
    const dayDate = routineDate.getDate()
    const monthDate = routineDate.getMonth() + 1
    const yearDate = routineDate.getFullYear()
    const formatedDate = `${dayDate}/${monthDate}/${yearDate}`


  return (
    <main className='routine-view-page' {...swipeHandler}>
        <LogOutPopUp/>
        <Header/>
        <Nav current_page={'ROUTINES'}/>

        <section className='page-content'>
            <div className='routine-container'>
                
                <div className='title-box'>
                    <div className='title-section'>
                        <Link className='back-btn' to='/routines'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
                        </Link>
                        <h1 className='page-title'>{toView.name}</h1>
                    </div>
                    <div className='menu-container'>
                        <button className='menu-btn-box' onClick={handleOpenMenu}>
                            <svg className='menu-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                        </button>
                        <div className={`menu-display-mobile ${isActive ? 'active' : 'inactive'}`}>
                            <button className='overlay' onClick={handleCloseMenu}></button>
                            <div className='content'>
                                <button className='menu-option'>
                                    <svg className='svg-fix' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 5v14h3v-6h6v6h3V5h-3v6H9V5zM3 15a1 1 0 0 0 1 1h1V8H4a1 1 0 0 0-1 1v2H2v2h1v2zm18-6a1 1 0 0 0-1-1h-1v8h1a1 1 0 0 0 1-1v-2h1v-2h-1V9z"></path></svg>
                                    <p>Start</p>
                                </button>
                                <div className='hr-bar'></div>
                                <Link className='menu-option' to={`/edit-routine/${toView._id}`}>
                                    <svg className="svg-fix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg>
                                    <p>Edit</p>
                                </Link>
                                <div className='hr-bar'></div>
                                <button className='menu-option delete' onClick={(event) => {
                                    event.stopPropagation()
                                    deleteRoutine(toView._id)
                                    setIsDeleted(true)
                                }}>
                                    <svg className="delete-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="2 0 20 20"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                                    <p>Delete</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='info-box'>
                    <p className='routine-total'>Routine workouts: <span>{toView.total}</span></p>
                    <p className='routine-date'>Created date: <span>{formatedDate}</span></p>

                    <div className='routine-data-container'>
                        {toView.exercises && (toView.exercises.map((item, i) => (
                            <div key={i} className='exercise-data'>
                                <h4 className='name'>{item.name}</h4>
                                <p className='muscle'>{item.muscle}</p>
                                <div className='data'>
                                    <div className='exercise-data-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
                                        <p className='data-text'><span>{item.sets}</span>sets</p>
                                    </div>
                                    <div className='exercise-data-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7a1 1 0 0 0-1-1h-8v2h7v5h-3l3.969 5L22 13h-3V7zM5 17a1 1 0 0 0 1 1h8v-2H7v-5h3L6 6l-4 5h3v6z"></path></svg>
                                        <p className='data-text'><span>{item.reps}</span>reps</p>
                                    </div>
                                    {item.rest > 0 && (
                                        <div className='exercise-data-box'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 24 24"><path d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path><path d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707-2-2 1.414-1.414 2 2z"></path></svg>
                                            <p className='data-text'><span>{item.rest}</span>'</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )))}


                    </div>
                </div>

            </div>
        </section>
    </main>
  )
}

export default RoutineViewPage