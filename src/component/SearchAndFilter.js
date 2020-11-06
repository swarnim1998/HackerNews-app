import React from "react";

export default function SearchAndFilter(props) {
  return (
    <div style={{ marginTop: "80px" }}>
      <div className="d-flex justify-content-center align-items-center">
        <form className="form-inline">
          <input
            className="form-control "
            type="search"
            placeholder="Search with title"
            aria-label="Search"
            style={{ width: "500px" }}
            onChange={(e) => props.search(e.target.value)}
          />

          <select
            className="custom-select"
            // onChange={(e) => getData(e.target.value)}
          >
            <option value="top">Top</option>
            <option value="ask">Ask</option>
            <option value="show">Show</option>
            <option value="job">Job</option>
          </select>
        </form>
      </div>
    </div>
  );
}
