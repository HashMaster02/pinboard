import { useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaCirclePlus, FaCircleLeft } from 'react-icons/fa6';
import TasksContext from '../context/tasks/TasksContext';

// TODO: Let user choose a color from a color palette

function CreateTask() {
    const { todaysTasks, pendingTasks, colorPalette } =
        useContext(TasksContext);
    const { dashboard } = useParams();

    const [formData, setFormData] = useState({
        group: 'MATH-252',
        todo: 'Section 8.2',
        dueDate: '2023-11-27',
        color: '#0000ff',
    });

    const { group, todo, dueDate, color } = formData;
    const navigate = useNavigate();

    function onMutate(e) {
        e.preventDefault();

        if (e.target.id === 'color') {
            document.getElementById('group').style.color = e.target.value;
        }

        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    function createTask(e) {
        e.preventDefault();
        const newTask = {
            ...formData,
            checked: false,
            _id: Math.random() * 1000,
        };

        if (dashboard === 'tasks') {
            todaysTasks.push(newTask);
        } else if (dashboard === 'assignments') {
            pendingTasks.push(newTask);
        }

        navigate(`/${dashboard}`);
    }

    return (
        <>
            <Header title={'Create Task'} icon={<FaCirclePlus />} />
            <form
                onSubmit={createTask}
                className="p-8 grid gap-10 font-figtree"
            >
                <div className="flex flex-col">
                    <label htmlFor="group" className="text-baby-white">
                        Class
                    </label>
                    <div className="w-full flex justify-between">
                        <input
                            type="text"
                            id="group"
                            value={group}
                            onChange={onMutate}
                            className=" text-[#0000ff] border-b-2 border-light-blue w-full outline-none font-shantell-sans font-medium uppercase"
                        />
                        <input
                            id="color"
                            type="color"
                            value={color}
                            onChange={onMutate}
                            className="ml-4 border-none h-10 w-10 cursor-pointer bg-transparent"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="todo" className="text-baby-white">
                        Assignment
                    </label>
                    <input
                        id="todo"
                        type="text"
                        value={todo}
                        onChange={onMutate}
                        className="border-b-2 border-light-blue outline-none font-shantell-sans"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="dueDate" className="text-baby-white">
                        Due Date
                    </label>
                    <input
                        id="dueDate"
                        type="date"
                        value={dueDate}
                        onChange={onMutate}
                        className="border-b-2 border-light-blue outline-none"
                    />
                </div>
                <button className="block m-auto px-20 py-4 max-w-xs bg-bluish-turqoise text-white rounded-full">
                    Create
                </button>
            </form>
            <div className="absolute flex justify-between w-full text-5xl bottom-[40px] text-dark-blue">
                <Link to={`/${dashboard}`}>
                    <FaCircleLeft className="ml-8" />
                </Link>
            </div>
        </>
    );
}
export default CreateTask;
