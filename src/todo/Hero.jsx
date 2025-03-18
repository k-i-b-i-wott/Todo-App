import React from 'react'
import { now } from '../utils/now'
import TodoInput from './TodoInput'
const Hero = () => {
  return (
    <section className='hero'>
         <h1>{now()} Biwott</h1>
      <h4>You have 5 todos remaining today</h4>
      <TodoInput />
    </section>
  )
}

export default Hero
