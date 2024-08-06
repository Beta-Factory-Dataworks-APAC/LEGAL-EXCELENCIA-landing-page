import React from "react";

const ClientPage = () => {
  return (
    <div className="my-12">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col justify-center gap-6 max-lg:w-auto w-auto">
          <h1 className="text-blue-400">Clients come first</h1>
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl">
              However complex your case might be, we will help you.
            </h1>
            <p className="text-slate-500 text-2xl">
              Our team handles any kind of case (Bankruptcy, Litigation, Labor
              Law, Construction, Criminal Law, Family Law, Corporate and
              Business Law). And we have a network of partners for other areas
              of the law.
            </p>
            <button className="w-1/4 p-2 rounded-md bg-red-500 text-red-100 hover:bg-red-300 transition duration-300 ease-in-out cursor-pointer">
              Let's talk
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 justify-start gap-4 lg:w-3/4 p-4 border-2 rounded-3xl bg-blue-50 border-neutral-900 lg:mb-5 mb-4">
          <div className="flex justify-start gap-2 h-auto items-center">
            <div className="hidden lg:flex justify-center items-center rounded-full h-12 w-12 lg:w-1-4 border-2 border-slate-700">
              1
            </div>
            <div className="flex justify-start items-center p-2 border-b border-neutral-600 lg:w-3/4">
              Our team handles any kind of case (Bankruptcy, Litigation, Labor
              Law, Construction, Criminal Law, Family Law, Corporate and
              Business Law). And we have a network of partners for other areas
              of the law.
            </div>
          </div>
          <div className="flex justify-start gap-2 h-auto items-center">
            <div className="hidden lg:flex justify-center items-center rounded-full border-2 h-12 w-12 lg:w-1-4 border-blue-400">
              2
            </div>
            <div className="flex justify-start items-center p-2 border-b border-neutral-600 lg:w-3/4">
              With our experience, we're able to tackle a variety of complex
              legal issues and help our clients resolve their legal problems as
              quickly as possible
            </div>
          </div>
          <div className="flex justify-start gap-2 h-auto items-center">
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
        <div className="flex flex-col lg:flex-row gap-2 justify-start">
          <div className="text-xl w-3/5">
            Drop us a line, and we'll get in touch. 'll see if we're a match and
            how we can help each other.
          </div>
          <button className="p-2 rounded-md bg-red-500 text-red-100 hover:bg-red-300 transition duration-300 ease-in-out cursor-pointer w-1/5">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
