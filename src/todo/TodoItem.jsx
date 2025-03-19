import React from 'react'
import useTaskstore from '../store/taskStore'
import './Todo.css'
 
const TodoItem = ({title, description, completed,id}) => {
  const markTaskAsComplete = useTaskstore((state) => state.markComplete);

  const markAsIncomplete = useTaskstore((state) => state.markIncomplete);
  const deleteTask = useTaskstore((state) => state.deleteTask);

  function handleMarksAsComplete(e) {
    e.preventDefault();
    markTaskAsComplete(id);
  }
  function handleMarksAsIncomplete(e) {
    e.preventDefault();
    markAsIncomplete(id);
  }
  function handleDeleteTask(e) {
    e.preventDefault();
    deleteTask(id);
  }
  return (
    <div className='todo-item'>
      <h1 className={completed ? `todo-title-completed` : `todo-title`}>{title}</h1>      
      <p className={completed ? `completed` : ``}>{description}</p>
      <div className="todo-items-control">
        <button className='complete' 
        onClick={completed ? handleMarksAsIncomplete : handleMarksAsComplete}>
          {completed ? `Mark as incomplete` : `Mark as complete`}
          
          </button>
        <button className='delete' onClick={handleDeleteTask}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
