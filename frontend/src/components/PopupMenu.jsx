import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import TasksContext from '../context/tasks/TasksContext';

function PopupMenu({ id }) {
    const currentPath = useLocation().pathname;
    const { deleteTask, moveTask } = useContext(TasksContext);

    return (
        <div
            id="popup-menu"
            className="absolute top-0 left-[-170px] p-4 rounded-md z-40 bg-bluish-turqoise text-white font-figtree"
        >
            <ul>
                <li className="py-1">
                    <button onClick={() => moveTask(id, currentPath)}>
                        {currentPath === '/tasks'
                            ? 'Move to Assignments'
                            : 'Add to Tasks'}
                    </button>
                </li>

                <li className="py-1 text-light-blue">
                    <button onClick={() => deleteTask(id, currentPath)}>
                        Delete Permanently
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default PopupMenu;
