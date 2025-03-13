import React from "react";

function Gallery() {
  return (
    <>
      <div className="">
        <div className="text-center">
          <h1 className="font-bold text-xl text-gray-700">Gallery</h1>
          <h1 className="font-extrabold text-4xl text-gray-900">
            #FuniroFurniture
          </h1>
        </div>

        <div className="flex justify-around gap-6 mt-5 items-center">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="w-[274px] h-[382px] "
              src="https://img.koalaliving.com.au/products/128454/7d50065c-4061-4a59-b5cb-031da072df2f.png"
              alt=""
            />
            <img
              className="w-[451px] h-[312px] mt-15"
              src="https://img.koalaliving.com.au/products/126255/09b3d38b-bffa-4f90-a99f-116c1074cfea.png"
              alt=""
            />
            <img
              className="w-[381px] h-[323px]"
              src="https://img.koalaliving.com.au/products/128286/b10fbb9a-d81c-465f-84be-76abd870e2e5.png"
              alt=""
            />

            <img
              className="w-[344px] h-[242px]"
              src="https://img.koalaliving.com.au/products/128288/59a7d3d1-1cb0-4ebd-b7ba-cb328843306d.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="w-[295px] h-[392px]"
              src="https://www.danetti.com/cdn/shop/files/AssiDiningTableLifestyleLone.jpg?v=1696260573&width=823"
              alt=""
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <img
              className="w-[290px] h-[348px] mt-15"
              src="https://img.koalaliving.com.au/products/127457/d4798024-ca12-4153-9f09-39a0cc15a8f5.png"
              alt=""
            />
            <img
              className="w-[425px] h-[433px] "
              src="https://img.koalaliving.com.au/products/127417/60bb6ae6-4578-45d8-861f-3a0acc355cc0.png"
              alt=""
            />
            <img
              className="w-[178px] h-[242px]"
              src="https://img.koalaliving.com.au/products/125886/1c34ca9f-fc95-47a8-aa34-dbff7e946a49.png"
              alt=""
            />
            <img
              className="w-[258px] h-[196px]"
              src="https://img.koalaliving.com.au/products/128348/b9e79c3f-c38d-4de2-ba85-40c9a98fdd3f.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
