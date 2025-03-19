import { create } from "zustand";
function taskStore(set) {
    return {
        ///state
        tasks: [],
        ///actions
        addTask: function (task) {
            set( function(previousState){
                return({tasks:[task, ...previousState.tasks]})
            })
        },
        markComplete: function(taskId){
                set(function(previousState){
                    const updatedTasks = previousState.tasks.map((task)=>{
                        if(task.id === taskId){
                            task.completed = true;
                            return task;
                        }
                        return task;
                    })
                    return({tasks:updatedTasks})
                })          

        },

        markIncomplete: function(taskId){
            set(function(previousState){
                const updatedTasks = previousState.tasks.map((task)=>{
                    if(task.id === taskId){
                        task.completed = false;
                        return task;
                    }
                    return task;
                })
                return({tasks:updatedTasks})
            })          

        },
    };
}

const useTaskstore = create(taskStore);

export default useTaskstore