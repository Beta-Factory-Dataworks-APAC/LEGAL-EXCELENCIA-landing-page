// import { CheckCircle2 } from "lucide-react";
// import { pricingOptions } from "../constants";

import {
  Building2,
  Cctv,
  Contact2,
  Pickaxe,
  Scale,
  MailPlus,
} from "lucide-react";

const Services = () => {
  return (
    <div id="law-services" className="mt-10 pt-16">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Services
      </h2>
      <div className="flex flex-wrap">
        <div className="p-4 w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Pickaxe />
              Labour Law
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              We help negotiate acceptable compromise between employers and
              employees.
            </p>
          </div>
        </div>
        <div className="p-4 w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Scale />
              Litigation
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              Our lawyers are skilled litigators with proven mastery over every
              area of litigation.
            </p>
          </div>
        </div>
        <div className="p-4 w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <MailPlus />
              Corporate Law
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              We are a team of talented professionals with an impressive record
              of accomplishment.
            </p>
          </div>
        </div>
        <div className="p-4 w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Contact2 /> Family Law
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              We've handled annulments, divorces, and legal separations with a
              passion for more than 40 years.
            </p>
          </div>
        </div>
        <div className="p-4 w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Building2 />
              Business Law
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              We offer a specialized range of legal services to meet the diverse
              needs of our clients from small businesses to large multinational
              corporations.
            </p>
          </div>
        </div>
        <div className="p-4 w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Cctv />
              Criminal Law
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              Criminal case, procedure and subsequent trial are important
              components of our legal practice.
            </p>
          </div>
        </div>
      </div>

      <>
        <div className="relative h-auto">
          <div className="absolute inset-0 bg-blue-400 bg-opacity-50"></div>
          <div
            className={`bg-[url('/law.jpg')] bg-cover bg-center max-lg:bg-center h-full p-6`}
          >
            <div className="relative flex flex-col h-auto w-1/3 max-lg:w-full max-lg:h-full justify-start p-4 lg:mt-20 lg:ml-20 bg-white border-1 border-cyan-950 z-20 max-lg:justify-center max-md:h-full rounded-2xl">
              <div className="p-4 min-w-full flex flex-col gap-4 justify-between">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
                  Law firm of the 21st century
                </h2>
                <p className="mt-4 sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-500">
                  For over a decade, our firm has been helping clients with
                  their legal obligations and simplifying their operations. We
                  use the latest technologies so you don't have to worry about
                  how your matter is being handled. We understand that having a
                  reliable and trusted legal partner is critical to your success
                  in today's world. With our help, you can focus on building
                  your business, not managing it in court.
                </p>
                <a
                  href="#"
                  className="underline text-red-400 sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </>

      <></>
    </div>
  );
};

export default Services;
