import Image from "next/image";
import ContactForm from "./form";

const Emailer = () => {
  return (
    <div className="mt-24 w-full flex flex-col justify-center items-center mx-auto">
      <div
        // href="https://www.google.com/maps/place/Mansa+Devi+Complex,+Sector+5,+Chandigarh,+Panchkula,+Haryana+160101/@30.7172812,76.848802,18.5z/data=!4m6!3m5!1s0x390f9318767debbd:0xb0b938d32466816c!8m2!3d30.7174464!4d76.8491977!16s%2Fg%2F11gf21vwr9?entry=ttu"
        // target="_blank"
        // rel="noreferrer"
        className="hidden lg:flex md:flex relative border-1 border-slate-400 lg:h-80 md:h-96 md:mb-[-250px] lg:mb-0 w-full z-0"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.033935310979!2d76.8466227753021!3d30.71744637459161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9318767debbd%3A0xb0b938d32466816c!2sMansa%20Devi%20Complex%2C%20Sector%205%2C%20Chandigarh%2C%20Panchkula%2C%20Haryana%20160101!5e0!3m2!1sen!2sin!4v1723118103127!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* <Image src="/map.png" alt="map" width={1920} height={1080} /> */}
      </div>
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
