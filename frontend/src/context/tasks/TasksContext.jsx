import { createContext, useState } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            _id: 1,
            group: 'MATH-332',
            todo: 'Written Assignment 12',
            dueDate: '2023-12-20',
            color: 'purple',
            checked: false,
        },
        {
            _id: 2,
            group: 'CS-350',
            todo: 'MP1',
            dueDate: '2024-10-18',
            color: 'red',
            checked: false,
        },
        {
            _id: 3,
            group: 'ITMD-361',
            todo: 'Lab 6',
            dueDate: '2023-10-01',
            color: 'yellow',
            checked: false,
        },
        {
            _id: 4,
            group: 'ITMD-362',
            todo: 'Lab 1',
            dueDate: '2023-05-24',
            color: 'pink',
            checked: false,
        },
    ]);

    function toggleCheck(id) {
        const newTasks = tasks.map((task) => {
            if (task._id === id) {
                return { ...task, checked: !task.checked };
            }
            return task;
        });
        setTasks(newTasks);
    }

    return (
        <TasksContext.Provider value={{ tasks, toggleCheck }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContext;
