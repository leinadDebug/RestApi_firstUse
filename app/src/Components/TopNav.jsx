import React from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function TopNav() {
  return (
    <div className="flex items-center font-display font-semibold text-4xl text-amber-600 border border-b-2 drop-shadow-md p-2 ">
      <lord-icon
        src="https://cdn.lordicon.com/uaetnrqo.json"
        trigger="hover"
        colors="primary:#c76f16,secondary:#e7e2eb,tertiary:#f3c3ba,quaternary:#ad6836,quinary:#4faef9"
        style={{ width: "150px", height: "100px" }}></lord-icon>

      <h1 className=" animate-typing overflow-hidden whitespace-nowrap ">
        Sample Blog
      </h1>
    </div>
  );
}

export default TopNav;
