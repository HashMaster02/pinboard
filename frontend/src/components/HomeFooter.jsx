import React from "react";
import MenuIcon from "./MenuIcon";
import { IoInformationCircle } from "react-icons/io5";
import { FaGear, FaRightToBracket } from "react-icons/fa6";

function HomeFooter({ title, icon, showDate }) {
  const date = new Date().toDateString();

  return (
    <div
      className="min-h-[120px] 
                  flex justify-center gap-3 
                  p-6 
                  font-figtre rounded-t-3xl
                  bg-bluish-turqoise"
    >
      <MenuIcon title={"About"} icon={<IoInformationCircle />} />
      <MenuIcon title={"Settings"} icon={<FaGear />} />
      <MenuIcon title={"Sign In"} icon={<FaRightToBracket />} />
    </div>
  );
}

export default HomeFooter;
