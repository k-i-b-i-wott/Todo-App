import React from 'react'

import './Todo.css'

import useTaskstore from '../store/taskStore'

import { useState } from 'react'


const TodoInput = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

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
    const newTask={
        id:Math.random()*1_000_000_000_000,
        title:taskTitle,
        description:taskDescription,
        completed:false
    }

    addNewTask(newTask);
    setTaskTitle('');
    setTaskDescription('');
    
    }

  return (
    <div>
       <form >
                <input type="text"  value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Enter your todo Title" />
                <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="Enter your todo Description" />
                <button type="submit" onClick={handleAddTask}>Add todo</button>
            </form>
    </div>
  )
}

export default TodoInput

