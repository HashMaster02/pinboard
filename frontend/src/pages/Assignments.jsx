import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import SingleTask from '../components/SingleTask';
import TasksContext from '../context/tasks/TasksContext';
import { FaClipboardList } from 'react-icons/fa6';

function Assignments() {
    const { pendingTasks } = useContext(TasksContext);

    return (
        <>
            <Header title={'Assignments'} icon={<FaClipboardList />} showDate />
            <ul className="m-6 flex flex-col gap-4">
                {pendingTasks.map((task) => (
                    <SingleTask
                        key={task._id}
                        id={task._id}
                        group={task.group}
                        task={task.todo}
                        dueDate={new Date(task.dueDate.split('-'))}
                        color={task.color}
                        checked={task.checked}
                    />
                ))}
            </ul>
        </>
    );
}
export default Assignments;
