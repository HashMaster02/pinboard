import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaListCheck, FaCirclePlus, FaCircleLeft } from 'react-icons/fa6';
import Header from '../components/Header';
import SingleTask from '../components/SingleTask';
import TasksContext from '../context/tasks/TasksContext';

function Tasks() {
    const [loading, setLoading] = useState(true);
    const { todaysTasks, fetchTodaysTasks } = useContext(TasksContext);

    useEffect(() => {
        fetchTodaysTasks().then(() => {
            setLoading(false);
        });
    }, [loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="h-full">
            <Header title={'Tasks'} icon={<FaListCheck />} showDate />
            <ul className="m-6 space-y-4">
                {todaysTasks.map((task) => (
                    <SingleTask
                        key={task._id}
                        id={task._id}
                        group={task.group}
                        task={task.todo}
                        dueDate={new Date(task.dueDate.toDate())} // toDate() is a method of the firebase.firestore.Timestamp class
                        color={task.color}
                        checked={task.checked}
                    />
                ))}
            </ul>
            <div className="absolute flex justify-between w-full text-5xl bottom-[40px] text-dark-blue">
                <Link to="/">
                    <FaCircleLeft className="ml-8" />
                </Link>
                <Link to="/tasks/create">
                    <FaCirclePlus className="mr-8" />
                </Link>
            </div>
        </div>
    );
}

export default Tasks;
