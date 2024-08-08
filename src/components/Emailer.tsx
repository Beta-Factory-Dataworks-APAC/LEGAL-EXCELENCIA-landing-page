import Image from "next/image";
import ContactForm from "./form";

const Emailer = () => {
  return (
    <div className="mt-24 w-full flex flex-col justify-center items-center mx-auto">
      <a
        href="https://www.google.com/maps/place/Mansa+Devi+Complex,+Sector+5,+Chandigarh,+Panchkula,+Haryana+160101/@30.7172812,76.848802,18.5z/data=!4m6!3m5!1s0x390f9318767debbd:0xb0b938d32466816c!8m2!3d30.7174464!4d76.8491977!16s%2Fg%2F11gf21vwr9?entry=ttu"
        target="_blank"
        rel="noreferrer"
        className="hidden lg:flex md:flex relative border-1 border-slate-400 lg:h-80 md:h-96 md:mb-[-250px] lg:mb-0 w-full z-0"
      >
        <Image src="/map.png" alt="map" width={1920} height={1080} />
      </a>
      <div className="z-20 bg-white flex flex-col lg:w-1/2 w-auto border-2 border-neutral-200 lg:mt-[-150px] rounded-2xl p-4 h-auto pb-16">
        <p className="flex text-blue-400 justify-center">Legal Excelencia</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-5">
          <span className="mt-8 mb-14 text-4xl font-semibold font-heading">
            Write us about your needs
          </span>
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Emailer;
