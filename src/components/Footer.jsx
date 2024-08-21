import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-black border-t-2 border-gray-900 p-8 sm:px-[5rem]">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="w-1/2 mb-12">
          <h1 className="text-primary text-3xl font-bold">
            Illusio<span className="text-white">AI</span>
          </h1>
          <p className="text-white text-md font-medium opacity-70 ">
            Step into a world of boundless creativity with IllusioAI
          </p>
          <div className="flex justify-start items-center mt-4">
            <a href="">
              <FaInstagram
                className="text-white text-2xl mr-6 hover:text-primary
              duration-300  "
              />
            </a>
            <a href="">
              <FaYoutube
                className="text-white text-2xl mr-6 hover:text-primary
              duration-300  "
              />
            </a>
            <a href="">
              <FaFacebook
                className="text-white text-2xl mr-6 hover:text-primary
              duration-300  "
              />
            </a>
            <a href="">
              <FaTwitter
                className="text-white text-2xl mr-6 hover:text-primary
              duration-300  "
              />
            </a>
          </div>
        </div>
        <div>
          <div className="flex md:flex-row flex-col md:space-x-32 space-x-0">
            <div className="mb-4">
              <h1 className="text-white text-2xl font-semibold mb-4">
                Support
              </h1>
              <p className="text-white text-md font-medium opacity-70 mb-2">
                FAQ
              </p>
              <p className="text-white text-md font-medium opacity-70 mb-2">
                Privacy Policy
              </p>
              <p className="text-white text-md font-medium opacity-70 mb-2">
                Help
              </p>
              <p className="text-white text-md font-medium opacity-70 mb-2">
                Contact
              </p>
            </div>
            <div className="mb-4">
              <h1 className="text-white text-2xl font-semibold mb-4">Patner</h1>
              <p className="text-white text-md font-medium opacity-70 mb-2">
                Our Patner
              </p>
              <p className="text-white text-md font-medium opacity-70 mb-2">
                Become Our Patner
              </p>
            </div>
            <div className="mb-4">
              <h1 className="text-white text-2xl font-semibold mb-4">
                Contact
              </h1>
              <p
                className="text-white text-md font-medium opacity-70 mb-2 flex justify-start
            items-center"
              >
                <FaPhone className="text-white mr-4" />
                +12 3456 7890
              </p>
              <p className="text-white text-md font-medium opacity-70 mb-2">
                @ etheralwork@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
