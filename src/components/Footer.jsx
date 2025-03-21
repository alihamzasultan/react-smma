import React, { useEffect } from "react";
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../img/SMMA.png"; // Update with the correct path

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-gray-800 text-white py-10 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          {/* <p className="text-sm font-light">680 Murphy Ave SW</p>
          <p className="text-sm font-light">Suite 1085</p> */}
          <p className="text-sm font-light">info@domain</p>
          <p className="mt-2 text-sm font-medium">502-888-5992</p>
        </div>

        {/* Logo */}
        <div className="my-4">
          <img src={Logo} alt="Logo" className="h-10 mx-auto" />
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-all">
            <IoLogoFacebook size={22} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all">
            <IoLogoTwitter size={22} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all">
            <IoLogoInstagram size={22} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-all">
            <IoLogoLinkedin size={22} />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Social Media. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
