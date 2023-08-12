import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import LogOutPopUp from '../../components/header/LogOutPopUp'
import { useNav } from '../../context/NavContext'

function ExerciseViewPage() {

  const { swipeHandler } = useNav()

  return (
    <div className='exercise-view-page' {...swipeHandler}>
        <LogOutPopUp/>
        <Header/>
        <Nav current_page={'EXERCISES'}/>

        <div className='page-content'>
          <div className='exercise-container'>
            
            <div className='title-box'>
              <Link className='back-btn' to='/exercises'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
              </Link>
              <h1 className='page-title'>Create Exercise</h1>
            </div>

            <div className='info-box'>
              
            </div>

          </div>
        </div>
    </div>
  )
}

export default ExerciseViewPage