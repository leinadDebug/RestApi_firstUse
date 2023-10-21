import React from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function TopNav() {
  return (
    <div className="flex items-center font-header font-semibold text-2xl text-orange-400 bg-amber-50 border border-b-2 drop-shadow-md p-2 ">
      <lord-icon
              src="https://cdn.lordicon.com/jwlsfanz.json"
              trigger="hover"
              stroke="light"
              colors="primary:#f4f19c,secondary:#e88c30"
              style={{ width: "150px", height: "150px" }}></lord-icon>
      <h1 className=" animate-typing overflow-hidden whitespace-nowrap text-left">
        <span className="text-5xl font-display">S</span>ample <span className="text-5xl font-display">B</span>log
      </h1>
    </div>
  );
}

export default TopNav;
