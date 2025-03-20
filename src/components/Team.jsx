import React, { useEffect } from "react";
// AOS Animation Library
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[50vh] bg-gray-100 px-12 py-10">
      {/* Left Side: Heading & Paragraph */}
      <div className="md:w-[35%] text-left md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl sm:text-5xl font-bold">Team</h1>
        <p className="text-gray-700 text-lg mt-4 max-w-md">
          Our Mission is clear. We are building to train over 10 Crores Career Aspirants.
        </p>
      </div>

      {/* Right Side: Circular Layout for Large Screens */}
      <div className="relative hidden md:flex w-[420px] h-[420px] lg:w-[480px] lg:h-[480px]">
        {teamMembers.map((member, index) => (
          <TeamImage
            key={index}
            image={member.image}
            name={member.name}
            position={index}
            total={teamMembers.length}
          />
        ))}
      </div>

      {/* Responsive Row Layout for Small Screens */}
      <div className="flex flex-wrap justify-center gap-6 md:hidden mt-5">
        {teamMembers.map((member, index) => (
          <img
            key={index}
            src={member.image}
            alt={member.name}
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-white shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

// Team Members Data with Cloudinary URLs
const teamMembers = [
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742480726/1_sbjsv2.webp", name: "Roy Anderson" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742480715/2_aehrke.webp", name: "Bri Fox" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/t_face only/v1742483489/ed2b1ac6-58f0-4059-821c-e0546b3ca7a0_jpi8la.png", name: "Cathey Watkins" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742480721/4_a02f5j.webp", name: "Dionte Johnson" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742480718/5_oj7jbe.webp", name: "Kyle Evans" },
  { image: "https://res.cloudinary.com/dg7joeqah/image/upload/v1742480723/6_ebj7kv.webp", name: "Alicia Silvers" },
];

// TeamImage Component (Circular Placement for Larger Screens)
const TeamImage = ({ image, name, position, total }) => {
  const radius = 140; // Adjust distance from center
  const angle = (position / total) * (2 * Math.PI);
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        left: "50%",
        top: "50%",
      }}
    >
      {/* Circular Image */}
      <img
        src={image}
        alt={name}
        className="w-28 h-28 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-white shadow-lg"
      />
    </div>
  );
};

export default Team;
