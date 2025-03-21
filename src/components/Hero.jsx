import React, { useState, useEffect } from "react";
import placeholderImage from "../img/video/hero.jpg"; // Placeholder image
import backgroundVideo from "../img/video/hero.mp4"; // High-quality background video

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(null); // Initially null (lazy loading)

  useEffect(() => {
    const videoElement = document.getElementById("hero-video");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc(backgroundVideo); // Load video when visible
          observer.disconnect(); // Stop observing
        }
      },
      { threshold: 0.5 } // Trigger when 50% is visible
    );

    if (videoElement) observer.observe(videoElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center hero-section">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={videoSrc} // Video loads lazily
          poster={placeholderImage} // Placeholder image before video loads
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
            We're at the forefront of innovation, driving results with cutting-edge strategies and the latest technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
