import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Home from "../src/components/Home";
import AppDevelopment from "../src/services/AppDevelopment";
import WebDevelopment from "../src/services/WebDevelopment";
import Seo from "../src/services/Seo";
import Campaign from "../src/services/Campaign";



import Hireus from "../src/services/Hireus";

const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/seo-optimization" element={<Seo />} />
        <Route path="/campagin-creation" element={<Campaign />} />
        <Route path="/hireus" element={<Hireus />} />

      </Routes>
    </div>
  );
};

export default Routings;
