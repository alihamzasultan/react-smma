import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhone } from "react-icons/fa"; // Import the phone icon
import logoDesktop from "../img/SMMA.png"; // Replace with the actual path to your desktop logo image
import logoMobile from "../img/SocialMediaLogo.png"; // Replace with the actual path to your mobile logo image

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Adjust the breakpoint as needed

  const clickHandler = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg fixed top-0 left-0 bg-white z-50">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img
          src={isMobile ? logoMobile : logoDesktop} // Use mobile logo for mobile screens
          alt="Brand Logo"
          className="h-8 lg:h-10" // Adjust height as needed
        />
      </a>

      {/* Desktop: Phone number with icon */}
      <div className="lg:flex items-center justify-between hidden">
        <div className="lg:flex items-center justify-between lg:gap-10 hidden">
          <a
            href="/"
            className="text-gray-800 hover:text-[#EE7540] text-md tracking-wide font-light"
          >
            Home
          </a>
          <a
            href="/#about"
            className="text-gray-800 hover:text-[#EE7540] text-md tracking-wide font-light"
          >
            About
          </a>
          <a
            href="/#team"
            className="text-gray-800 hover:text-[#EE7540] text-md tracking-wide font-light"
          >
            Team
          </a>
          <a
            href="/#services"
            className="text-gray-800 hover:text-[#EE7540] text-md tracking-wide font-light"
          >
            Services
          </a>
          <a
            href="tel:502-888-5992" // Updated phone number
            className="flex items-center gap-2 text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            <FaPhone />
            <span>502-888-5992</span> {/* Updated phone number */}
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
      </div>

      {/* Mobile menu dropdown */}
      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-white transition-all duration-300">
          <a
            href="tel:502-888-5992" // Updated phone number
            className="flex items-center justify-center gap-2 text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            <FaPhone />
            <span>502-888-5992</span> {/* Updated phone number */}
          </a>
          <a
            href="/"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Home
          </a>
          <a
            href="/#team"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Team
          </a>
          <a
            href="/Marketing-Website/#about"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            About
          </a>
          <a
            href="/#services"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Services
          </a>


        </div>
      )}
    </div>
  );
};

export default NavBar;
