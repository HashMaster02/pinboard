import MenuIcon from './MenuIcon';
import {
    FaGear,
    FaRightToBracket,
    FaUser,
    FaCircleInfo,
} from 'react-icons/fa6';
import { useAuthStatus } from '../hooks/useAuthStatus';

function HomeFooter() {
    const { loggedIn } = useAuthStatus();

    return (
        <div className="min-h-[120px] flex justify-center gap-3 p-6 font-figtre rounded-t-3xl bg-bluish-turqoise">
            <MenuIcon title={'About'} icon={<FaCircleInfo />} route="/about" />
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
