import { Button } from "@material-tailwind/react";
import React from "react";

const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BCtS0zr-jfsMZLcXB6wUTv4ylMjZIXq2s-cRmVo5-iNOq2TTtHmxmW6RDStljHhAXuyXLzPHDZUu7kxGPhAaVweEXso2l~aimD8H2myKVDvHc3HpR7wlrSMcZ7YYcdseyBfHjzC8K36DXidDH0lxMeeRL01x8NiySXxAgUejTkyTbr7QutV0dmoTU76BGLd1ZSsHsFIbuMLOi0Jw78GVTzxiGhPvcbuF8bmoTEvd9XJmXj3ZFYVmNi2PW~zWd5fSP-ao3r6CVRs0PLUqzb72geIUe0BL-wQP7BHOH8~yNpqOG49RdZQUUtZnCQLyePTnWGFmV6SZF1N-a63Zy4GDOg__",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    image:
      "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q~AC3QUFbOD79KRagXq4inrzjWsSaFtdlJjcM~4tFFBTTs8wqGASIBfdYO14GZP9YWEbP9XnN94t55Im~EAGViWb4w7pIJkf203t8Gc2hwD0IAypE922K7PWlO3loaNkGyb80OmAVMG29o-Hf~3Bj3bL5nDiUdMF34Jrmw8n-uaE7IrYinAJTrLRStLMuQQvHMwoLhbN8OlHxldMOFSs1Ikh1ifOyG1WjJycQw6GOv2CCyQXLnyW~YQs57Il9hut4bD6qVlJkSoNQvqbc2N7CqBrWvFIELDqDyZJAqxwgvxhFAClYgTkzhFjezdTjiF~jvFb9niyRR0TtwGXSH2IXw__",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    image:
      "https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s3FvJv-3QW35-ui49SdGc9eWlpQEX7PM6mn52Pd2iz3dCf0LQieU5Burall-SpkiBfCeo0e260jtqDOrIhjbmp~OnF3c3SGd26Si55SS1j-c6wA0pnQmE7RpjgjLqKatfRv9~yTUvKbU03iZO7uIh6XxfHPoLsG-5DK087MTnh9yrEdnqYzKi9cXVGyiC-Q8tHX~dG6Jn1qhWQ9kIEGH6MVU~IgCfuaSj51Xc99L4b68Ex2Es99G2RJJFFOH8cnsacXlXeCB7SG0W-IbSWoDcDAKY~iGFA6B0jIZWvl926xjIbAxBCNiJcTPsN3i688XgnGzQfPEeawmvxGHHbARTA__",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    image:
      "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q~AC3QUFbOD79KRagXq4inrzjWsSaFtdlJjcM~4tFFBTTs8wqGASIBfdYO14GZP9YWEbP9XnN94t55Im~EAGViWb4w7pIJkf203t8Gc2hwD0IAypE922K7PWlO3loaNkGyb80OmAVMG29o-Hf~3Bj3bL5nDiUdMF34Jrmw8n-uaE7IrYinAJTrLRStLMuQQvHMwoLhbN8OlHxldMOFSs1Ikh1ifOyG1WjJycQw6GOv2CCyQXLnyW~YQs57Il9hut4bD6qVlJkSoNQvqbc2N7CqBrWvFIELDqDyZJAqxwgvxhFAClYgTkzhFjezdTjiF~jvFb9niyRR0TtwGXSH2IXw__",
  },
  {
    name: "Grifo",
    description: "Night lamp",
    image:
      "https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J2ZSXIamQvO8DF9EyWJtADaPqgzaBi7Ce~w5aQT55mJpu5sJftAeNVQ-NAavJnASxn653EjaGQFnnsddC~7I4muJUK77~KzGtG7MJl4k~g5fZp4nAdv7GBIm04qz3~JmHUAZgs1QvNjzdzADtOJ4JfdOi4lhGqzwkGi0xXiOMYznSsHd3yL~VvK1c2L5-sWkMTSXixZBfUnxxvzwwOo84oLLbCNaf1Nzmv4qPbe0F5ruHLU0wjKOBSgilCG5pOSh44-pJSLM2sfI5lF0IRaxwxMWBT-ZMc3Dfc6InbMk1Den-~YzoSz3icMMZidOlTuRa2~cODMrG8lCeVaIOVM3KA__",
  },
  {
    name: "Muggo",
    description: "Small mug",
    image:
      "https://s3-alpha-sig.figma.com/img/3c0a/6c98/3f9e66e49766034d57360d64e957ff6a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jIdhhUloDbxv6Tr~1Df85aIhybzV0SKjFTm6Df12CRKN~g3t3I3C-Gnaks69HFkaempAxrRwEu9xkNr4Ax44vOja~92TttW29qASxG-Vg0eXr5hbj4nVUo1UMt9xDD4eZZUGWl2tj2sC4gxjZfT6DgjhVqFgnW9fldWBlzSxzlBLiIuvr4WpoD2S2hDUxvEt4UmW63bMP2sMsqZ4YR2RVNtj8IDL1rLQZKTT0t6pELNMXpFyCz69BBc7VG4h9MQBEx9AwiJUA-4F736HqYS7sjKEqTytYUwkMNaKj~CQpm6p076kzZFNkPWez7m6lJ3B88KHb75q~4L2Ifnf-gYXlg__",
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    image:
      "https://s3-alpha-sig.figma.com/img/b67d/edd5/9765b31b26fb533b95b7b43e636201e6?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J0U674atq2Av8MhcIP3HbDmwMynkRYXdK1v0J9rCUYKXFrrA9iEqBFrnU8zS09wV5N8WzHrFA4Uew-eUfnjvSQk4bd45b5zRlko3kqPE-V1dHwNnBFKsNsso4nyjz7Qf8RSxmLG7QULci4S9l12l4XsM7W4u6Fb86l~K4Sd8ZgtpG2JnPOE9xSDM9WXcaPHBJZriKooYVJ5V0T3DxVRTnEZLKqz1azH3XkLwbwD-cOmnLhetZNtC54Vl28o8bN6fq~raNr3SsQ1y-357-m7yeAiQVovuAdmsiDjIto1j0QF2n~F-TWvoZQhzmPW5mceQoZD7xMymsYx0SXc1m0FZTA__",
  },
  {
    name: "Potty",
    description: "Minimalist flower pot",
    image:
      "https://s3-alpha-sig.figma.com/img/01ee/fd24/a8aa07432237436878715846cd38a35f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VRRagX5CVgoAbNKeQmXD~Ur77REU4EkuTCuk9ExEzHAW9Jsft68zdcPF5hLDIaD31kmpAfyfrcfW1ttcO8jbqfw7Y3mN4W9TM1j9iYBOIyJYXOIq-NI5e-86STqQAr~lGMW5xzb1XbQ6pGGtG9suH3Ma6Q4VonvN94WQtyOTtPAoo2cxo3GwsTecmudkrcsDRZ3qbelF12g-wvFdotdTNbPIm~OQo1ZL51SrFRAupqURlkgQZPfNaIPqWnrQ3X1qN0Tk1iTRgtCjbwooZJtGOSen9Q-UvH0lzZg5HXdAaSjkpU6U3VVPep7YuYXpzTxR-ENULrW6k-SumNd-TiENug__",
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
