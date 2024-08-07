// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";

import { useEffect } from "react";
import { testimonials } from "../constants";
import Image, { StaticImageData } from "next/image";

const HeroSection = () => {
  return (
    <div className=" bg-blue-50 pt-10">
      <div id="hero" className="flex flex-col items-center mt-6 lg:mt-10 gap-5">
        <p className="text-blue-500 items-center">Legal Excelencia</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          A law firm built on
          <span className="bg-gradient-to-r from-pink-500 to-red-600 text-transparent bg-clip-text">
            {" "}
            hard work and integrity
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          With an impressive track record of success, our law firm provides
          services for a wide range of clients, ranging from individuals to
          small businesses.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-pink-500 to-red-500 py-3 px-4 mx-3 rounded-md text-white"
          >
            Contact us
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border-2">
            Learn more
          </a>
        </div>
      </div>

      <div className="hidden lg:h-[200px] lg:flex lg:gap-32 lg:justify-center">
        {testimonials.map((user, index) => (
          <div className="h-auto flex" key={index}>
            <Image
              className={`${
                index % 2 === 0 ? "h-44 w-32" : "h-32 w-24"
              } rounded-2xl`}
              src={user.image as StaticImageData}
              alt={user.company}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
