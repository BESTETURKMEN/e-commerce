import React from "react";
import BlogsItem from "./BlogsItem";
import "./Blogs.scss";
export default function Blogs() {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>From Our Blog</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="blog-list">
          <BlogsItem />
        </ul>
      </div>
    </section>
  );
}
