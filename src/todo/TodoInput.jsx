import React from 'react'

import './Todo.css'
const TodoInput = () => {
  return (
    <div>
        <Todo />
    </div>
  )
}

export default TodoInput

function Todo(){
    return (
        <div>
            <form action="">
                <input type="text" placeholder="Enter your todo Title" />
                <input type="text" placeholder="Enter your todo Description" />
                <button type="submit">Add todo</button>
            </form>
        </div>
    );
}