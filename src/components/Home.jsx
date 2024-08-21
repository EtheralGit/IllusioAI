import Navbar from "./Navbar";
import { homevideo } from "../assets";

const Home = () => {
  return (
    <section id="home">
      <Navbar />
      <video src={homevideo} autoPlay loop muted>
        {" "}
      </video>
      <div className="absolute top-[25rem] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center px-8   ">
          <h1 className="text-white xl:text-5xl text-4xl font-bold mb-6 text-center">
            Unleash Creative Power With <br className="lg:hidden flex" />
            <span className="text-primary "> IllusioAI</span>
          </h1>
          <p className="md:w-3/4 text-white lg:text-xl sm:text-lg text-center font-medium opacity-80 ">
            Step into a world of boundless creativity with IllusioAI – where
            cutting-edge AI technology brings your imagination to life through
            stunning visual content, redefining the art of image generation
          </p>
          <button
            className="bg-primary border-2 border-primary text-tertiary font-semibold lg:text-2xl text-xl
            rounded-xl px-6 py-5 mt-12 hover:bg-transparent duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
