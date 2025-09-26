import React, { useState } from "react";

const blogPosts = [
  {
    title: "First Blog Post",
    image: "/blog1.jpg",
  },
  {
    title: "Second Blog Post",
    image: "/blog2.jpg",
  },
  
  // Add more posts as needed
];

const POSTS_PER_PAGE = 4;

function Blog() {
  const [page, setPage] = useState(0);

  const start = page * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const visiblePosts = blogPosts.slice(start, end);

  const canPrev = page > 0;
  const canNext = end < blogPosts.length;

  return (
    <div className="blog-carousel">
      <button onClick={() => setPage(page - 1)} disabled={!canPrev} className="carousel-btn">
        &#8592;
      </button>
      <div className="carousel-track">
        {visiblePosts.map((post, idx) => (
          <div className="carousel-item" key={idx}>
            <img src={post.image} alt={post.title} className="carousel-img" />
            <div className="carousel-title">{post.title}</div>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)} disabled={!canNext} className="carousel-btn">
        &#8594;
      </button>
    </div>
  );
}

export default Blog;