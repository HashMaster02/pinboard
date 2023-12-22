import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SingleTask from '../components/SingleTask';
import TasksContext from '../context/tasks/TasksContext';
import { FaClipboardList, FaCirclePlus, FaCircleLeft } from 'react-icons/fa6';

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
            <div className="absolute flex justify-between w-full text-5xl bottom-[40px] text-dark-blue">
                <Link to="/">
                    <FaCircleLeft className="ml-8" />
                </Link>
                <Link to="/assignments/create">
                    <FaCirclePlus className="mr-8" />
                </Link>
            </div>
        </>
    );
}
export default Assignments;
