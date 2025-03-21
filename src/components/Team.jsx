import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div id='team' className="relative flex flex-col md:flex-row items-center justify-center min-h-[50vh] bg-gray-100 px-12 py-10">
      <div className="md:w-[35%] text-left md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl sm:text-5xl font-bold">Team</h1>
        <p className="text-gray-700 text-lg mt-4 max-w-md">
          Our Mission is clear. We are building to train over 10 Crores Career Aspirants.
        </p>
      </div>

      <div className="relative hidden md:flex w-[420px] h-[420px] lg:w-[480px] lg:h-[480px]">
        {teamMembers.map((member, index) => (
          <TeamImage
            key={index}
            image={member.image}
            name={member.name}
            designation={member.designation}
            position={index}
            total={teamMembers.length}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:hidden mt-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-white shadow-lg group-hover:brightness-50 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-full">
              <p className="text-white text-sm font-semibold">{member.name}</p>
              <p className="text-white text-xs">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
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

const TeamImage = ({ image, name, designation, position, total }) => {
  const radius = 140;
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
        className="w-28 h-28 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-white shadow-lg group-hover:brightness-50 transition duration-300 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-full">
        <p className="text-white text-sm font-semibold">{name}</p>
        <p className="text-white text-xs">{designation}</p>
      </div>
    </div>
  );
};

export default Team;
