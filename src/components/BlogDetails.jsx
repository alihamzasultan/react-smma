import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import NavBar2 from "./NavBar2";
import Footer from "./Footer";

// Initialize Supabase
const supabase = createClient(
  "https://ixoxqeiwzirhexchegim.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4b3hxZWl3emlyaGV4Y2hlZ2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2MjUxNTIsImV4cCI6MjA1ODIwMTE1Mn0.YmLLhJadoM2xyn7RklFYGdbSXk9-GJNwj3kv90dl1Fk"
);

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
        setError(error.message);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <h1 className="text-center mt-20">Loading post...</h1>;
  }

  if (error || !post) {
    return <h1 className="text-center mt-20 text-red-500">Blog not found!</h1>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar at the Top */}
      <NavBar2 />
      <section id="about" className="w-full max-h-fit py-10  overflow-hidden bg-gray-100">
      {/* Blog Content (Responsive padding) */}
      <div className="flex-grow pt-24 pb-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Blog Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[250px] md:h-[400px] object-cover rounded-lg shadow-lg"
          />

          {/* Blog Content Container */}
          <div className="bg-white p-6 md:p-10 mt-6 md:mt-10 shadow-lg rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{post.title}</h1>
            {post.author && post.date && (
              <p className="text-gray-500 text-sm md:text-lg mt-2">
                By <span className="font-medium">{post.author}</span> • {post.date}
              </p>
            )}

            <hr className="my-6 border-gray-300" />

            {/* Main Blog Content */}
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">{post.content}</p>

            {/* Subheading 1 & Paragraph */}
            {post.subheading1 && post.paragraph1 && (
              <div className="mt-6 md:mt-10">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-800">{post.subheading1}</h2>
                <p className="text-gray-700 text-base md:text-lg mt-3 leading-relaxed">{post.paragraph1}</p>
              </div>
            )}

            {/* Subheading 2 & Paragraph */}
            {post.subheading2 && post.paragraph2 && (
              <div className="mt-6 md:mt-10">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-800">{post.subheading2}</h2>
                <p className="text-gray-700 text-base md:text-lg mt-3 leading-relaxed">{post.paragraph2}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogDetails;
