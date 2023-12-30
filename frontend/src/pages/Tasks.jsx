import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaListCheck, FaCirclePlus, FaCircleLeft } from 'react-icons/fa6';
import Header from '../components/Header';
import SingleTask from '../components/SingleTask';
import TasksContext from '../context/TasksContext';
import Loading from '../components/Loading';
import { useAuthStatus } from '../hooks/useAuthStatus';

function Tasks() {
    const [loading, setLoading] = useState(true);
    const { todaysTasks, fetchTodaysTasks } = useContext(TasksContext);
    const { userId } = useAuthStatus();

    useEffect(() => {
        async function getTasks() {
            if (userId !== null) {
                await fetchTodaysTasks(userId);
            }

            setLoading(false);
        }

        getTasks();
    }, [loading, userId]);

    if (loading) {
        return (
            <>
                <Header title={'Tasks'} icon={<FaListCheck />} showDate />
                <Loading />
            </>
        );
    }

    if (!loading && userId === null) {
        return (
            <>
                <Header title={'Assignments'} icon={<FaListCheck />} showDate />
                <div className="m-6 text-center font-figtree text-light-blue">
                    Please login to view your tasks
                </div>
                <div className="absolute flex justify-between w-full text-5xl bottom-[40px] text-dark-blue">
                    <Link to="/">
                        <FaCircleLeft className="ml-8" />
                    </Link>
                </div>
            </>
        );
    }

    return (
        <div className="h-full">
            <Header title={'Tasks'} icon={<FaListCheck />} showDate />
            <ul className="m-6 space-y-4">
                {todaysTasks.length === 0 ? (
                    <div className="text-center font-figtree text-light-blue">
                        No Tasks
                    </div>
                ) : (
                    todaysTasks.map((task) => (
                        <SingleTask
                            key={task._id}
                            id={task._id}
                            group={task.group}
                            task={task.todo}
                            dueDate={new Date(task.dueDate.toDate())} // toDate() is a method of the firebase.firestore.Timestamp class
                            color={task.color}
                            checked={task.checked}
                        />
                    ))
                )}
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
