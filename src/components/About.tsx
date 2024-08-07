import Image, { StaticImageData } from "next/image";

import ClientPage from "./ClientPage";
import libraryImg from "@/assets/library.jpg";

const About = () => {
  return (
    <div id="about" className="relative mt-10 pt-16 min-h-[800px]">
      <div className="flex justify-start ml-2">
        <span className=" text-slate-800 text-6xl font-medium px-2 py-1">
          Put yourself in the right hands
        </span>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 lg:ml-10 ">
        <div className="p-6 w-2/5 items-start max-lg:w-full">
          <div className="p-4">
            <h2 className="text-4xl font-bold">500+ trusting clients</h2>
            <p className="mt-4 text-xl text-slate-500">
              For over 40 years, Galanis Dunstan Justice Reliance LLP has
              provided the highest quality legal services.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-4xl font-bold">30+ lawyers and attorneys</h2>
            <p className="mt-4 text-xl text-slate-500">
              We are the right choice if you are facing an issue that you cannot
              solve alone.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-4xl font-bold">
              A reliable partner at a good price
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              Our experience allows us to approach each case with the right
              resources.
            </p>
          </div>
        </div>
        <div className="rounded-xl mx-auto h-96 lg:h-128 mb-5 object-cover max-md:w-full mt-5 lg:w-1/3">
          <Image
            className="rounded-xl mx-auto h-96 lg:h-128 mb-5 object-cover max-md:w-full"
            src={libraryImg as StaticImageData}
            alt="library"
          />
        </div>
      </div>
      <ClientPage />
    </div>
  );
};

export default About;
