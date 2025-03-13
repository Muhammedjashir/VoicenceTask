import React from "react";

function Card({ img, title, description }) {
  return (
    <div className="flex  justify-between rounded shadow-2xl items-center p-6">
      <img className="w-[67.34px] h-[59px]" src={img} alt={title} />
      <div className="w-[270px] h-[110px]">
        <h1 className="mb-1 font-medium text-xl text-[rgb(52,63,82)] mt-7">
          {title}
        </h1>
        <p className="break-words overflow-hidden text-ellipsis text-[rgb(52,63,82)]">
          {description}
        </p>
      </div>
    </div>
  );
}

function Product({ img, title }) {
  return (
    <div className="w-[380px] h-[550px] flex flex-col">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={img}
        alt={title}
      />
      <h1 className="flex justify-center font-medium p-5 text-2xl text-[rgb(52,63,82)]">
        {title}
      </h1>
    </div>
  );
}

function Content() {
  return (
    <>
      <div>
        <h1 className="text-center m-15 font-medium text-4xl">
          Here are a few reasons why our
          <br />
          customers choose ios.
        </h1>

        <div className="flex flex-wrap justify-center gap-3 p-5">
          <Card
            img="https://static.thenounproject.com/png/1021592-200.png"
            title="Beds"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Card
            img="https://cdn-icons-png.flaticon.com/512/1002/1002365.png"
            title="Sofa"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Card
            img="https://cdn-icons-png.flaticon.com/512/93/93701.png"
            title="Lamb"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>

        <div className="">
          <h1 className="text-center p-7 text-4xl font-bold">
            Browse The Range
          </h1>
          <p className="text-center text-[rgb(52,63,82)] text-2xl font-medium mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <Product
            img="https://homebliss.in/wp-content/uploads/2023/12/shutterstock_1962527464-1024x678.jpg"
            title="Dining"
          />
          <Product
            img="https://www.home-designing.com/wp-content/uploads/2021/10/curved-living-room-furniture.jpg"
            title="Living"
          />
          <Product
            img="https://static1.squarespace.com/static/600310fb2f57da1e2e6c8383/t/6447d6b688a2dc70edbdd10b/1682429622476/aesthetic-bedroom-ideas-6.jpeg?format=1500w"
            title="Bedroom"
          />
        </div>
      </div>

      <div className="bg-red-100 w-full h-[500px] flex justify-between items-center mt-10 rounded-3xl">
        <div className="ml-40">
          <h1 className="text-gray-400 font-medium mb-8">END OF SEASON SALE</h1>
          <h1 className="text-4xl font-semibold mb-10 text-gray-800">
            Up To 60% Off
          </h1>
          <p className="text-gray-600 font-medium">
            We bring solutions to make life
            <br />
            easier for our customers
          </p>
        </div>
        <div className="w-[850px] h-[400px] mt-25">
          <img
            className="w-full h-full object-cover"
            src="https://img.koalaliving.com.au/products/126623/d4c04f85-686d-4e20-b3be-2e1649aad64a.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Content;
