import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { FaEllipsis, FaTriangleExclamation } from 'react-icons/fa6';
import TasksContext from '../context/TasksContext';
import PopupMenu from './PopupMenu';

function SingleTask({ id, group, task, dueDate, color, checked }) {
    const { toggleCheck, daysToDueDate } = useContext(TasksContext);
    const [showMenu, setShowMenu] = useState(false);
    const pathname = useLocation().pathname;
    const daysLeft = daysToDueDate(dueDate);

    useEffect(() => {
        if (checked) {
            document.getElementById(`task-${id}`).style.color = '#e1e5f2';
            return;
        }
        document.getElementById(`task-${id}`).style.color = color;
    }, [checked]);

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
                    <span id={`task-${id}`} className="font-medium uppercase">
                        {group}
                    </span>{' '}
                    {task}
                    <small className="block font-light text-bluish-turqoise text-xs">
                        {daysLeft > 0 && daysLeft <= 2 ? (
                            <FaTriangleExclamation className="inline-block mr-1 text-yellow-400" />
                        ) : daysLeft <= 0 ? (
                            <BsExclamationCircleFill className="inline-block mr-1 text-red-500" />
                        ) : null}
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
