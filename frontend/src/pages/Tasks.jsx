import { useContext, useState, useEffect } from 'react';
import { FaListCheck, FaCirclePlus, FaCircleLeft } from 'react-icons/fa6';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Header from '../components/Header';
import SingleTask from '../components/SingleTask';
import TasksContext from '../context/TasksContext';
import Loading from '../components/Loading';
import PageFooter from '../components/PageFooter';

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
                <PageFooter
                    buttons={[
                        { route: '/', icon: <FaCircleLeft className="ml-8" /> },
                    ]}
                />
            </>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header title={'Tasks'} icon={<FaListCheck />} showDate />
            <ul className="m-6 mb-20 space-y-4">
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
            <PageFooter
                buttons={[
                    { route: '/', icon: <FaCircleLeft /> },
                    {
                        route: '/tasks/create',
                        icon: <FaCirclePlus />,
                    },
                ]}
            />
        </div>
    );
}

export default Tasks;
