import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div 
            className={`task ${task.reminder ? 'reminder' : ''}`} 
            onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                <FaTimes onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
            <p><Link to={`/task/${task.id}`}>Task details</Link></p>
        </div>
    )
}

export default Task