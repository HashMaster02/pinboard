import { useEffect, useContext } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaGear, FaCircleLeft } from 'react-icons/fa6';
import SettingsContext from '../context/SettingsContext';

function Settings() {
    return (
        <>
            <Header title={'Settings'} icon={<FaGear />} />
            <div className="flex justify-between m-8">
                <li id="task-item" className="flex items-center">
                    <input
                        onChange={async () => {
                            setTogglePurge(!togglePurge);
                            await updateUserSettings();
                        }}
                        type="checkbox"
                        checked={togglePurge}
                        id="toggle-purge"
                    />

                    <label
                        className="leading-[1.2rem] font-figtree before:outline before:outline-2 before:outline-bluish-turqoise"
                        htmlFor="toggle-purge"
                    >
                        Toggle Purge
                        <small className="block font-regular text-bluish-turqoise text-xs">
                            At the end of the day, delete all tasks that are
                            checked and move all others to Assignments
                        </small>
                    </label>
                </li>
            </div>
            <div className="absolute flex justify-between w-full text-5xl bottom-[40px] text-dark-blue">
                <Link to={'/'}>
                    <FaCircleLeft className="ml-8" />
                </Link>
            </div>
        </>
    );
}
export default Settings;
