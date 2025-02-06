import { Button } from "@material-tailwind/react";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center h-[100px] bg-white sticky top-0 z-10">
        <div className="flex justify-center items-center">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHYUtz7tAuXtVykN8JVrHZLW3JV4T4louoal2Pb55cLfhrjrQC"
            alt="icon"
            className="h-[70px] w-[70px]"
          />
          <h1 className="font-bold text-2xl">IOS INTERIORS</h1>
        </div>
        <div className="flex gap-10 ml-30 font-medium ">
          <h1> Home</h1>
          <h1>About</h1>
          <h1>Projects</h1>
          <h1>Service</h1>
          <h1>Contact</h1>
        </div>
        <div className="div">
        <Button className="bg-[rgb(255,230,208)] text-gray-500 mr-4 w-[147px] h-[58px]">Get Started</Button>

        </div>
      </div>
    </>
  );
}

export default Navbar;
