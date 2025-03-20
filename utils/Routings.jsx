import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Home from "../src/components/Home";





const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
};

export default Routings;
