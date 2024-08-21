import React from "react";
import { caseimage } from "../assets";
import { caseimage2 } from "../assets";
import { caseimage3 } from "../assets";

const Case = () => {
  return (
    <section className="section" id="use-cases">
      <div className="text-white text-center">
        <h1 className="title_page">Use Cases</h1>
        <p className="title_info">
          Explore real-world applications of IllusioAI across different
          industries and scenarios
        </p>
      </div>
      <div className="absolute z-[1] right-0 bottom-0 w-[20%] h-[50%] rounded-full green_gradient"></div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:space-y-0 lg:space-x-6 space-y-8 p-8">
        <div>
          <div
            className="relative bg-black rounded-xl p-8 border-2 border-primary 
        lg:max-w-[500px] max-w[600px] min-w-[300px] h-[650px] overflow-hidden"
          >
            <div className="w-11/12 mb-4">
              <h1 className="text-primary xl:text-3xl text-2xl font-bold">
                Marketing and Advertising
              </h1>
              <p className="text-white xl:text-lg text-md font-medium opacity-70 mt-2">
                Use IllusioAI for eye-catching marketing visuals. Engage your
                audience and drive sales
              </p>
            </div>
            <img
              src={caseimage}
              alt=""
              className="absolute right-2 left-2 bottom-36 rounded-xl h-[280px]"
            />
            <button
              className="absolute bottom-8 left-12 border-2 border-primary text-tertiary text-lg font-semibold 
            rounded-lg px-6 py-4 hover:bg-primary duration-300 "
            >
              Try Now
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-10 justify-center items-center p-0">
          <div
            className="relative bg-primary rounded-xl p-8 
            lg:max-w-[300px] md:max-w-[368px] max-w-[800px] md:min-w-[280px] lg:h-[650px] h-[600px] overflow-hidden"
          >
            <img
              src={caseimage2}
              alt=""
              className="absolute top-0 right-0 left-0 rounded-xl md:h-[270px]"
            />
            <div className="md:mt-64 sm:mt-[22rem] mt-[18rem] ">
              <h1 className="xl:text-3xl text-2xl font-bold">
                Graphic Design and Branding
              </h1>
              <p className=" xl:text-lg text-md font-medium opacity-80 mt-2">
                Elevate your brand with IllusioAI. Craft captivating logos and
                graphics effortlessly
              </p>
              <button
                className="absolute bottom-8 bg-black text-tertiary text-lg font-semibold 
            rounded-lg px-6 py-4 hover:bg-gray-800 duration-300 "
              >
                Try Now
              </button>
            </div>
          </div>

          <div
            className="relative bg-primary rounded-xl p-8 
            lg:max-w-[300px] md:max-w-[368px] max-w-[800px] md:min-w-[280px] lg:h-[650px] h-[600px] overflow-hidden"
          >
            <div className="">
              <h1 className="xl:text-3xl text-2xl font-bold">
                E-commerce and Product Visual
              </h1>
              <p className="xl:text-lg text-md font-medium opacity-80 mt-2">
                Use IllusioAI to create compelling product visuals, driving
                sales effectively
              </p>
            </div>
            <img
              src={caseimage3}
              alt=""
              className="absolute bottom-[7rem] right-0 left-0 rounded-xl md:h-[270px]"
            />
            <button
              className="absolute bottom-8 bg-black  text-tertiary text-lg font-semibold 
            rounded-lg px-6 py-4 hover:bg-gray-800 duration-300"
            >
              Try Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
