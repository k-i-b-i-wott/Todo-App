import { create } from "zustand";
function taskStore(set) {
    return {
        ///state
        tasks: [{title: "Learn Zystand", description:"BCEUWECUWWNCECINIOERNOEWCOEOCNE" ,completed: false , id: 1}],
        ///Logic updating the state
        // addTask: (task) => {
        //     set((state) => ({
        //         tasks: [...state.tasks, task],
        //     }));
        // },
    };
}

const useTaskstore = create(taskStore);

export default useTaskstore