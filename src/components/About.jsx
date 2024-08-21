import React from "react";
import { aboutimage } from "../assets";
import { FaRegHandPointRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="section" id="about-us">
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold text-primary">
          About Illusio<span className="text-white">AI</span>
        </h1>
        <p className="text-xl opacity-85 font-medium mt-2 mb-16">
          Discover the vision and team behind IllusioAI's innovation
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <div className="max-w-[1500px]">
          <div className="flex lg:flex-row flex-col justify-center items-center space-x-8 space-y-12">
            <div className="max-w-[750px]">
              <img src={aboutimage} alt="" className="" />
            </div>
            <div className="">
              <h1 className="text-white xl:text-4xl text-2xl font-semibold mb-8">
                Illuminating <span className="text-primary">Imaginations </span>{" "}
                | Empowering <span className="text-primary">Creativity </span> |{" "}
                <span></span>
                Your <span className="text-primary">Visual </span>
                Revolution
              </h1>
              <p className="text-tertiary xl:text-lg text-sm opacity-90 leading-[28px]">
                Welcome to IllusioAI, pioneers in AI-driven visual content
                creation. Founded in 2019, we're committed to revolutionizing
                creativity through advanced technology. With a diverse clientele
                spanning industries, we're dedicated to pushing boundaries and
                shaping the future of visual expression. Join us as we
                illuminate imaginations and transform reality together.
              </p>
              <div className="flex justify-start items-center mt-8 space-x-12">
                <button
                  className="bg-primary border-2 border-primary text-white xl:text-xl text-md font-semibold px-5 py-3 rounded-lg 
              hover:bg-transparent duration-500"
                >
                  Our Team
                </button>

                <button
                  className="text-white xl:text-xl text-md font-semibold flex justify-center items-center
                hover:text-primary duration-300"
                >
                  <FaRegHandPointRight className="text-primary text-4xl mr-4" />
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
