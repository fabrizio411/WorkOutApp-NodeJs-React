import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
function ProfilePage() {
  return (
    <div>
      <Header/>
      <Nav current_page={'PROFILE'}/>
    </div>
  )
}

export default ProfilePage