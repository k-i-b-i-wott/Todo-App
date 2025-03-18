import React from 'react'

import useTaskstore from '../store/taskStore'
import TodoItem from './TodoItem';
const TodoItems = () => {
  const task=useTaskstore((state)=>state.tasks);

  console.log(task);
  return (
    <div>
      {
        task.map((item)=><TodoItem key={item.id} title={item.title} description={item.description} completed={item.completed}/>)
      }
    </div>
  )
}

export default TodoItems
