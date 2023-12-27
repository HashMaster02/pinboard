import { useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaCirclePlus, FaCircleLeft } from 'react-icons/fa6';
import TasksContext from '../context/tasks/TasksContext';
import FormButton from '../components/FormButton';
import { v4 as uuidv4 } from 'uuid';

// TODO: Let user choose a color from a color palette

function CreateTask() {
    const { todaysTasks, pendingTasks, addTask } = useContext(TasksContext);
    const { dashboard } = useParams();

    const [formData, setFormData] = useState({
        group: '',
        todo: '',
        dueDate: '',
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

        if (!group || !todo || !dueDate) {
            alert('Please fill out all fields');
            return;
        }

        const newTask = {
            ...formData,
            dueDate: new Date(dueDate),
            checked: false,
            _id: uuidv4(),
        };

        addTask(newTask, dashboard);
        navigate(`/${dashboard}`);
    }

    return (
        <>
            <Header title={'Create Task'} icon={<FaCirclePlus />} />
            <form onSubmit={createTask} className="p-8 space-y-10 font-figtree">
                <div>
                    <label htmlFor="group" className="text-baby-white">
                        Class
                    </label>
                    <div className="w-full flex justify-between">
                        <input
                            type="text"
                            id="group"
                            placeholder="MATH-252"
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
                <div>
                    <label htmlFor="todo" className="block text-baby-white">
                        Assignment
                    </label>
                    <input
                        id="todo"
                        type="text"
                        placeholder="Section 8.2"
                        value={todo}
                        onChange={onMutate}
                        className="w-full border-b-2 border-light-blue outline-none font-shantell-sans"
                    />
                </div>
                <div>
                    <label htmlFor="dueDate" className="block text-baby-white">
                        Due Date
                    </label>
                    <input
                        id="dueDate"
                        type="date"
                        value={dueDate}
                        onChange={onMutate}
                        className="w-full border-b-2 border-light-blue outline-none"
                    />
                </div>
                <FormButton label={'Create'} />
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
