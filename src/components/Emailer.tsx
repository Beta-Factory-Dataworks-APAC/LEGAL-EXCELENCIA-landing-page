import Image from "next/image";
import ContactForm from "./form";

const Emailer = () => {
  return (
    <div className="mt-24 w-full flex flex-col justify-center items-center mx-auto">
      <div className="hidden lg:flex md:flex relative border-1 border-slate-400 lg:h-80 md:h-96 md:mb-[-250px] lg:mb-0 w-full z-0">
        <Image src="/map.png" alt="map" width={1920} height={1080} />
      </div>
      <div className="z-20 bg-white flex flex-col lg:w-1/3 w-auto border-4 border-neutral-200 lg:mt-[-150px] rounded-2xl p-4">
        <p className="flex text-blue-400 justify-center">Legal Excelencia</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Write us about your needs
          </span>
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Emailer;
