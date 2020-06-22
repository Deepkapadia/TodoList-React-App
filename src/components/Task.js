import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)

  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <img src={require('../trash.png')} alt="Trash"/>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <img src={require('../pen.png')} alt="Pen"/>
        </button>
      </div>
    </li>
   
  )
}

export default Task
