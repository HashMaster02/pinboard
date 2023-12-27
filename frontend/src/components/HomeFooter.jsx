import MenuIcon from './MenuIcon';
import { IoInformationCircle } from 'react-icons/io5';
import { FaGear, FaRightToBracket, FaUser } from 'react-icons/fa6';
import { useAuthStatus } from '../hooks/useAuthStatus';

function HomeFooter() {
    const { loggedIn } = useAuthStatus();

    return (
        <div className="min-h-[120px] flex justify-center gap-3 p-6 font-figtre rounded-t-3xl bg-bluish-turqoise">
            <MenuIcon
                title={'About'}
                icon={<IoInformationCircle />}
                route="/about"
            />
            <MenuIcon title={'Settings'} icon={<FaGear />} route="/settings" />
            {loggedIn ? (
                <MenuIcon
                    title={'Profile'}
                    icon={<FaUser />}
                    route="/profile"
                />
            ) : (
                <MenuIcon
                    title={'Sign In'}
                    icon={<FaRightToBracket />}
                    route="/signin"
                />
            )}
        </div>
    );
}

export default HomeFooter;
