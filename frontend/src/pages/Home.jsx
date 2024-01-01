import { useContext, useEffect } from 'react';
import { FaHouse, FaListCheck, FaClipboardList } from 'react-icons/fa6';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Header from '../components/Header';
import HomeFooter from '../components/HomeFooter';
import MenuIcon from '../components/MenuIcon';
import AuthContext from '../context/AuthContext';
import TasksContext from '../context/TasksContext';
import SettingsContext from '../context/SettingsContext';

function Home() {
    const { resetTasks } = useContext(TasksContext);
    const { updateLastLogin } = useContext(AuthContext);
    const { loginHasBeenUpdated, setLoginHasBeenUpdated } =
        useContext(SettingsContext);
    const { userId } = useAuthStatus();

    useEffect(() => {
        async function runReset() {
            if (userId !== null) {
                await resetTasks();
                if (!loginHasBeenUpdated) {
                    updateLastLogin();
                    setLoginHasBeenUpdated(true);
                }
            }
        }

        runReset();
    }, [userId]);

    return (
        <>
            <div className=" min-w-full min-h-screen flex flex-col justify-between">
                <Header title={'Home'} icon={<FaHouse />} showDate />
                <div className="grid gap-4 place-content-center">
                    <MenuIcon
                        title={'Tasks'}
                        icon={<FaListCheck />}
                        route="/tasks"
                    />
                    <MenuIcon
                        title={'Manage Assignments'}
                        icon={<FaClipboardList />}
                        route="/assignments"
                    />
                </div>
                <HomeFooter />
            </div>
        </>
    );
}

export default Home;
