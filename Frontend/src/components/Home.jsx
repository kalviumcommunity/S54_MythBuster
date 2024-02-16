import { Link } from "react-router-dom";
import RenderComponent from "./RenderComponent";
import { IoMdAddCircle } from "react-icons/io";

function Home() {

 

  return (
    <div>
    <Link
      to="/add"
      className="text-blue-500 fixed bottom-0 right-0 mr-32 mb-20"
      aria-label="Add Post">
        <p>Add Post</p>

      <IoMdAddCircle className="" size={60} />
    </Link>
    <RenderComponent />
  </div>
  );
}

export default Home;
