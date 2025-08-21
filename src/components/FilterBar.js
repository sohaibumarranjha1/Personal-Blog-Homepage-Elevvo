import React from "react";

function FilterBar({ setCategory, setSearch }) {
  const categories = ["All", "Tech", "Travel", "Food"];

  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default FilterBar;
