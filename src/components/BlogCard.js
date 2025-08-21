import React from "react";

function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <small>{post.date}</small>
      <p>{post.description}</p>
    </div>
  );
}

export default BlogCard;
