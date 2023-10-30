import React from "react";
import BlogHero from "../components/blog/BlogHero";
import useBearStore from "../store/store";
import BlogList from "../components/blog/BlogList";

const Blog = () => {
  const { falseNav } = useBearStore();

  return (
    <div onClick={falseNav} className="">
      <BlogHero />
      <BlogList />
    </div>
  );
};

export default Blog;
