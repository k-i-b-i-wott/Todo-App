import React from 'react'

import useTaskstore from '../store/taskStore'
const TodoItems = () => {
  const task=useTaskstore((state)=>state.tasks)
  return (
    <div>
      
    </div>
  )
}

export default TodoItems
