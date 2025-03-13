import { Button } from "@material-tailwind/react";
import React from "react";

const ListItem = ({ text }) => (
  <div className="flex items-center">
    <div className="border rounded-[5px] border-red-200 w-[10px] h-[10px]"></div>
    <div className="w-[7px] h-[2px] bg-red-200 rounded"></div>
    <h1 className="pb-4 p-3 font-medium">{text}</h1>
  </div>
);

const Section = ({ title, items }) => (
  <div>
    <h1 className="text-4xl font-extrabold mb-6">{title}</h1>
    <div className="pl-4">
      <div className="flex flex-col">
        {items.map((item) => (
          <ListItem text={item} />
        ))}
      </div>
    </div>
  </div>
);

function Products() {
  const whatWeDoItems = [
    "World Wide Donation",
    "Various industrial Application",
    "Providing Solutions For Construction, Management",
    "Engineers design and build the structure",
  ];

  const whatYouCanDoItems = [
    "Certified & Awards Winner",
    "Work with energetic team",
    "Just Because You Work Hard You'll Be Successful.",
    "For all your construction needs!",
  ];

  return (
    <div className="bg-gray-100 flex-row sm:flex justify-around mt-20 h-[150vh]">
      <div className="mt-30 ml-25">
        <div>
          <img
            className="w-[470px] h-[410px] rounded-4xl"
            src="https://img.koalaliving.com.au/products/128913/ea91665a-9f2f-48b1-a888-4489c3647630.png"
            alt=""
          />
        </div>

        <div className="relative top-45 right-28">
          <img
            className="w-[326px] h-[289px] rounded-4xl absolute bottom-0"
            src="https://img.koalaliving.com.au/products/128957/e62a89e0-60af-4ef3-8d9c-d5c9540741c0.png"
            alt=""
          />
        </div>

        <div className="relative left-40 top-25">
          <img
            className="w-[240px] h-[240px] rounded-4xl absolute"
            src="https://img.koalaliving.com.au/products/128289/3819ce20-8da9-468b-b3f2-e1331fa3bbd2.png"
            alt=""
          />
        </div>
      </div>

      <div className="mt-25">
        <Section title="What We Do!" items={whatWeDoItems} />
        <Section title="What You Can Do In!" items={whatYouCanDoItems} />

        <div className="flex">
          <Button className="bg-red-100 text-gray-400 mt-7 w-[177px] h-[58px]">
            MORE EXPLORE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Products;
