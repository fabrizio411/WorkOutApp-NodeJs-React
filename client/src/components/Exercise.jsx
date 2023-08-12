import { Link } from "react-router-dom"

function Exercise(props) {
  return (
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
    </Link>
  )
}

export default Exercise