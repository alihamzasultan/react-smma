import React, { useState, useEffect } from "react";

// Import videos
import backgroundVideo from "../img/video/hero.mp4"; // High-quality background video

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
  });

  const [formOffset, setFormOffset] = useState(0); // Tracks the form's vertical offset
  const [showForm, setShowForm] = useState(false); // State to control form visibility on mobile

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here
  };

  // Add scroll-based form movement (only for desktop)
  useEffect(() => {
    const formElement = document.querySelector(".scrollable-form");
    const heroSection = document.querySelector(".hero-section");

    const handleScroll = () => {
      if (formElement && heroSection) {
        // Check if the screen width is greater than 1024px (desktop)
        if (window.innerWidth > 1024) {
          const scrollY = window.scrollY; // Current scroll position
          const maxOffset = 200; // Maximum offset for the form (adjust as needed)

          // Calculate the form's offset based on scroll position
          const newOffset = Math.min(scrollY, maxOffset);

          // Update the form's position
          setFormOffset(newOffset);
          formElement.style.transform = `translateY(${newOffset}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle form visibility on mobile
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center hero-section">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src={backgroundVideo}
        ></video>
        {/* Overlay to improve text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#264653] bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-20">
        {/* Left Side - Headline and CTA */}
        <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 mt-10">
            Social Media: Pioneering the Future of Digital Marketing.
          </h1>
          <p className="text-lg lg:text-xl text-[#E9C469] mb-8 max-w-2xl mx-auto lg:mx-0">
            We're at the forefront of innovation, driving results with cutting-edge
            strategies and the latest technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">

            {/* Show this button only on mobile screens */}
            <button
              onClick={toggleFormVisibility}
              className="lg:hidden bg-[#2A9D8F] text-white py-3 px-6 rounded-lg hover:bg-[#264653] transition-all duration-300"
            >
              {showForm ? "Hide Form" : "Book Your free Consultation!"}
            </button>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        {/* Hide form on mobile by default, show only when button is clicked */}
        <div
          className={`scrollable-form bg-white p-6 sm:p-8 rounded-lg shadow-2xl w-full lg:w-1/3 ${
            showForm ? "block" : "hidden lg:block"
          } ${window.innerWidth <= 1024 ? "mt-0" : "lg:mt-0"}`} // No margin on mobile
          style={{ transform: `translateY(${formOffset}px)` }}
        >
          <h2 className="text-2xl font-bold text-[#264653] mb-6">
            Let's Pioneer Together.
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#2A9D8F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E9C469]"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-[#2A9D8F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E9C469]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#2A9D8F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E9C469]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-[#2A9D8F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E9C469]"
              required
            />
            <textarea
              name="project"
              placeholder="Tell us about your project"
              value={formData.project}
              onChange={handleChange}
              className="w-full p-3 border border-[#2A9D8F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E9C469]"
              rows="3"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#2A9D8F] text-white py-3 rounded-lg hover:bg-[#264653] transition-all duration-300"
            >
              Submit
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-[#264653]">
              Phone: <a href="tel:502-888-5992" className="text-[#2A9D8F]">502-888-5992</a>
            </p>
            <p className="text-[#264653]">
              Email: <a href="mailto:info@domain" className="text-[#2A9D8F]">info@domain</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
