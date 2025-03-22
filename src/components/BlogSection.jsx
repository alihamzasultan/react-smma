import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabase = createClient(
  "https://ixoxqeiwzirhexchegim.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4b3hxZWl3emlyaGV4Y2hlZ2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2MjUxNTIsImV4cCI6MjA1ODIwMTE1Mn0.YmLLhJadoM2xyn7RklFYGdbSXk9-GJNwj3kv90dl1Fk"
);

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subheadings, setSubheadings] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: postsData, error: postsError } = await supabase.from("blog_posts").select("*");
      if (postsError) console.error("Error fetching posts:", postsError);
      else setBlogPosts(postsData);

      const { data: subheadingsData, error: subheadingsError } = await supabase.from("blog_subheadings").select("*");
      if (subheadingsError) console.error("Error fetching subheadings:", subheadingsError);
      else setSubheadings(subheadingsData);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading posts...</p>;
  }

  return (
    <div className="py-20 bg-white">
      <h1 className="text-3xl font-bold text-center text-[#264653]">Blog</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-[#2A9D8F] h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Stay updated with the latest insights and trends.
      </p>

      {/* Fetching Subheadings and Paragraphs from Supabase */}
      {subheadings.map((item) => (
        <div key={item.id} className="text-center mt-10 px-6">
          <h2 className="text-2xl font-semibold text-[#264653]">{item.title}</h2>
          <p className="text-gray-700 mt-4">{item.content}</p>
        </div>
      ))}

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 mt-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-100 p-5 rounded-lg shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold text-[#264653] mt-4">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
            <Link
              to={`/blog/${post.id}`}
              state={{ post }}
              className="mt-4 inline-block text-[#2A9D8F] font-bold"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;