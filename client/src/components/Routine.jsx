import { Link } from 'react-router-dom';

function Routine(props) {
  return (
    <Link className='routine-component-container' to={props.id}>
        <div className='routine-info'>
            <h3 className='routine-name'>{props.name}</h3>
            <p className='routine-mainmuscles'>main muscles</p>
        </div>
        <Link className='routine-start-btn' to={`/workout/${props.id}`}>Start</Link>
    </Link>
  )
}

export default Routine