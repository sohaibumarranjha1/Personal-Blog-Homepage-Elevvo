import React, { useState } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import BlogList from "./components/BlogList";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import "./App.css";

import post1 from "./assets/post1.jpg";
import post2 from "./assets/post2.jpg";
import post3 from "./assets/post3.jpg";
import post4 from "./assets/post4.jpg";
import post5 from "./assets/post5.jpg";
import post6 from "./assets/post6.jpg";

const blogData = [
  {
    id: 1,
    title: "Mastering React Hooks",
    category: "Tech",
    image: post1,
    description: "A deep dive into React Hooks and how to use them effectively in your projects.",
    date: "2025-08-01",
  },
  {
    id: 2,
    title: "Exploring Japan",
    category: "Travel",
    image: post2,
    description: "My journey through Japan, from bustling Tokyo to serene Kyoto.",
    date: "2025-07-25",
  },
  {
    id: 3,
    title: "Top 10 Italian Recipes",
    category: "Food",
    image: post3,
    description: "A collection of mouth-watering Italian dishes you can make at home.",
    date: "2025-07-20",
  },
  {
    id: 4,
    title: "JavaScript Best Practices",
    category: "Tech",
    image: post4,
    description: "Write cleaner, more maintainable JavaScript with these tips.",
    date: "2025-07-15",
  },
  {
    id: 5,
    title: "Hiking in the Alps",
    category: "Travel",
    image: post5,
    description: "An unforgettable hiking experience in the Swiss Alps.",
    date: "2025-07-10",
  },
  {
    id: 6,
    title: "Vegan Desserts",
    category: "Food",
    image: post6,
    description: "Delicious plant-based desserts that everyone will love.",
    date: "2025-07-05",
  },
];

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const filteredPosts = blogData.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <Header />
      <FilterBar setCategory={setCategory} setSearch={setSearch} />
      <BlogList posts={currentPosts} />
      <Pagination
        totalPosts={filteredPosts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
}

export default App;
