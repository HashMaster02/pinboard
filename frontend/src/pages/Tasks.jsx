import Header from "../components/Header";
import SingleTask from "../components/SingleTask";
import { FaListCheck } from "react-icons/fa6";

function Tasks() {
  return (
    <>
      <Header title={"Tasks"} icon={<FaListCheck />} showDate />
      <ul className="m-6 flex flex-col gap-4 ">
        <SingleTask
          group="MATH-332"
          task="Written Assignment 12"
          dueDate="25th Oct 2023"
        />
      </ul>
    </>
  );
}

export default Tasks;
