import React from 'react'
import { now } from '../utils/now'
import TodoInput from './TodoInput'
import TodoItems from './TodoItems'
import useTaskstore from '../store/taskStore'
const Hero = () => {
  const task=useTaskstore((state)=>state.tasks);
  let numberofIncompleteTasks=0;
  task.forEach(function(task){
    if(task.completed===false){
      numberofIncompleteTasks=numberofIncompleteTasks+1;
    }
  })
  return (
   <div className='todo-page'>
     <section className='hero'>
         <h1>{now()} Tanui</h1>
      <h4>You have {numberofIncompleteTasks} todos remaining today</h4>
      <TodoInput />
      </section>
      <div className="todo-items-display">
        <TodoItems />        
      </div>  
   </div>
  )
}

export default Hero
