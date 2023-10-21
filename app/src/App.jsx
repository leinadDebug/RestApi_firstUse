import { Routes, Route } from "react-router-dom";
import Archeive from "./Pages/Archeive";
import Home from "./Pages/Home";
import SideBar from "./Components/SideBar";
import Post from "./Pages/Post";
import TopNav from "./Components/TopNav";
import Error404 from "./Components/Error404";

function App() {
  return (
    <>
      <div className=""><TopNav/></div>
      <div className="flex gap-3 ">
        <div className=" flex-[1]">
          <SideBar />
        </div>
        <div className=" flex-[9]">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/archive"} element={<Archeive />} />
            <Route path={"/Post"} element={<Post />} />
            <Route path={"*"} element={<Error404/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
