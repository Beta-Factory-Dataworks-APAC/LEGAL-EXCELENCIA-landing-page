"use client";
import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { redirect } from "next/navigation";

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = React.useState(true);

  // React.useEffect(() => {
  //   if (hasCookie("disclaimer")) {
  //     setShowDisclaimer(false);
  //   } else {
  //     setShowDisclaimer(true);
  //   }
  // }, []);

  const handleAccept = () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); // Set expiration to 30 days from now
    setCookie("disclaimer", "true", {
      expires: expirationDate,
    });
    setShowDisclaimer(false); // Hide disclaimer after accepting
  };
  if (!showDisclaimer) return null;

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-[5000] flex items-center justify-center py-10">
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-10 mx-5 lg:mx-40 max-sm:h-auto max-sm:gap-2 max-sm:w-vw overflow-auto">
        <p className="custom-font font-semibold flex justify-center text-2xl text-[#1f3864]">
          Disclaimer
        </p>
        <div className="text-dark text-base mx-auto px-10 flex flex-col gap-5">
          <p className="flex flex-wrap text-sm lg:text-lg mx-auto">
            As far the rules of the Bar Council of India, we are not permitted
            to solicit work or advertise in any manner LEGAL EXCELENCIA takes no
            liability for consequences of any action taken by you relying on the
            matter/information/content mention in the brochure. The information
            provided herein should not be interpreted as legal advice for which
            the user must make independent inquiries. Whilst every effort has
            been taken to ensure the accuracy of the content of the brochure,
            LEGAL EXCELENCIA disclaims all liability arising from reliance
            placed by the user or any other third party on the information
            contained therein
          </p>
          <div className="flex flex-col lg:flex-row gap-2 mx-auto">
            <button
              className="bg-blue-400 py-2 px-10 rounded text-white hover:bg-blue-600 transition duration-300"
              onClick={handleAccept}
            >
              I Accept
            </button>
            <button
              className="bg-slate-500 py-2 text-white px-10 rounded hover:bg-red-400 transition duration-300"
              onClick={() => redirect("https://www.google.com")}
            >
              I Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  function redirect(url: string) {
    window.location.href = url;
  }
};

export default Disclaimer;
