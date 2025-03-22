import React, { use } from 'react'
import useTaskstore from '../store/taskStore'
import './Todo.css'
 import { useState, useEffect } from 'react'
const TodoItem = ({title, description, completed,id, timeRemaining}) => {
  const markTaskAsComplete = useTaskstore((state) => state.markComplete);

  const markAsIncomplete = useTaskstore((state) => state.markIncomplete);
  const deleteTask = useTaskstore((state) => state.deleteTask);
  const updateTime = useTaskstore((state) => state.updateTime);

  const [timeLeft, setTimeLeft] = useState(timeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
     setTimeLeft((prevTimeLeft) => {
       const newTimeLeft = prevTimeLeft - 1000;
       if (typeof updateTime === "function") {
        updateTime(id, newTimeLeft);
      } else {
        console.warn("updateTime function is not available");
      }
       return newTimeLeft;
     });
   }, 1000);

     return () => {
      return clearInterval(interval);
     }
  }, [id, updateTime,completed]);

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 1000 / 60 / 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };



  function handleMarksAsComplete(e) {
    e.preventDefault();
    markTaskAsComplete(id);
  }
  function handleMarksAsIncomplete(e) {
    e.preventDefault();
    markAsIncomplete(id);
  }
  function handleDeleteTask(e) {
    e.preventDefault();
    deleteTask(id);
  }
  return (
    <div className='todo-item'>
      <h3 className={completed ? `todo-title-completed` : `todo-title`}>{title}</h3>      
      <p className={completed ? `completed` : ``}>{description}</p>
      <div className="todo-items-control">
        <button className='complete' 
        onClick={completed ? handleMarksAsIncomplete : handleMarksAsComplete}>
          {completed ? `Mark as incomplete` : `Mark as complete`}
          
          </button>
        <button className='delete' onClick={handleDeleteTask}>Delete</button>
        <p className={`timer ${timeLeft <= 0 ? 'timer-expired' : 'timer-active'}`}>
        {timeLeft <= 0 ? 'Incomplete Task' : `Time Left: ${formatTime(timeLeft)}`}
      </p>
      </div>
    </div>
  )
}

export default TodoItem
