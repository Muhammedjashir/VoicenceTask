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
    <div className="bg-gray-100 flex justify-around mt-20 h-[150vh]">
      <div className="mt-30 ml-25">
        <div>
          <img
            className="w-[470px] h-[410px] rounded-4xl"
            src="https://s3-alpha-sig.figma.com/img/650e/cb90/23e3ad3bd6fab7fa43217ded6dc14384?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oC3tSKTL0zI2y24aEO--WHww0dlILHsH~3O0~UqRm7zSsnRkJeZnXxAM4q8BHHu0vX-OaNSdQYyj85ZWZZejWO0GvQ89NBgTuNzhl2oRdoIEpT8-G8-yiOgAhRVPlN7UZBCeNCB8xYJWzxoXCK37gwR9OCAXDVvRNpdSuF4D6bOXmlRJC8UMU9Xwh792YApiDAhzE6upJXOAXBv5JX3gCbrBXVj8phQS9rH4hlsiuvm5mgQF4LUHiWUraoPUjf45h~9mTDQ7Sxxwf1kuIMwNhXMLH~cq7X7G2TnLZRXJBvyu-XNqRE8Yocya8lH8q6-m4xumPep8JcftIMonRJ7hjQ__"
            alt=""
          />
        </div>

        <div className="relative top-45 right-28">
          <img
            className="w-[326px] h-[289px] rounded-4xl absolute bottom-0"
            src="https://s3-alpha-sig.figma.com/img/7d28/9531/46bb07cbd10016001df92381b6f958b1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r7Q9rtJbdd-Rj-ZyVW8IqLGPX3snoyfcp6opECNE4~7TJ4mwVVXfkGrdE2oag1TBPwvef6twGEleQ~x0ujVbb5lHa~F9S8Bq9fXnZgDK13h5veYJc56ooZkS9v08yY4ZaGcA5A86YQb4GlQc0PvS1P6XOBbtmXpn-AH8-C05ShzhlWucZhqS6I4bUAL31eEiy0sA0FVcXfTQJuRYeN~d2fj-Xi2EGdsPHJPUOYke1rIQhRvQCsiiz1hMle8gWiMFUVCZZvd6J4xaO29tNZks4VeSYWHrpJ0dcWc-UzKOSgn4V0sFC24YISr7utJTiEd~rDuOR5dw~OvCgyI8tONWbw__"
            alt=""
          />
        </div>

        <div className="relative left-40 top-25">
          <img
            className="w-[240px] h-[240px] rounded-4xl absolute"
            src="https://s3-alpha-sig.figma.com/img/c4ad/af1f/50d439f5c3db7807f5ad203fe21abbb0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dr8LkimHip8g7GqaptX90~RJFye~qGdprYKXy9r7drBKZi5iYUlH6n6hkmFrrz6ZvYFpaKKOfY4a5UQEawe0MNl4dwCk9jh12zw75JEn4EkmgbyXEHjtlXIzGDUiGvym3gFqF5fBwtF7aBIowNZnckSVmLfDvrg2YmgxJYkPxDnmIstGYAuRDLzcixGCWhVDjpuSDJKw34ij8sQi1ReaVlycdAzb7pAbmGfkqm1fM68z0cxCZc1B6OUHR7eTCyMuAQWFVKdQAeWFCQEBKgDCfiUumVbpfQUhXF7m5hxMCi8WgnflGzwKN10rkZXBqDMAWE2051Khg07coWFzSGDjQQ__"
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
