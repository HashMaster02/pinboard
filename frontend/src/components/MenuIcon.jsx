import { FaListCheck } from "react-icons/fa6";

function MenuIcon({ title, icon }) {
  return (
    <div className="bg-baby-white p-4 font-shantell-sans font-medium w-40 aspect-square flex flex-col items-center justify-center gap-2 rounded-3xl">
      <div className="text-4xl">{icon}</div>
      <p className="text-center">{title}</p>
    </div>
  );
}

export default MenuIcon;
