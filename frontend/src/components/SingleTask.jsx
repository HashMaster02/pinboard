import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";

function SingleTask({ group, task, dueDate, color }) {
  // TODO: Get "color" attribute to work
  return (
    <li className="flex items-center">
      <input type="checkbox" id="task1" />
      <label
        className="leading-[1.2rem] font-shantell-sans
						before:outline before:outline-2 before:outline-bluish-turqoise
                        "
        htmlFor="task1"
      >
        <span className="text-[#c0d6df]">{group}</span> {task}
        <small className="block font-light text-bluish-turqoise text-xs">
          <BsExclamationCircleFill className="inline-block mr-1 text-red-600" />
          Due {dueDate}
        </small>
      </label>
    </li>
  );
}

export default SingleTask;
