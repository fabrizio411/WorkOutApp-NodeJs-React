import { Link } from 'react-router-dom';

function Routine() {
  return (
    <Link className='routine-component-container'>
        <div className='routine-info'>
            <h3 className='routine-name'>Name</h3>
            <p className='routine-mainmuscles'>main muscles</p>
        </div>
        <Link className='routine-start-btn'>Start</Link>
    </Link>
  )
}

export default Routine