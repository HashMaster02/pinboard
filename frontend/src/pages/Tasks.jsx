import Header from "../components/Header";
import SingleTask from "../components/SingleTask";
import { FaListCheck } from "react-icons/fa6";

const tasksList = [
  {
    _id: 1,
    group: "MATH-332",
    todo: "Written Assignment 12",
    dueDate: "25th Oct 2023",
    color: "purple",
  },
  {
    _id: 2,
    group: "CS-350",
    todo: "MP1",
    dueDate: "16th Oct 2023",
    color: "red",
  },
  {
    _id: 3,
    group: "ITMD-361",
    todo: "Lab 6",
    dueDate: "30th Oct 2023",
    color: "yellow",
  },
  {
    _id: 4,
    group: "ITMD-362",
    todo: "Lab 1",
    dueDate: "10th Nov 2023",
    color: "pink",
  },
];

function Tasks() {
  return (
    <>
      <Header title={"Tasks"} icon={<FaListCheck />} showDate />
      <ul className="m-6 flex flex-col gap-4 ">
        {tasksList.map((task) => (
          <SingleTask
            key={task._id}
            id={task._id}
            group={task.group}
            task={task.todo}
            dueDate={task.dueDate}
            color={task.color}
          />
        ))}
      </ul>
    </>
  );
}

export default Tasks;
