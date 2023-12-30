import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaUser } from 'react-icons/fa6';
import { FaCircleLeft } from 'react-icons/fa6';
import SettingsContext from '../context/SettingsContext';

function Profile() {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const { setLoginHasBeenUpdated } = useContext(SettingsContext);

    function signOut(userObject) {
        userObject.signOut();
        setLoginHasBeenUpdated(false);
        navigate('/');
    }

    return (
        <>
            <Header title={'Profile'} icon={<FaUser />} />
            <div className="font-figtree m-6 space-y-4 text-xl">
                <div className="flex gap-2">
                    <h1 className="font-bold">Username:</h1>
                    <p>{auth.currentUser.displayName}</p>
                </div>
                <div className="flex gap-2">
                    <h1 className="font-bold">Email:</h1>
                    <p>{auth.currentUser.email}</p>
                </div>
            </div>
            <div className="flex gap-2 m-6">
                <button
                    onClick={() => signOut(auth)}
                    className="text-sm block px-4 py-2 max-w-xs bg-bluish-turqoise text-white rounded-lg hover:bg-light-blue hover:text-dark-blue"
                >
                    Sign Out
                </button>
            </div>
            <div className="absolute flex justify-between w-full text-5xl bottom-[40px] text-dark-blue">
                <Link to={'/'}>
                    <FaCircleLeft className="ml-8" />
                </Link>
            </div>
        </>
    );
}
export default Profile;
