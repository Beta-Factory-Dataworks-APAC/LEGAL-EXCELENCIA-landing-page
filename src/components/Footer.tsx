import { navItems } from "../constants";
import logo from "../assets/logo.png";
import Image from "next/image";
import { LucideLinkedin } from "lucide-react";
import fb from "@/assets/icons/facebook.svg";
import twitter from "@/assets/icons/x.svg";
import insta from "@/assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="mt-20 py-10">
      <div className="flex flex-wrap gap-10 justify-between border-b-2 border-slate-300 pb-10">
        <div className="flex items-center flex-shrink-0">
          <Image
            className="h-10 w-10 mr-2"
            src={logo as unknown as string}
            alt="Logo"
          />
          <span className="text-lg tracking-tight">LEGAL EXCELENCIA</span>
        </div>

        <div className="flex flex-row flex-wrap justify-evenly items-center">
          <ul className="flex mx-auto max-md:space-x-5 space-x-12 text-md gap-0">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-slate-400">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="mt-10 py-4 mx-auto w-full flex flex-col gap-6 lg:flex-row-reverse justify-between"> */}
      <div className="hidden">
        <ul className="lg:mr-0 flex flex-row mx-auto gap-8">
          <li>
            {/* add own link */}
            <a href="https://facebook.com" target="_blank">
              <Image className="h-6 w-6" src={fb} alt="facebook" />
            </a>
          </li>
          <li>
            {/* add own link */}
            <a href="https://x.com" target="_blank">
              <Image className="h-6 w-6" src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            {/* add own link */}
            <a href="https://instagram.com" target="_blank">
              <Image className="h-6 w-6" src={insta} alt="instagram" />
            </a>
          </li>
          <li>
            {/* add own link */}
            <a href="https://linkedin.com" target="_blank">
              <LucideLinkedin />
            </a>
          </li>
        </ul>
        <p className="max-md:mx-auto">
          All rights reserved &copy; Legal Excelencia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
