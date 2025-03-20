import React from 'react'

import './Todo.css'

import useTaskstore from '../store/taskStore'

import { useState } from 'react'


const TodoInput = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [time, setTime] = useState(1);

  const addNewTask = useTaskstore((state) => state.addTask);

    const handleAddTask = (e) => {
        e.preventDefault();
        if(!taskTitle ){
            alert("Please input the task title");
            return;        
    }

    if(!taskDescription){
        alert("Please input the task description");
        return;
    }
    const timeInMilliseconds= time*60*60*1000;
    const newTask={
        id:Math.random()*1_000_000_000_000,
        title:taskTitle,
        description:taskDescription,
        completed:false,
        timeRemaining:timeInMilliseconds
    }

    addNewTask(newTask);
    setTaskTitle('');
    setTaskDescription('');
    setTime(1);
    
    }

  return (
    <div>
       <form >
                <input type="text"  value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Enter your todo Title" />
                <textarea  value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="Enter your todo Description"></textarea>
                <input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))} placeholder="Enter the time  deadline in hours for this todo  "  min={1} max={24}/>
                <button type="submit" onClick={handleAddTask} className='add'>Add todo</button>
            </form>
    </div>
  )
}

export default TodoInput

