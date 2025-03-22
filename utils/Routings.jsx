import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Home from "../src/components/Home";


import Blog from "../src/components/BlogSection";
import BlogDetails from "../src/components/BlogDetails";

const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />



      </Routes>
    </div>
  );
};

export default Routings;
