import { Mail, Phone, PinIcon } from "lucide-react";
import React from "react";

const Info = () => {
  return (
    <div id="info" className="pt-16">
      <div className="mt-16 p-4 mx-auto flex max-md:flex-col flex-row md:gap-10 lg:gap-48 justify-center max-md:items-center gap-14 text-slate-600">
        <div className="w-48 flex flex-col justify-start gap-5 items-center p-2">
          <div className="border-2 p-4 h-auto w-auto rounded-full">
            <PinIcon />
          </div>
          House No. 12-B GH 39 Mansa devi complex, Sector 5 Panchkula
        </div>
        <div className="w-48 flex flex-col justify-start gap-5 items-center p-2">
          <div className="border-2 p-4 h-auto w-auto rounded-full">
            <Mail />
          </div>
          legalexcelencia@gmail.com
        </div>
        <div className="w-48 flex flex-col justify-start gap-5 items-center p-2">
          <div className="border-2 p-4 h-auto w-auto rounded-full">
            <Phone />
          </div>
          (+91) 9501009993
        </div>
      </div>
      <span className="text-blue-400 flex mx-auto justify-center p-4">
        Reach out to us today to schedule a consultation and discover how LEGAL
        EXCELENCIA can provide the legal support you need to succeed.
      </span>
      <div className="mt-10 p-4 flex flex-wrap max-md:flex-col justify-center items-center gap-8 text-slate-500 text-sm mx-auto ">
        <div className="flex flex-col md:w-1/5 w-full justify-start">
          <h2 className="font-semibold">CHANDIGARH office</h2>
          <p>3065, BLOOD DONORS APARTMENTS, SECTOR 50 -D CHANDIGARH-160047</p>
        </div>
        <div className="flex flex-col md:w-1/5 w-full justify-start">
          <h2 className="font-semibold">MUMBAI office</h2>
          <p>
            306, Vardhman Chambers, 17-G, Cawasji Patel Street, Fort,
            Mumbai-400001
          </p>
        </div>
        <div className="flex flex-col md:w-1/5 w-full justify-start">
          <h2 className="font-semibold">DELHI office</h2>
          <p>
            52, BASEMENT, BLOCK -D, PANCHSHEEL ENCLAVE, DELHI, 110017 #E-57
            BASEMENT, GREATER KAILASH -2, DELHI -110017
          </p>
        </div>
        <div className="flex flex-col md:w-1/5 w-full justify-start">
          <h2 className="font-semibold">PANCHKULA office</h2>
          <p>
            SCF-5, SECTOR-2, PANCHKULA HARYANA 134109 # 12-B, GH-39, M.D.C
            SECTOR -5 PANCHKULA, HARYANA 134112
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
