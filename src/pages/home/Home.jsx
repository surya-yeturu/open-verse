import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Comment from "../../components/comment/Comment";
import BlogPostCard from "../../components/bogPostCard/BlogPostCard";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <BlogPostCard/>
     
    </Layout>
  );
};

export default Home;
