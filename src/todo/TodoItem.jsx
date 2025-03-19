import React from 'react'
import useTaskstore from '../store/taskStore'
import './Todo.css'
 
const TodoItem = ({title, description, completed,id}) => {
  const markTaskAsComplete = useTaskstore((state) => state.markComplete);

  function handleMarksAsComplete(e) {
    e.preventDefault();
    markTaskAsComplete(id);
  }
  return (
    <div className='todo-item'>
      <h1 className={completed ? `todo-title completed` : `todo-title`}>{title}</h1>      
      <p className={completed ? `completed` : ``}>{description}</p>
      <div className="todo-items-control">
        <button className='complete' 
        onClick={handleMarksAsComplete}>
          {completed ? `Mark as incomplete` : `Mark as complete`}
          
          </button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
