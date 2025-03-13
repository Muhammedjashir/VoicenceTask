import { Button } from "@material-tailwind/react";
import React from "react";

const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    image:
      "https://img.koalaliving.com.au/products/129256/2ab3ef26-9daa-43d2-987a-1995ca8bc234.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    image:
      "https://img.koalaliving.com.au/products/129469/be968485-6fcd-438c-9614-33ff3486af6d.png",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    image:
      "https://img.koalaliving.com.au/products/129371/fd303041-5c64-4585-95c7-d58aca030cd0.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    image:
      "https://img.koalaliving.com.au/products/129316/af4d409b-d000-4e1e-baff-67b2356f5cd9.png",
  },
  {
    name: "Grifo",
    description: "Night lamp",
    image:
      "https://img.koalaliving.com.au/products/128352/89868678-1233-4624-bb0d-019493737bd3.png",
  },
  {
    name: "Muggo",
    description: "Small mug",
    image:
      "https://img.koalaliving.com.au/products/129322/74d87251-7fb6-4ed5-86d5-31a402fb9541.png",
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    image:
      "https://img.koalaliving.com.au/products/129492/f3870a5b-08ba-4f1c-bd9e-ab4884a947ff.png",
  },
  {
    name: "Potty",
    description: "Minimalist flower pot",
    image:
      "https://img.koalaliving.com.au/products/129389/52dc97af-068a-4259-a207-f35dc3f53cd9.png",
  },
];

function OurProduct() {
  return (
    <div>
      <div className="text-center text-5xl font-bold text-gray-900 p-10">
        <h1>Our Products</h1>
      </div>
      <div className="grid grid-cols-4 gap-7 px-20">
        {products.map((product) => (
          <div className="w-[285px] h-[400px] bg-gray-100">
            <img
              className="w-[285px] h-[301px]"
              src={product.image}
              alt={product.name}
            />
            <div className="pl-6">
              <h1 className="font-bold text-2xl text-gray-700 mt-2">
                {product.name}
              </h1>
              <h1 className="text-gray-600 font-medium mt-2">
                {product.description}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center m-10">
        <Button className="bg-white text-amber-600 border w-[245px] h-[48px] rounded-none font-extrabold">
          Show more
        </Button>
      </div>
    </div>
  );
}

export default OurProduct;
