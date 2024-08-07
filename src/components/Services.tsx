// import { CheckCircle2 } from "lucide-react";
// import { pricingOptions } from "../constants";

import {
  Building2,
  Cctv,
  Contact2,
  Scale,
  MailPlus,
  ReceiptIndianRupee,
  Swords,
  Microscope,
} from "lucide-react";

const Services = () => {
  return (
    <div id="law-services" className="mt-10 pt-16">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Services
      </h2>
      <div className="flex flex-wrap max-md:flex-col">
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <ReceiptIndianRupee />
              Trademarks
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              Our trademark experts safeguard your brand globally. We'll guide
              you through India's Madrid Protocol benefits, handling everything
              from registration to disputes. With coverage at all five Indian
              Trademark Offices, we've got your brand protection covered coast
              to coast.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Scale />
              Litigation
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              Our skilled litigators handle a wide range of cases including
              civil, criminal, competition, environmental, consumer, family,
              tax, and labor disputes. We have a proven track record of success
              in courts across India.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <MailPlus />
              Corporate Law
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              We provide expert advice on M&As, joint ventures, restructuring,
              and compliance. Our team helps businesses navigate complex legal
              landscapes with ease.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Contact2 /> Copyrights
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              Our copyright wizards serve diverse industries, from tech to
              entertainment. We'll handle everything from registrations to
              disputes, with expert teams for arts, media, and e-commerce. Let
              us navigate the complex world of copyright, so you can focus on
              creating.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Building2 />
              Real Estate
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              From contract drafting to land title due diligence, we offer
              comprehensive real estate legal services.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Cctv />
              Industrial Designs
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              We protect your designs, from gadgets to jewelry. Our team handles
              everything - prosecution, enforcement, and advice. If someone
              copies your registered design, we'll fight for you in court. Your
              creative work deserves strong protection.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-4xl font-bold flex gap-2 items-center">
              <Microscope />
              Patents
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              From idea to protection, we're your patent partners. We'll help
              you secure rights for your inventions, guiding you through the
              maze of patent law. For 20 years, we'll safeguard your innovation,
              letting you focus on what you do best - inventing the future.
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2 lg:w-1/3">
          <div className="p-4">
            <h2 className="text-3xl font-bold flex gap-2 items-center">
              <Swords />
              Alternative Dispute Resolution
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              We offer top-tier arbitration and mediation services, with a team
              of experienced legal professionals adept at finding efficient,
              cost-effective solutions to disputes.
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
                  For over a decade, LEGAL EXCELENCIA has been at the forefront
                  of legal innovation, helping clients navigate their legal
                  obligations and simplify operations in an increasingly complex
                  world. We leverage the latest technologies to ensure efficient
                  handling of your matters, allowing you to focus on what
                  matters most - your business growth. Our forward-thinking
                  approach combines traditional legal expertise with modern
                  solutions, making us the ideal partner for businesses of all
                  sizes in the 21st century. We understand that having a
                  reliable and trusted legal partner is critical to your success
                  in today's fast-paced world. With our help, you can
                  confidently face legal challenges and seize new opportunities.
                  Learn more about how we can propel your business forward.
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
    </div>
  );
};

export default Services;
