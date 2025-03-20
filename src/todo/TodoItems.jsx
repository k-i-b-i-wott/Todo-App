import React from 'react'

import './Todo.css'

import useTaskstore from '../store/taskStore'
import TodoItem from './TodoItem';
const TodoItems = () => {
  const task=useTaskstore((state)=>state.tasks);  
  return (
    <div className='todo-items'>
      {
        task.map((item)=><TodoItem key={item.id} title={item.title} description={item.description} completed={item.completed} timeRemaining={item.timeRemaining} id={item.id}/>)
      }
    </div>
  )
}

export default TodoItems
