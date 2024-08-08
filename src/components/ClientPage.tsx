import React from "react";

const ClientPage = () => {
  return (
    <div className="my-12">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <span className="text-xs text-blue-400 font-semibold">
                Clients come first.
              </span>
              <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
                However complex your case might be, we will help you.
              </h2>

              <p className="max-w-lg mb-2 text-xl text-gray-500">
                At LEGAL EXCELENCIA, your success is our success. We handle a
                wide range of legal issues, including intellectual property,
                corporate law, litigation, alternative dispute resolution, and
                real estate, with dedication and expertise. Our personalized
                attention, strategic advice, and client-centric approach ensure
                complete satisfaction. Let's discuss how we can help you achieve
                your legal and business goals.
              </p>

              <a
                className="inline-block mt-5 px-8 py-4 text-sm text-white font-medium leading-normal bg-red-500 hover:bg-red-300 rounded transition duration-200"
                href="#"
              >
                Let's talk
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-gray-50 rounded-xl px-10">
                <div className="py-8 border-b">
                  <div className="flex items-start">
                    <span className="mr-6 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-blue-400 text-white">
                      1
                    </span>
                    <p className="text-gray-500">
                      Our team values each client and goes the extra mile to
                      ensure complete satisfaction
                    </p>
                  </div>
                </div>
                <div className="py-8 border-b">
                  <div className="flex items-start">
                    <span className="mr-6 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-orange-400 text-white">
                      2
                    </span>
                    <p className="text-gray-500">
                      With our experience, we're able to tackle a variety of
                      complex legal issues and help our clients resolve their
                      legal problems as quickly as possible
                    </p>
                  </div>
                </div>
                <div className="py-8">
                  <div className="flex items-start">
                    <span className="mr-6 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-red-400 text-white">
                      3
                    </span>
                    <p className="text-gray-500">
                      When you want the best for your case, we will be there for
                      you at every step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
