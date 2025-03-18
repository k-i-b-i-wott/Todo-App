import React from 'react'

const TodoItem = ({title, description, completed}) => {
  return (
    <div className='todo-item'>
      <h1 className={completed ? `todo-title completed` : `todo-title`}>{title}</h1>      
      <p className={completed ? `completed` : ``}>{description}</p>
      <div className="todo-items-control">
        <button>Mark as Complete</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
