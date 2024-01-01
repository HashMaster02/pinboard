import { useContext, useEffect, useState } from 'react';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { FaClipboardList, FaCirclePlus, FaCircleLeft } from 'react-icons/fa6';
import Header from '../components/Header';
import SingleTask from '../components/SingleTask';
import TasksContext from '../context/TasksContext';
import Loading from '../components/Loading';
import PageFooter from '../components/PageFooter';

function Assignments() {
    const [loading, setLoading] = useState(true);
    const { pendingTasks, fetchPendingTasks } = useContext(TasksContext);
    const { userId } = useAuthStatus();

    useEffect(() => {
        async function getTasks() {
            if (userId !== null) {
                await fetchPendingTasks(userId);
            }

            setLoading(false);
        }

        getTasks();
    }, [loading, userId]);

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

    if (!loading && userId === null) {
        return (
            <>
                <Header
                    title={'Assignments'}
                    icon={<FaClipboardList />}
                    showDate
                />
                <div className="m-6 text-center font-figtree text-light-blue">
                    Please login to view your assignments
                </div>
                <PageFooter
                    buttons={[{ route: '/', icon: <FaCircleLeft /> }]}
                />
            </>
        );
    }

    return (
        <>
            <Header title={'Assignments'} icon={<FaClipboardList />} showDate />
            <ul className="m-6 mb-20 space-y-4">
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
            <PageFooter
                buttons={[
                    { route: '/', icon: <FaCircleLeft /> },
                    {
                        route: '/assignments/create',
                        icon: <FaCirclePlus />,
                    },
                ]}
            />
        </>
    );
}
export default Assignments;
