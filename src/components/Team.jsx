import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id='team' className="relative flex flex-col md:flex-row items-center justify-center min-h-[50vh] bg-gray-100 px-12 py-10">
      {/* Heading - Hidden on small screens */}
      <div className="md:w-[35%] text-left md:text-left mb-2 md:mb-0">
        <h1 className="hidden md:block text-4xl sm:text-5xl font-bold">Our Team</h1>
        {/* Mission Statement - Visible on all screens but moves to bottom center on mobile */}
        <p className="text-gray-700 text-lg mt-4 max-w-md text-center md:text-left ">
          Our Mission is clear. We are building to train over 10 Crores Career Aspirants.
        </p>
      </div>

      {/* Team Images and Center Circle */}
      <div className="relative flex items-center justify-center w-[420px] h-[420px] lg:w-[480px] lg:h-[480px]">
        {/* Empty Circle with Text - Visible only on mobile screens */}
        <div className="md:hidden absolute flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 border-4 border-gray-100 rounded-full">
          <p className="text-center text-gray-700 font-bold text-lg">Our Team</p>
        </div>

        {teamMembers.map((member, index) => (
          <TeamImage
            key={index}
            image={member.image}
            name={member.name}
            designation={member.designation}
            position={index}
            total={teamMembers.length}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Mission Statement - Moves to bottom center on mobile screens */}

    </div>
  );
};

const teamMembers = [
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742551056/Roy_Anderson_Marketing_Director_kebylj.jpg", name: "Roy Anderson", designation: "Marketing Director" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742551056/Bri_Fox_Sr._Graphic_Designer_tcwqb0.jpg", name: "Bri Fox", designation: "Sr. Graphic Designer" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742551056/ed2b1ac6-58f0-4059-821c-e0546b3ca7a0_hlk833.jpg", name: "Cathey Watkins", designation: "Product Manager" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742551057/Dionte_Johnson_Sr._Web_Developer_myenup.jpg", name: "Dionte Johnson", designation: "Sr. Web Developer" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742551056/Kyle_Evans_SEO_Specialist_fbpion.jpg", name: "Kyle Evans", designation: "SEO Specialist" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742551057/Alicia_Silvers_Sr._Account_Manager_xfddiw.jpg", name: "Alicia Silvers", designation: "Sr. Account Manager" },
];

const TeamImage = ({ image, name, designation, position, total, isMobile }) => {
  const radius = isMobile ? 100 : 140; // Adjust radius for mobile
  const angle = (position / total) * (2 * Math.PI);
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return (
    <div
      className="absolute flex flex-col items-center group"
      style={{
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        left: "50%",
        top: "50%",
      }}
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-white shadow-lg group-hover:brightness-50 transition duration-300 transition-transform duration-300 group-hover:scale-110"
      />
      {/* Hover Bubble */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-max px-4 py-2 bg-black text-white text-sm rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-50">
        <p className="font-semibold">{name}</p>
        <p className="text-xs">{designation}</p>
      </div>
    </div>
  );
};

export default Team;
