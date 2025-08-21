import React from "react";

function Pagination({ totalPosts, postsPerPage, currentPage, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          style={{
            backgroundColor: num === currentPage ? "black" : "#f5d142",
            color: num === currentPage ? "#f5d142" : "black",
          }}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
