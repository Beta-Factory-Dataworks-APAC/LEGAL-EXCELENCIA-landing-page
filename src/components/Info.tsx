import { Mail, Phone, PinIcon } from "lucide-react";
import React from "react";

const Info = () => {
  return (
    <div className="mt-32 p-4 mx-auto flex max-md:flex-col flex-row md:gap-10 lg:gap-48 justify-center max-md:items-center gap-14 text-slate-600">
      <div className="w-48 flex flex-col justify-start gap-5 items-center p-2">
        <div className="border-2 p-4 h-auto w-auto rounded-full">
          <PinIcon />
        </div>
        House No. 12-B GH 39 Mansa devi complex, Sector 5 Panchkula,Chandigarh
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
  );
};

export default Info;
