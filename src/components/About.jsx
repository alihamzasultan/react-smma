import React, { useEffect } from "react";
import CtaButton from "./CtaButton";
import { BsPeople, BsLightbulb, BsRocket } from "react-icons/bs";
import aboutImage from "../img/about.jpg"; // Import the image

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="relative lg:mx-32 py-20 bg-white">
      {/* Section Heading */}
      <div className="text-center">
        <h1

          className="text-4xl font-bold text-[#264653] mb-4"
        >
          Pioneers in Digital Since 2009
        </h1>
        <div className="flex justify-center items-center mb-10">
          <div className="bg-[#2A9D8F] h-1 w-16 rounded"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center lg:gap-20 px-6 lg:px-0">
        {/* Left Column (Image or Visual) */}
        <div
       
          className="lg:w-1/2 w-full mb-10 lg:mb-0"
        >
          <img
            src={aboutImage} // Use the imported image
            alt="About Us"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        {/* Right Column (Text Content) */}
        <div className="lg:w-1/2 w-full">
          {/* Main Paragraph */}
          <p
          
            className="text-lg text-[#264653] mb-8 leading-relaxed"
          >
            Since 2009, <strong>Social Media</strong> has been at the forefront of digital marketing, not just adapting to the future, but actively shaping it. We saw the potential for deeper brand-audience connections early on, and embraced a pioneer spirit to explore uncharted digital territories. Partnering with diverse brands, we've witnessed and driven the transformative power of digital marketing.
          </p>

          {/* Key Points */}
          <div className="space-y-8">
            {/* Point 1 */}
            <div
            
              className="flex items-start gap-6"
            >
              <div className="bg-[#2A9D8F] p-4 rounded-full text-white">
                <BsLightbulb size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#264653]">
                  Commitment to Innovation
                </h2>
                <p className="text-[#2A9D8F]">
                  We don't just follow trends; we anticipate and create them. Our team of digital visionaries is passionate about staying ahead, constantly exploring new technologies and strategies.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div
            
              className="flex items-start gap-6"
            >
              <div className="bg-[#E9C469] p-4 rounded-full text-white">
                <BsRocket size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#264653]">
                  Culture of Continuous Learning
                </h2>
                <p className="text-[#2A9D8F]">
                  We foster a culture of continuous learning, ensuring we deliver cutting-edge solutions that drive results.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div
          
              className="flex items-start gap-6"
            >
              <div className="bg-[#E86F51] p-4 rounded-full text-white">
                <BsPeople size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#264653]">
                  Your Partners in Growth
                </h2>
                <p className="text-[#2A9D8F]">
                  At <strong>Social Media</strong>, we believe the future is built on innovation and expertise. We're your partners in navigating the evolving digital landscape, achieving extraordinary growth together.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
