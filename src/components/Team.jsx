import React, { useEffect } from "react";
import team1 from "../img/1.webp";
import team2 from "../img/2.webp";
import team3 from "../img/3.webp";
import team4 from "../img/4.webp";
import team5 from "../img/5.webp";
import team6 from "../img/6.webp";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// custom styles
import "./Team.css";
import TeamImage from "./TeamImage";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="text-[#7A6960] py-20">
      {/* Section Heading */}
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Team
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-[#2A9D8F] h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Our Mission is clear. We are building to train over 10 Crores Career
        Aspirants
      </p>

      {/* Team Members Grid */}
      <div className="flex flex-col xs:flex-row gap-6 p-5 lg:p-0 items-center">
        {/* Roy Anderson - Marketing Director */}
        <TeamImage
          image={team1}
          name={"Roy Anderson"}
          role={"Marketing Director"}
          dataAos="fade-up"
        />
        {/* Bri Fox - Sr Graphic Designer */}
        <TeamImage
          image={team2}
          name={"Bri Fox"}
          role={"Sr Graphic Designer"}
          dataAos="fade-up"
          dataAosDelay="100"
        />
        {/* Cathey Watkins - Customer Success Manager */}
        <TeamImage
          image={team3}
          name={"Cathey Watkins"}
          role={"Customer Success Manager"}
          dataAos="fade-up"
          dataAosDelay="200"
        />
        {/* Dionte Johnson - Sr Web Developer */}
        <TeamImage
          image={team4}
          name={"Dionte Johnson"}
          role={"Sr Web Developer"}
          dataAos="fade-up"
          dataAosDelay="300"
        />
        {/* Kyle Evans - SEO Specialist */}
        <TeamImage
          image={team5}
          name={"Kyle Evans"}
          role={"SEO Specialist"}
          dataAos="fade-up"
          dataAosDelay="400"
        />
        {/* Alicia Silvers - Sr Account Manager */}
        <TeamImage
          image={team6}
          name={"Alicia Silvers"}
          role={"Sr Account Manager"}
          dataAos="fade-up"
          dataAosDelay="500"
        />
      </div>
    </div>
  );
};

export default Team;
