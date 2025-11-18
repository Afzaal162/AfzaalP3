import React, { useState } from "react";
import "./Blog.css";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  // Blog Data Updated with Image URLs
  const blogs = [
    {
      id: 1,
      title: "10 Healthy Food Recipes You Must Try",
      desc: "Discover delicious and nutritious recipes that boost your energy and improve your overall health. Whether you're looking for quick meals, refreshing drinks, or wholesome dishes packed with natural goodness, our recipes help you eat better and feel better every day.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop",
      date: "Jan 12, 2025",
    },
    {
      id: 2,
      title: "Why Organic Food is the Future",
      desc: "Eating organic food can improve your health and protect the environment. Learn why organic is becoming the top choice for health-conscious people worldwide.",
      img: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?w=900&auto=format&fit=crop",
      date: "Jan 10, 2025",
    },
    {
      id: 3,
      title: "Top 5 Juices for Daily Detox",
      desc: "Boost your energy and cleanse your body with these top 5 detox juices. Easy to make and full of natural goodness.",
      img: "https://images.unsplash.com/photo-1507915135761-41a0a222c709?w=400&auto=format&fit=crop",
      date: "Jan 05, 2025",
    },
  ];

  // Recent Blogs Updated with URLs
  const recentBlogs = [
    {
      id: 1,
      title: "Best Summer Drinks",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Benefits of Green Tea",
      img: "https://images.unsplash.com/photo-1507915135761-41a0a222c709?w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "5-Min Breakfast Ideas",
      img: "https://images.unsplash.com/photo-1507915135761-41a0a222c709?w=400&auto=format&fit=crop",
    },
  ];

  const categories = ["Healthy Food", "Organic", "Juices", "Snacks", "Drinks"];

  // Filtering based on search
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-page">

      {/* HERO SECTION */}
    <div
  className="blog-hero"
  style={{
    width: "100%",
    height: "50vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeInHero 1s ease-in-out",
    backgroundImage: `url('https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=1600&auto=format&fit=crop')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
        <div className="blog-hero-overlay"></div>
        <h1 className="blog-hero-title">Our Blogs</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="blog-container">

        {/* LEFT: BLOG CARDS */}
        <div className="blogs-section">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <img src={blog.img} alt={blog.title} className="blog-img" />
                <div className="blog-content">
                  <p className="blog-meta">📅 {blog.date} | 👤 Admin</p>
                  <h2>{blog.title}</h2>
                  <p>{blog.desc}</p>
                  <button className="read-btn">Read More</button>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs found.</p>
          )}
        </div>

        {/* RIGHT: SIDEBAR */}
        <div className="sidebar">

          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search blog..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button>Search</button>
          </div>

          {/* Recent Posts */}
          <h3>Recent Blog Posts</h3>
          {recentBlogs.map(item => (
            <div key={item.id} className="recent-item">
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}

          {/* Categories */}
          <h3 className="category-title">Categories</h3>
          <div className="category-list">
            {categories.map((cat, idx) => (
              <p key={idx} className="category-item">• {cat}</p>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
