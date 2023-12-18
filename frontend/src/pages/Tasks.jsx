import { useContext } from 'react';
import Header from '../components/Header';
import SingleTask from '../components/SingleTask';
import { FaListCheck } from 'react-icons/fa6';
import TasksContext from '../context/tasks/TasksContext';
import PopupMenu from '../components/PopupMenu';

function Tasks() {
    const { todaysTasks } = useContext(TasksContext);

    return (
        <>
            <Header title={'Tasks'} icon={<FaListCheck />} showDate />
            <ul className="m-6 flex flex-col gap-4">
                {todaysTasks.map((task) => (
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

export default Tasks;
