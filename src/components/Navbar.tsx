"use client";
import { Contact, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import Image from "next/image";
// import Button from "./ui/Button";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white border-b-2 border-slate-300">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image
              className="h-10 w-10 mr-2"
              src={logo as unknown as string}
              alt="Logo"
            />
            <span className="text-xl tracking-tight">LEGAL EXCELENCIA</span>
          </div>
          <div className="flex justify-between items-center">
            <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
              {navItems.map((item, index) => (
                <li key={index} className="hover:text-slate-400">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center ml-8 p-2 rounded-md bg-red-200 text-red-500 hover:bg-red-300 transition duration-500 ease-in-out cursor-pointer">
              Contact us
            </div>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="sticky top-0 right-0 z-50 bg-blue-100 border-1 w-full p-6 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 hover:text-slate-400">
                  <a onClick={toggleNavbar} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
