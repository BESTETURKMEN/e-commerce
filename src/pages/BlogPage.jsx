import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Blogs from "../components/Blogs/Blogs";

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="blogPage">
        <Blogs />
      </div>

      <Footer />
    </>
  );
}
