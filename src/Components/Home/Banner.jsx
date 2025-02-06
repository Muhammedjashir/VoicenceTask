import { Button } from "@material-tailwind/react";
import React from "react";

function Banner() {
  return (
    <>
      <div className=" ">
        <div
          className="bg-cover bg-no-repeat h-[850px] flex justify-end w-full items-center   "
          style={{
            backgroundImage:
              'url("https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kT5Jw6bL~RcOL58ZO3skvj9QPejhbrhYnea5aQMQicdQVQEjS19BKvAOhvlOrUVel2PTmUEdNOaGQeVMiEQP9JSdqwrDsFo3R9fpPNazSwk3jB1-G8mNhQOSyj6Dz2nQIhpq8pGbb5xJ~S~CYaiuSvW5frKnfAvROa6C-Z9xMoOzugrDkhN2zEiuVnR4XmHr2WlFCgRTYTcja8g2kQCY6NOY40gQmMqxQEmQxazzC4Nqywtt15mw1VdpRCTVXm7-uv9bejAId40PBRuwRTZFL3Py-qPQpT3MIVNe8J0qkforaYgHQf3l8IjYs1YK4NAlrS7Gf4fBTh2xrPPxh~ztBg__")',
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
