import React, { useEffect, useRef } from "react";
import Logo from "./assets/logo.png";
import { RiMenu3Line } from "react-icons/ri";

export function Navbar() {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleNavbar = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle("hidden");
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      navbarRef.current.classList.add("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="hidden fixed z-[99999] bg-white top-0 left-0 w-full lg:flex justify-between items-center px-16 py-3">
        <div className="overflow-hidden w-[200px] h-auto">
          <img className="object-cover w-full h-full" src={Logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center gap-8">
          <a href="#" className="relative py-2 px-4">
            About Us
          </a>
          <a href="#" className="relative py-2 px-4">
            Why Us
          </a>
          <a href="#" className="relative py-2 px-4">
            FAQ
          </a>
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="border-gray-400 border py-3 px-4 rounded-md cursor-pointer">
            Search for hub
          </div>
          <div className="bg-blue-700 text-slate-300 px-5 py-3 rounded-md cursor-pointer">
            Web App
          </div>
        </div>
      </nav>
      <div className="fixed z-[99999] bg-white top-0 left-0 w-full lg:hidden">
        <div className="relative justify-between items-center px-2 sm:px-8 py-3 flex">
          <div className="overflow-hidden w-[200px] h-auto">
            <img className="object-cover w-full h-full" src={Logo} alt="logo" />
          </div>
          <div
            className="hidden absolute top-[100%] bg-white left-0 right-0 px-2 sm:px-8 py-3 transition-navbar"
            ref={navbarRef}
          >
            <div className="flex flex-col">
              <a href="#" className="relative py-2 px-4">
                About Us
              </a>
              <a href="#" className="relative py-2 px-4">
                Why Us
              </a>
              <a href="#" className="relative py-2 px-4">
                FAQ
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border-gray-400 border py-3 px-4 rounded-md cursor-pointer">
                Search for hub
              </div>
              <div className="bg-blue-700 text-slate-300 px-5 py-3 rounded-md cursor-pointer">
                Web App
              </div>
            </div>
          </div>
          <button
            className="lg:hidden py-2"
            ref={buttonRef}
            onClick={toggleNavbar}
          >
            <RiMenu3Line className="text-lg" />
          </button>
        </div>
      </div>
    </>
  );
}
