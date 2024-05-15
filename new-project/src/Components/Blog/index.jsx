import React from "react";
import styles from "./style.module.css";
import BlogSlider from "./BlogSlider";
import { BlogData } from "./BlogSlider/BlogData";


const Blog = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col col-md-12 p-0">
            <h2 className={`${styles.title} pb-5`}>Our blog</h2>
            <BlogSlider slider={BlogData} />
          </div>
        </div>
      </div>
  );
};

export default Blog;
