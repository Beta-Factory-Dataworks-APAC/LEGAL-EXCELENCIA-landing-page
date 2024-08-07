import React from "react";

const ClientPage = () => {
  return (
    <div className="my-12">
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
        <div className="flex flex-col justify-center gap-6 max-lg:w-auto w-1/2">
          <h1 className="text-blue-400">Clients come first</h1>
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl">
              However complex your case might be, we will help you.
            </h1>
            <div className="flex flex-col gap-4">
              <p className=" text-slate-500 text-2xl">
                At LEGAL EXCELENCIA, your success is our success. We handle a
                wide range of legal issues with dedication and expertise,
                including:
              </p>
              <p className=" text-slate-500 text-2xl">
                <strong>Intellectual Property</strong>: Protecting your
                innovations and brand identity
              </p>
              <p className=" text-slate-500 text-2xl">
                <strong>Corporate Law</strong>: Guiding your business through
                growth.
              </p>
              <p className=" text-slate-500 text-2xl">
                <strong>Litigation</strong>: Representing your interests with
                determination.
              </p>
              <p className=" text-slate-500 text-2xl">
                <strong>Alternative Dispute Resolution</strong>: Finding
                efficient, cost-effective solutions.
              </p>
              <p className=" text-slate-500 text-2xl">
                <strong>Real Estate</strong>: Securing your property interests.
              </p>
              <p className=" text-slate-500 text-2xl">
                We ensure complete client satisfaction with personalized
                attention and strategic advice. Our commitment to excellence and
                client-centric approach sets us apart. Let's discuss how we can
                help you achieve your legal and business goals.
              </p>
            </div>
            <button className="w-36 p-2 rounded-md bg-red-500 text-red-100 hover:bg-red-300 transition duration-300 ease-in-out cursor-pointer">
              Let's talk
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col ml-5 justify-center gap-4 lg:w-1/2 p-4 border-2 rounded-3xl bg-blue-50 border-neutral-900 lg:mb-5 mb-4 lg:h-1/2">
          <div className="flex justify-center gap-2 h-auto items-center border-b border-neutral-600">
            <div className="hidden lg:flex justify-center items-center rounded-full h-12 w-12 lg:w-1-4 border-2 border-slate-700 ">
              1
            </div>
            <div className="flex justify-start items-center p-2  lg:w-3/4">
              Our team handles any kind of case (Bankruptcy, Litigation, Real
              Estate, Construction, Alternative Dispute Resolution, Corporate
              and Intellectual Property). And we have a network of partners for
              other areas of the law.
            </div>
          </div>
          <div className="flex justify-center gap-2 h-auto items-center border-b border-neutral-600">
            <div className="hidden lg:flex justify-center items-center rounded-full border-2 h-12 w-12 lg:w-1-4 border-blue-400">
              2
            </div>
            <div className="flex justify-start items-center p-2 lg:w-3/4">
              With our experience, we're able to tackle a variety of complex
              legal issues and help our clients resolve their legal problems as
              quickly as possible
            </div>
          </div>
          <div className="flex justify-center gap-2 h-auto items-center">
            <div className="hidden lg:flex justify-center items-center rounded-full border-2 h-12 w-12 lg:w-1-4 border-red-400">
              3
            </div>
            <div className="flex justify-start items-center p-2 lg:w-3/4">
              When you want the best for your case, we will be there for you at
              every step.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center lg:h-80 h-auto gap-4 bg-blue-900 text-white mt-5 rounded-tl-3xl rounded-br-3xl p-4">
        <div className="font-semibold h-auto text-6xl">
          We are here to help you - let's talk today!
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-xl w-full">
            Facing a complex legal challenge? Need expert guidance on Indian
            law? LEGAL EXCELENCIA is here to help. Contact us, and our
            experienced lawyers will develop a tailored strategy for your unique
            situation. Whether you're an individual or a corporation, we provide
            top-quality legal support. Let's discuss how we can achieve your
            goals together. Contact us now to resolve your legal matters with
            confidence.
          </div>
          <button className="p-2 rounded-md bg-red-500 text-red-100 hover:bg-red-300 transition duration-300 ease-in-out cursor-pointer w-1/3 md:w-1/5 max-sm:text-sm">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
