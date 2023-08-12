import { Link } from "react-router-dom"

function Exercise() {
  return (
    <Link className='exercises-component-container'>
        <div className='exercise-info'>
            <div className='info-box'>
                <h3 className='name'>Name</h3>
                <p className='mainmuscle'>Main muscle</p>
            </div>
            <p className='is-custom'>Custom</p>
        </div>
    </Link>
  )
}

export default Exercise