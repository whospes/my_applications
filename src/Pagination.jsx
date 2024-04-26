import React, { useEffect, useRef } from "react";

function Pagination({ applecationPerPage, totalApplications, paginate }) {
  const pageNumbers = [];
  const firstPageRef = useRef(null);

  useEffect(() => {
    if (firstPageRef.current) {
      firstPageRef.current.focus();
    }
  }, [totalApplications]);

  for (let i = 1; i <= Math.ceil(totalApplications / applecationPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li key={number} className="page-item">
            <button
              ref={index === 0 ? firstPageRef : null}
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
