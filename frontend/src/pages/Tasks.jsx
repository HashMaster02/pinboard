import { useEffect } from "react";
import Header from "../components/Header";
import SingleTask from "../components/SingleTask";
import { FaListCheck } from "react-icons/fa6";

const tasksList = [
  {
    _id: 1,
    group: "MATH-332",
    todo: "Written Assignment 12",
    dueDate: "Oct 13, 2023 22:00:00",
    color: "purple",
  },
  {
    _id: 2,
    group: "CS-350",
    todo: "MP1",
    dueDate: "Oct 16, 2023 22:00:00",
    color: "red",
  },
  {
    _id: 3,
    group: "ITMD-361",
    todo: "Lab 6",
    dueDate: "Oct 30, 2023 22:00:00",
    color: "yellow",
  },
  {
    _id: 4,
    group: "ITMD-362",
    todo: "Lab 1",
    dueDate: "Nov 10, 2023 22:00:00",
    color: "pink",
  },
];

// TODO: Make delete button via a context menu

function Tasks() {
  let dateObj;
  useEffect(() => {
    dateObj = document.getElementById("date-test");
    console.log(dateObj.value);
  });

  return (
    <>
      <input type="date" id="date-test" value="2017-06-01" />
      <Header title={"Tasks"} icon={<FaListCheck />} showDate />
      <ul className="m-6 flex flex-col gap-4 ">
        {tasksList.map((task) => (
          <SingleTask
            key={task._id}
            id={task._id}
            group={task.group}
            task={task.todo}
            dueDate={new Date("06/01/2017").toString()}
            color={task.color}
          />
        ))}
      </ul>
    </>
  );
}

export default Tasks;
