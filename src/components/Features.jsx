import React from "react";
import { featureimg } from "../assets";
import { FaImage, FaClock, FaDesktop, FaPaintBrush } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: "card1",
      icons: <FaImage />,
      title: "High Quality",
      text: "Experience exceptional image quality with IllusioAI's high-resolution output, perfect for print, web, and digital media projects",
    },
    {
      id: "card2",
      icons: <FaClock />,
      title: "Time Saving",
      text: "Save time and effort with IllusioAI's automated image generation process, allowing you to focus on the creative aspects of your projects",
    },
    {
      id: "card3",
      icons: <FaDesktop />,
      title: "Customization Options",
      text: "Tailor your images to perfection with a range of customization options, including color adjustments, style presets, and artistic filters",
    },
    {
      id: "card4",
      icons: <FaPaintBrush />,
      title: "User Friendly Interface",
      text: "Enjoy a user-friendly interface designed for ease of use and accessibility, making it simple for users of all skill levels to create stunning images effortlessly",
    },
  ];

  return (
    <section className="section" id="features">
      <div className="text-white text-center">
        <h1 className="title_page">Features</h1>
        <p className="title_info">
          Uncover IllusioAI's innovative image generation solutions, redefining
          creativity
        </p>
      </div>
      <div className="absolute z-[1]  left-1/2 top-0 w-[25%] h-[50%] rounded-full green_gradient"></div>
      <div className="absolute z-[1]  -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full green_gradient"></div>

      <div className="flex xl:flex-row flex-col justify-center items-center md:space-x-12">
        <img
          src={featureimg}
          alt=""
          className="rounded-full xl:w-[550px] hover:scale-105 duration-500 mb-16"
        />

        <div className="grid md:grid-cols-2 gap-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-2 border-secondary rounded-lg max-w-[350px] hover:scale-105 duration-500 z-[10]"
            >
              <div className="text-white px-8 py-12">
                <h2 className="xl:text-5xl text-3xl text-tertiary mb-4">
                  {feature.icons}
                </h2>
                <h1 className="xl:text-2xl text-xl text-primary font-semibold mb-10">
                  {feature.title}
                </h1>
                <p className="text-tertiary xl:text-lg text-md opacity-80">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
