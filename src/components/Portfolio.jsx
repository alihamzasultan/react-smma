import React, { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";



const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);



  return (
    <div >
     
    </div>
  );
};

export default Portfolio;
