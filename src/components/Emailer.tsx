import ContactForm from "./form";

const Emailer = () => {
  return (
    <div className="mt-24 border-t w-full border-neutral-800 flex flex-col justify-center items-center mx-auto">
      <div className="hidden lg:flex md:flex relative border-2 border-slate-700 lg:h-80 md:h-96 md:mb-[-250px] lg:mb-0 w-full z-0">
        map
      </div>
      <div className="z-20 bg-white flex flex-col lg:w-1/3 w-auto border-4 border-neutral-200 lg:mt-[-150px] rounded-2xl p-2">
        <p className="flex text-blue-400 justify-center">Galandis Dunstan</p>
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
