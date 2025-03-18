import { create } from "zustand";
function taskStore(set) {
    return {
        ///state
        tasks: [],
        ///Logic updating the state
        addTask: (task) => {
            set((state) => ({
                tasks: [...state.tasks, task],
            }));
        },
    };
}

const useTaskstore = create(taskStore);

export default useTaskstore