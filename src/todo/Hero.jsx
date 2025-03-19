import React from 'react'
import { now } from '../utils/now'
import TodoInput from './TodoInput'
import TodoItems from './TodoItems'
const Hero = () => {
  return (
   <div className='todo-page'>
     <section className='hero'>
         <h1>{now()} Tanui</h1>
      <h4>You have 5 todos remaining today</h4>
      <TodoInput />
      </section>
      <div className="todo-items-display">
        <TodoItems />        
      </div>  
   </div>
  )
}

export default Hero
