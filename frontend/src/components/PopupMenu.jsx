import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import TasksContext from '../context/tasks/TasksContext';

function PopupMenu({ id }) {
    const currentPath = useLocation().pathname;
    const { deleteTask, moveTask } = useContext(TasksContext);

    return (
        <div
            id="popup-menu"
            className="absolute overflow-hidden top-0 left-[-170px] rounded-md z-40 bg-bluish-turqoise text-white font-figtree"
        >
            <ul className="py-4">
                <li>
                    <button
                        className="px-4 py-2 w-full text-left hover:bg-light-blue hover:text-dark-blue"
                        onClick={() => moveTask(id, currentPath)}
                    >
                        {currentPath === '/tasks'
                            ? 'Move to Assignments'
                            : 'Add to Tasks'}
                    </button>
                </li>

                <li>
                    <button
                        className="px-4 py-2 w-full text-left text-light-blue hover:bg-light-blue hover:text-dark-blue"
                        onClick={() => deleteTask(id, currentPath)}
                    >
                        Delete Permanently
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default PopupMenu;
