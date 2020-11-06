import React from "react";
import { Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar
        style={{
          border: "2px solid gray",
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          zIndex: "1",
          background: "white",
        }}
      >
        <h4>HackerNews Live</h4>
      </Navbar>
    </div>
  );
}
