import React from 'react'
import Hero from './todo/Hero'
import TodoItems from './todo/TodoItems'
import './App.css'

const App = () => {
  return (
    <div>
      <Hero />
      <div className="todo-items-display">
        <TodoItems />        
      </div>  
    </div>
  )
}

export default App