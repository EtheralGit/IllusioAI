import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navList = [
    { link: "Home", path: "home" },
    { link: "Features", path: "features" },
    { link: "Use Cases", path: "use-cases" },
    { link: "Gallery", path: "gallery" },
    { link: "About Us", path: "about-us" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <nav className="p-5 xl:px-[6rem] bg-black">
      <div className="flex justify-between items-center">
        <a
          href=""
          className="text-primary text-3xl font-bold hover:scale-110 duration-500"
        >
          Illusio<span className="text-tertiary font-extrabold">AI</span>
        </a>
        <ul class="lg:flex hidden space-x-8 text-tertiary text-md font-medium">
          {navList.map(({ link, path }) => (
            <Link
              smooth={true}
              spy={true}
              offset={-100}
              to={path}
              key={link}
              className="hover:text-primary duration-300 cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </ul>
        <div className="lg:flex hidden space-x-6">
          <button className="text-xl text-tertiary font-semibold hover:text-primary duration-300">
            Login
          </button>
          <button
            className="text-xl border-2 border-primary text-tertiary font-semibold bg-primary px-5 py-3 rounded-xl
           hover:bg-transparent duration-300"
          >
            Sign Up
          </button>
        </div>

        {/* for responsive mobile */}
        <div className="lg:hidden flex justify-end items-center">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="text-primary"
          >
            {toggle ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black opacity-90 absolute top-20 
          right-0 mx-4 my-2 rounded min-w-[200px] z-10`}
          >
            <ul class="flex flex-col space-y-8 text-white text-md font-medium">
              {navList.map(({ link, path }) => (
                <Link
                  smooth={true}
                  spy={true}
                  offset={-100}
                  to={path}
                  key={link}
                  className="hover:text-primary duration-300 cursor-pointer"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  {link}
                </Link>
              ))}
              <div className="flex space-x-6">
                <button className="text-xl text-tertiary font-semibold hover:text-primary duration-300">
                  Login
                </button>
                <button
                  className="text-xl text-tertiary font-semibold bg-primary px-5 py-3 rounded-xl
           hover:bg-primary duration-300"
                >
                  Sign Up
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
