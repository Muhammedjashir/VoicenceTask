import { Button } from "@material-tailwind/react";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="w-[1077px] h-[371px] bg-red-100 mx-auto rounded-3xl flex justify-center items-center text-center p-6">
        <div>
          <h2 className="font-medium text-gray-500 mb-3">JOIN OUR COMMUNITY</h2>
          <h1 className="text-4xl font-medium text-gray-700">
            We are trusted by over 5000+ clients.
            <br />
            Join them now and grow your business.
          </h1>
          <Button className="bg-red-200 mt-6 rounded-lg px-6 py-3 w-[147px] h-[59px]"></Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between max-w-6xl mx-auto mt-16 px-6">
        <div className="w-1/4">
          <div className="flex items-center space-x-3">
            <img
              className="w-16 h-16"
              src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OJvEBQx8ME39MkTmQliRdw~HZqd~-x6T94e~femNDpx9EOfjyOH8FMWzvDtARS8YxA2-9A4Lg54ygIdByoRV41YiCP9vqZvjIrJG3ytY1HT~w~ji3f1-Zc2Hl8WZ4bsdy6ZELlVNHMj1--ZC1BgYQQ~pWYXVWDC3i1o10JJkT-taH3xx3fONGcJq3eGIQdg3NRCSCf84MyJvuWunVtVc0-LPauDYRsFg99-qII9yvduvMOP9av0k1s-Em9IB3lUmAsEgqytHLL9oReUS~rxD~4nB0zVt1rN1rjuFI0FOC2YtegMkHgGItaehqfyb3cE~451Aff9OS-QpCfHVvqXexA__"
              alt="Company Logo"
            />
            <h2 className="text-2xl font-bold ">IOS INTERIORS</h2>
          </div>
          <p className="mt-6 text-gray-600">
            © 2023 Sandbox
            <br />
            All rights reserved.
          </p>
        </div>

        {[
          {
            title: "Get in Touch",
            content: [
              "Moonshine St.14/05",
              "Light City, London",
              "United Kingdom",
              "info@email.com",
              "00 (123) 456 78 90",
            ],
          },
          {
            title: "Learn More",
            content: [
              "About Us",
              "Our Story",
              "Projects",
              "Terms of Use",
              "Privacy Policy",
            ],
          },
          {
            title: "Our Newsletter",
            content: [
              "Subscribe to our newsletter to get our news & deals delivered to you.",
              <div key="newsletter" className="border flex mt-4">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="px-3 py-2 flex-1"
                />
                <Button className="bg-red-100 text-gray-400 px-4">JOIN</Button>
              </div>,
            ],
          },
        ].map((section) => (
          <div  className="w-1/4">
            <h2 className="font-bold text-xl text-gray-700">{section.title}</h2>
            <div className="mt-5 text-gray-600">
              {section.content.map((line, i) => (
                <p key={i} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
