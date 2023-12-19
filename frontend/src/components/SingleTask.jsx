import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { FaEllipsis } from 'react-icons/fa6';
import TasksContext from '../context/tasks/TasksContext';
import PopupMenu from './PopupMenu';

const colorPalette = {
    red: 'text-[#ff1d15]',
    blue: 'text-[#6bbaec]',
    green: 'text-[#04724d]',
    yellow: 'text-[#edae49]',
    orange: 'text-[#ffb238]',
    purple: 'text-[#54428e]',
    pink: 'text-[#ac80a0]',
};

function SingleTask({ id, group, task, dueDate, color, checked }) {
    const { toggleCheck, daysToDueDate } = useContext(TasksContext);
    const [showMenu, setShowMenu] = useState(false);
    const pathname = useLocation().pathname;

    document.addEventListener('click', (e) => {
        if (showMenu && e.target.id !== 'menu-button') {
            setShowMenu(false);
        }
    });

    function editTask(event) {
        event.preventDefault();
        event.stopPropagation();

        setShowMenu(!showMenu);
    }

    return (
        <div className="flex justify-between">
            <li id="task-item" className="flex items-center">
                {pathname === '/tasks' && (
                    <input
                        onChange={() => toggleCheck(id)}
                        type="checkbox"
                        checked={checked}
                        id={id}
                    />
                )}
                <label
                    className={
                        pathname === '/tasks'
                            ? 'leading-[1.2rem] font-shantell-sans before:outline before:outline-2 before:outline-bluish-turqoise'
                            : 'leading-[1.2rem] font-shantell-sans'
                    }
                    htmlFor={id}
                >
                    <span
                        className={` font-medium ${
                            colorPalette[color]
                                ? colorPalette[color]
                                : 'text-black'
                        }`}
                    >
                        {group}
                    </span>{' '}
                    {task}
                    <small className="block font-light text-bluish-turqoise text-xs">
                        {daysToDueDate(dueDate) <= 1 && (
                            <BsExclamationCircleFill className="inline-block mr-1 text-red-600" />
                        )}
                        Due {dueDate.toDateString()}
                    </small>
                </label>
            </li>
            <div id="menu-button" className="relative">
                <button className="px-2">
                    <FaEllipsis
                        onClick={(e) => editTask(e)}
                        className="text-light-blue"
                    />
                </button>
                {showMenu && <PopupMenu id={id} />}
            </div>
        </div>
    );
}

export default SingleTask;
