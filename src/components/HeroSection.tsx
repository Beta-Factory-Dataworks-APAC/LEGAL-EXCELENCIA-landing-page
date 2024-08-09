// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";

import Image, { StaticImageData } from "next/image";
import Caption from "@/assets/caption.png";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <div className=" bg-blue-50 pt-10 lg:pb-16 max-md:px-8">
      <div id="hero" className="flex flex-col items-center mt-6 lg:mt-10 gap-5">
        <div className="inline-block items-center bg-blue-50 rounded-md">
          <Image
            className="h-32 w-auto rounded-md"
            src={logo as unknown as string}
            alt={"caption"}
          />
        </div>
        <div className="inline-block items-center bg-blue-50 rounded-md border-[1px] border-blue-950">
          <Image
            className="h-16 w-auto rounded-md"
            src={Caption as unknown as string}
            alt={"caption"}
          />
        </div>
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
        <div className="flex max-md:flex-col max-md:w-full justify-center items-start my-10">
          <a
            className="flex w-full md:w-auto mb-2 md:mb-0 py-4 px-8 mr-4 text-sm font-medium leading-normal bg-red-500 hover:bg-red-300 text-white rounded transition duration-200 max-md:justify-center"
            href="#info"
          >
            Contact us
          </a>
          <a
            className="flex w-full md:w-auto py-4 px-8 mr-4 text-sm font-medium leading-normal border border-gray-300 hover:border-gray-400 rounded transition duration-200 max-md:justify-center"
            href="#about"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="hidden lg:mt-28 lg:h-[200px] lg:flex lg:gap-10 lg:justify-center">
        {/* {testimonials.map((user, index) => (
          <div className="h-auto flex" key={index}>
            <Image
              className={`${
                index % 2 === 0 ? "h-44 w-32" : "h-32 w-24"
              } rounded-2xl`}
              src={user.image as StaticImageData}
              alt={user.company}
            />
          </div>
        ))} */}

        <div className="hidden md:flex absolute inset-x-0 mt-24 ">
          <div className="flex p-4">
            <div className="w-4/5 px-4">
              <img
                className="h-52 rounded-lg object-cover"
                src="https://static.shuffle.dev/uploads/files/31/31993a7f1bea9fbb107ee5422dfe4ab6e063d82e/alex-starnes-PK-t0Lrh7MM-unsplash.jpg"
                alt="heropics"
              />
            </div>
            <div className="w-3/5 px-4">
              <img
                className="h-40 w-full rounded-lg object-cover"
                src="https://static.shuffle.dev/uploads/files/31/31993a7f1bea9fbb107ee5422dfe4ab6e063d82e/fray-bekele-i3yhGV0Z6iE-unsplash.jpg"
                alt="heropics"
              />
            </div>
            <div className="w-auto px-4 mt-12">
              <img
                className="h-40 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="heropics"
              />
            </div>
            <div className="w-1/5 flex-shrink-0 px-4">
              <img
                className="h-64 w-full rounded-lg object-cover"
                src="https://static.shuffle.dev/uploads/files/31/31993a7f1bea9fbb107ee5422dfe4ab6e063d82e/pexels-kampus-production-8353824.jpg"
                alt="heropics"
              />
            </div>
            <div className="w-3/5 px-4 mt-12">
              <img
                className="h-40 w-full rounded-lg object-cover"
                src="https://static.shuffle.dev/uploads/files/31/31993a7f1bea9fbb107ee5422dfe4ab6e063d82e/brian-tromp-mw4u9Qm6CHQ-unsplash.jpg"
                alt="heropics"
              />
            </div>
            <div className="w-3/5 px-4">
              <img
                className="h-40 w-full rounded-lg object-cover"
                src="https://static.shuffle.dev/uploads/files/31/31993a7f1bea9fbb107ee5422dfe4ab6e063d82e/mateus-campos-felipe-WnPJft0DJpk-unsplash.jpg"
                alt="heropics"
              />
            </div>
            <div className="w-3/5 px-4">
              <img
                className="h-52 w-full rounded-lg object-cover"
                src="https://static.shuffle.dev/uploads/files/31/31993a7f1bea9fbb107ee5422dfe4ab6e063d82e/matteo-minoglio-hb555z0ZT-8-unsplash.jpg"
                alt="heropics"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
