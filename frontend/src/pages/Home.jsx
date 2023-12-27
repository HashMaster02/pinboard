import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HomeFooter from '../components/HomeFooter';
import MenuIcon from '../components/MenuIcon';
import { FaHouse, FaListCheck, FaClipboardList } from 'react-icons/fa6';

function Home() {
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
