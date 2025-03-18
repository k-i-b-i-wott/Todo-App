import React from 'react'
import { now } from '../utils/now'
import TodoInput from './TodoInput'
import TodoItems from './TodoItems'
const Hero = () => {
  return (
   <div>
     <section className='hero'>
         <h1>{now()} Biwott</h1>
      <h4>You have 5 todos remaining today</h4>
      <TodoInput />
    </section>
    <TodoItems />
   </div>
  )
}

export default Hero
