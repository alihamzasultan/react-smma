import React from "react";

import Template from "./Template";
import NavBar from "../components/NavBar";

const Campaign = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Campaign Creation"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet necessitatibus laborum voluptatem at provident atque labore porro ipsam debitis quam, ad dolorem, corrupti aut praesentium minima sit deserunt maiores fuga?"
        }
        image={image}
      />
    </div>
  );
};

export default Campaign;
