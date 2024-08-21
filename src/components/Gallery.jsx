import React from "react";
import { galleryimage } from "../assets";
import { galleryimage2 } from "../assets";
import { galleryimage3 } from "../assets";
import { galleryimage4 } from "../assets";

const Gallery = () => {
  return (
    <section className="section" id="gallery">
      <div className="text-white text-center">
        <h1 className="title_page">Gallery</h1>
        <p className="title_info">
          Explore stunning visuals created with IllusioAI's advanced algorithms
        </p>
      </div>
      <div className="absolute z-[1] bottom-0 w-[20%] h-[50%] rounded-full green_gradient"></div>
      <div className="absolute z-[1] right-0 bottom-0 w-[50%] h-[10%] rounded-full green_gradient"></div>

      <div className="flex flex-col justify-center items-center p-8">
        <div className="max-w-[1200px]">
          <div className="relative max-w-[1200px] border-2 border-primary z-[10]">
            <img
              src={galleryimage}
              alt=""
              className="md:h-[420px] h-[300px] max-w-[1200px]"
            />
            <div className="absolute lg:bottom-36 lg:right-32 bottom-0  p-6">
              <h2 className="text-tertiary lg:text-3xl md:text-xl text-lg font-bold mb-4">
                Minimalist Design
              </h2>
              <button
                className="bg-primary md:text-lg text-md font-semibold px-4 py-2 rounded-lg
            border-2 border-primary hover:bg-transparent hover:text-primary duration-300 "
              >
                See More
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <div className="max-w-[615px] flex flex-col justify-center items-center space-y-6 z-[10]">
              <div className="relative border-2 border-primary ">
                <img src={galleryimage2} alt="" />
                <div className="absolute bottom-0 p-6">
                  <h2 className="text-tertiary md:text-xl text-lg font-bold mb-4">
                    3D Modeling
                  </h2>
                  <button
                    className="bg-primary md:text-lg text-md font-semibold px-4 py-2 rounded-lg
            border-2 border-primary hover:bg-transparent hover:text-primary duration-300"
                  >
                    See More
                  </button>
                </div>
              </div>
              <div className="max-w-[615px] relative border-2 border-primary z-[10]">
                <img src={galleryimage3} alt="" />
                <div className="absolute bottom-0 p-6">
                  <h2 className="text-tertiary md:text-xl text-lg font-bold mb-4">
                    Product Design
                  </h2>
                  <button
                    className="bg-primary md:text-lg text-md font-semibold px-4 py-2 rounded-lg
            border-2 border-primary hover:bg-transparent hover:text-primary duration-300 "
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-[650px] relative border-2 border-primary z-[10]">
              <img src={galleryimage4} alt="" className="" />
              <div className="lg:absolute lg:bottom-0 lg:p-6 p-3">
                <h2 className="text-tertiary md:text-xl text-lg font-bold mb-4">
                  Fashion & Textile
                </h2>
                <button
                  className="bg-primary md:text-lg text-md font-semibold px-4 py-2 rounded-lg
            border-2 border-primary hover:bg-transparent hover:text-primary duration-300 "
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
