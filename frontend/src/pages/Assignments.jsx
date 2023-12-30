import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SingleTask from '../components/SingleTask';
import TasksContext from '../context/TasksContext';
import { FaClipboardList, FaCirclePlus, FaCircleLeft } from 'react-icons/fa6';
import Loading from '../components/Loading';

function Assignments() {
    const [loading, setLoading] = useState(true);
    const { pendingTasks, fetchPendingTasks } = useContext(TasksContext);

    useEffect(() => {
        fetchPendingTasks().then(() => {
            setLoading(false);
        });
    }, [loading]);

    if (loading) {
        return (
            <>
                <Header
                    title={'Assignments'}
                    icon={<FaClipboardList />}
                    showDate
                />
                <Loading />
            </>
        );
    }

    return (
        <>
            <Header title={'Assignments'} icon={<FaClipboardList />} showDate />
            <ul className="m-6 space-y-4">
                {pendingTasks.length === 0 ? (
                    <div className="text-center font-figtree text-light-blue">
                        No Assignments
                    </div>
                ) : (
                    pendingTasks.map((task) => (
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
                <Link to="/assignments/create">
                    <FaCirclePlus className="mr-8" />
                </Link>
            </div>
        </>
    );
}
export default Assignments;
