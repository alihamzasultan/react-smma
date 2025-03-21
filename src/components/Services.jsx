import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Services data
  const services = [
    { name: "Social Media Marketing Strategy", icon: "insights" },
    { name: "Content & Creative Campaigns", icon: "theaters" },
    { name: "Social Videography", icon: "videocam" },
    { name: "Promoted & Paid Social Management", icon: "trending_up" },
    { name: "Social Channel Management & Analytics", icon: "layers" },
    { name: "Custom Social Dashboards", icon: "dashboard" },
    { name: "Community Management", icon: "people" },
    { name: "Influencer Strategy & Management", icon: "star" },
  ];

  return (
    <div className="py-20 bg-white">
      {/* Section Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#264653] mb-4">
          Cutting-Edge Digital Marketing Solutions
        </h1>
        <div className="flex justify-center items-center mb-10">
          <div className="bg-[#2A9D8F] h-1 w-16 rounded"></div>
        </div>
      </div>

      {/* Static Grid for Larger Screens */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-20 mt-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Icon */}
            <span className="material-icons text-[#2A9D8F] text-6xl mb-4">
              {service.icon}
            </span>
            {/* Service Name */}
            <h3 className="text-xl font-semibold text-[#264653]">
              {service.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Animated Marquee for Mobile Screens */}
      <div className="md:hidden">
        <Marquee pauseOnHover="true" className="flex items-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center mx-10">
              {/* Icon */}
              <span className="material-icons text-[#2A9D8F] text-5xl mb-2">
                {service.icon}
              </span>
              {/* Service Name */}
              <h3 className="text-lg font-semibold text-[#264653]">
                {service.name}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Services;
