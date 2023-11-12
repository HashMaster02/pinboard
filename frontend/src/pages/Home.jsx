import Header from "../components/Header";
import { FaHouse } from "react-icons/fa6";

function Home() {
  return (
    <div>
      <Header title={"Home"} icon={<FaHouse />} showDate />
    </div>
  );
}

export default Home;
