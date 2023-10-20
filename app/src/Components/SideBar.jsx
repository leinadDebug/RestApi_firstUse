import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className=" fixed  pr-14 flex flex-col py-10 text-lg gap-4  bg-amber-50 h-screen border border-l-2 border-amber-200  ">
      <Link
        to={"/"}
        className="font-medium px-4 text-amber-500 rounded-r-xl py-1 hover:bg-amber-400 hover:text-white hover:duration-300 hover:border-b-4 border-b-amber-200 ">
        Home
      </Link>
      <Link
        to={"/archive"}
        className="font-medium px-4 text-amber-500 rounded-r-xl py-1 hover:bg-amber-400 hover:text-white hover:duration-300 hover:border-b-4 border-l-amber-200 ">
        Achieve
      </Link>
      <Link
        to={"/post"}
        className="font-medium px-4 text-amber-500 rounded-r-xl py-1 hover:bg-amber-400 hover:text-white hover:duration-300  hover:border-b-4 border-l-amber-200">
        New Post
      </Link>
    </div>
  );
}

export default SideBar;
