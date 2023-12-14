import { useEffect } from 'react';
import Header from '../components/Header';
import SingleTask from '../components/SingleTask';
import { FaListCheck } from 'react-icons/fa6';

const tasksList = [
    {
        _id: 1,
        group: 'MATH-332',
        todo: 'Written Assignment 12',
        dueDate: '2023-12-16',
        color: 'purple',
    },
    {
        _id: 2,
        group: 'CS-350',
        todo: 'MP1',
        dueDate: '2023-10-18',
        color: 'red',
    },
    {
        _id: 3,
        group: 'ITMD-361',
        todo: 'Lab 6',
        dueDate: '2023-10-01',
        color: 'yellow',
    },
    {
        _id: 4,
        group: 'ITMD-362',
        todo: 'Lab 1',
        dueDate: '2023-05-24',
        color: 'pink',
    },
];

// TODO: Make delete button via a context menu

function Tasks() {
    return (
        <>
            <Header title={'Tasks'} icon={<FaListCheck />} showDate />
            <ul className="m-6 flex flex-col gap-4 ">
                {tasksList.map((task) => (
                    <SingleTask
                        key={task._id}
                        id={task._id}
                        group={task.group}
                        task={task.todo}
                        dueDate={new Date(task.dueDate.split('-'))}
                        color={task.color}
                    />
                ))}
            </ul>
        </>
    );
}

export default Tasks;
