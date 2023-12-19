import { createContext, useState } from 'react';

const TasksContext = createContext();

const userData = {
    todaysTasks: [
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
    ],
    pendingTasks: [
        {
            _id: 5,
            group: 'MATH-252',
            todo: 'Section 3.6',
            dueDate: '2023-03-20',
            color: 'purple',
            checked: false,
        },
        {
            _id: 6,
            group: 'CS-581',
            todo: 'MP3',
            dueDate: '2024-08-19',
            color: 'red',
            checked: false,
        },
        {
            _id: 7,
            group: 'ITMD-440',
            todo: 'Lab 9',
            dueDate: '2023-12-01',
            color: 'yellow',
            checked: false,
        },
        {
            _id: 8,
            group: 'IPRO-497',
            todo: 'Assignment 4',
            dueDate: '2023-08-15',
            color: 'orange',
            checked: false,
        },
    ],
};

export const TasksProvider = ({ children }) => {
    const [todaysTasks, setTodaysTasks] = useState(userData.todaysTasks);
    const [pendingTasks, setPendingTasks] = useState(userData.pendingTasks);

    function toggleCheck(id) {
        const newTasks = todaysTasks.map((task) => {
            if (task._id === id) {
                return { ...task, checked: !task.checked };
            }
            return task;
        });
        setTodaysTasks(newTasks);
    }

    function moveTask(id, pathname) {
        if (pathname === '/tasks') {
            // Find index of element and grab the element
            const element =
                todaysTasks[todaysTasks.findIndex((task) => task._id === id)];

            // Remove element from todaysTasks
            const newTasks = todaysTasks.filter((task) => task._id !== id);
            setTodaysTasks(newTasks);

            // Add element to pendingTasks
            setPendingTasks([...pendingTasks, element]);
        } else if (pathname === '/assignments') {
            // Find index of element and grab the element
            const element =
                pendingTasks[pendingTasks.findIndex((task) => task._id === id)];

            // Remove element from pendingTasks
            const newTasks = pendingTasks.filter((task) => task._id !== id);
            setPendingTasks(newTasks);

            // Add element to todaysTasks
            setTodaysTasks([...todaysTasks, element]);
        }
    }

    function deleteTask(id, pathname) {
        if (pathname === '/tasks') {
            const newTasks = todaysTasks.filter((task) => task._id !== id);
            setTodaysTasks(newTasks);
        } else if (pathname === '/assignments') {
            const newTasks = pendingTasks.filter((task) => task._id !== id);
            setPendingTasks(newTasks);
        }
    }

    function daysToDueDate(due) {
        // Calculates the number of days between today and date given
        const today = new Date();
        return (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24.0);
    }

    return (
        <TasksContext.Provider
            value={{
                todaysTasks,
                pendingTasks,
                toggleCheck,
                deleteTask,
                daysToDueDate,
                moveTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContext;
