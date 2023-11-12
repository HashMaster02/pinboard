import React from "react";
import { FaCalendar } from "react-icons/fa6";

function Header({ title, icon, showDate }) {
  const date = new Date().toDateString();

  return (
    <div className=" min-h-[120px] flex flex-col justify-center gap-3 p-6 font-figtre bg-light-blue rounded-b-3xl">
      <div className="flex items-center text-4xl gap-2">
        {icon}
        <h1 className="font-bold">{title}</h1>
      </div>

      {showDate && (
        <div className="flex items-center text-xs gap-2">
          <FaCalendar />
          <h2 className="font-regular">{date}</h2>
        </div>
      )}
    </div>
  );
}

export default Header;
