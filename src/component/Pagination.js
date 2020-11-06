import React from "react";

export default function Pagination({ perPage, totalLength, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalLength / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%" }}
    >
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link" href>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
