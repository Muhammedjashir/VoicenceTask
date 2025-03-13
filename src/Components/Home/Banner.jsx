import { Button } from "@material-tailwind/react";
import React from "react";

function  Banner() {
  return (
    <>
      <div className=" ">
        <div
          className="bg-cover bg-no-repeat h-[850px] flex  lg:justify-end sm:justify-center w-full items-center   "
          style={{
            backgroundImage:
              'url("https://ds3spjfxfwgux.cloudfront.net/blog/0217dc50-075f-48f0-8645-ac77b68f93ae.png")',
          }}
        >
          <div className="bg-[rgba(255,243,227,1)] w-[600px] h-[450px] p-9 flex flex-col gap-7 justify-center mt-32">
            <h4 className="font-medium text-gray-800 ">New Arrival</h4>
            <h1 className="text-gray-500 font-black text-5xl">
              Discover Our <br /> New Collection
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              atque harum perspiciatis iure placeat illum officiis quidem
              incidunt
            </p>

            <Button className="bg-[rgb(255,230,208)] text-black w-[236px] h-[74px]  mr-72px mb-25px font-bold text-1xl ">
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
