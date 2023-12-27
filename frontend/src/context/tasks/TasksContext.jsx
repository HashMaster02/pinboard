import { createContext, useState } from 'react';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    setDoc,
    Timestamp,
} from 'firebase/firestore';
import { db } from '../../firebase.config';
const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const { userId } = useAuthStatus();
    const [todaysTasks, setTodaysTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [colorPalette, setColorPalette] = useState([]);

    async function fetchTodaysTasks() {
        const q = query(
            collection(db, 'todays-tasks'),
            where('user-id', '==', userId)
        );
        const querySnapshot = await getDocs(q);
        const tasks = [];
        querySnapshot.forEach((doc) => {
            tasks.push(doc.data());
        });
        setTodaysTasks(tasks);
    }

    async function fetchPendingTasks() {
        const q = query(
            collection(db, 'pending-tasks'),
            where('user-id', '==', userId)
        );
        const querySnapshot = await getDocs(q);
        const tasks = [];
        querySnapshot.forEach((doc) => {
            tasks.push(doc.data());
        });
        setPendingTasks(tasks);
    }

    function fetchColorPalette() {
        setColorPalette(dummyData.colors);
    }

    async function addTask(task, pathname) {
        if (pathname === 'tasks') {
            todaysTasks.push(task);

            // Add to database

            await setDoc(doc(db, 'todays-tasks', task._id), {
                _id: task._id,
                group: task.group,
                todo: task.todo,
                dueDate: new Timestamp(
                    (task.dueDate.getTime() + 21600000) / 1000, // Add 6 hours to account for timezone difference
                    0
                ),
                color: task.color,
                checked: task.checked,
                'user-id': userId,
            });
        } else if (pathname === 'assignments') {
            pendingTasks.push(task);

            // Add to database
            await setDoc(doc(db, 'pending-tasks', task._id), {
                _id: task._id,
                group: task.group,
                todo: task.todo,
                dueDate: new Timestamp(
                    (task.dueDate.getTime() + 21600000) / 1000, // Add 6 hours to account for timezone difference
                    0
                ),
                color: task.color,
                checked: task.checked,
                'user-id': userId,
            });
        }
    }

    async function deleteTask(id, pathname) {
        if (pathname === '/tasks') {
            // Remove from state
            const newTasks = todaysTasks.filter((task) => task._id !== id);
            setTodaysTasks(newTasks);

            // Remove from database
            await deleteDoc(doc(db, 'todays-tasks', id));
        } else if (pathname === '/assignments') {
            // Remove from state
            const newTasks = pendingTasks.filter((task) => task._id !== id);
            setPendingTasks(newTasks);

            // Remove from database
            await deleteDoc(doc(db, 'pending-tasks', id));
        }
    }

    async function toggleCheck(id) {
        // Change locally in state
        const newTasks = todaysTasks.map((task) => {
            if (task._id === id) {
                return { ...task, checked: !task.checked };
            }
            return task;
        });
        setTodaysTasks(newTasks);

        // Change in database
        const docRef = doc(db, 'todays-tasks', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await updateDoc(docRef, {
                checked: !docSnap.data().checked,
            });
        }
    }

    async function moveTask(id, pathname) {
        if (pathname === '/tasks') {
            const task =
                todaysTasks[todaysTasks.findIndex((task) => task._id === id)];
            await deleteTask(task._id, pathname);
            await setDoc(doc(db, 'pending-tasks', task._id), { ...task });
        } else if (pathname === '/assignments') {
            const task =
                pendingTasks[pendingTasks.findIndex((task) => task._id === id)];
            await deleteTask(task._id, pathname);
            await setDoc(doc(db, 'todays-tasks', task._id), { ...task });
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
                fetchTodaysTasks,
                pendingTasks,
                fetchPendingTasks,
                colorPalette,
                toggleCheck,
                deleteTask,
                daysToDueDate,
                moveTask,
                addTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContext;
