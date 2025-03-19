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
    };
}

const useTaskstore = create(taskStore);

export default useTaskstore