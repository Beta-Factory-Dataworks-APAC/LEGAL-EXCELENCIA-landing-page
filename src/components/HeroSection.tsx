// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";

import { useEffect } from "react";
import { testimonials } from "../constants";
import Image, { StaticImageData } from "next/image";

const HeroSection = () => {
  return (
    <div className=" bg-blue-50 pt-10">
      <div id="hero" className="flex flex-col items-center mt-6 lg:mt-10 gap-5">
        <p className="text-blue-500 text-xl items-center">LEGAL EXCELENCIA</p>
        <h1 className="text-4xl lg:text-7xl text-center tracking-wide font-semibold">
          Legal Excelencia : Allied for Excellence.
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Full-service corporate/commercial law firm with offices in Chandigarh,
          Delhi, Mumbai, and Kolkata.
          <br /> 30+ skilled lawyers provide multi-jurisdictional expertise
          across various practice areas.
          <br />
          <span className="bg-clip-text font-semibold">
            Committed to professionalism, credibility, and exceptional client
            care for individuals and corporations.
          </span>
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#info"
            className="relative z-10 inline-block w-full md:w-auto mb-2 md:mb-0 py-4 px-8 mr-4 text-sm font-medium leading-normal bg-red-500 hover:bg-red-300 text-white rounded transition duration-200"
          >
            Contact us
          </a>
          <a
            href="#about"
            className="py-3 px-4 mx-3 rounded-md border-2 border-neutral-300"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="hidden lg:mt-28 lg:h-[200px] lg:flex lg:gap-32 lg:justify-center">
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
