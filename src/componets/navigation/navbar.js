import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="desc-logo">
        <img
          src="../../style/images/my-hero-academia-poster-ajpg-6d9b63"
          alt="logo"
        />
      </div>
      <div className="nav-links">
        <h3>Home</h3>
        <h3>Home</h3>
        <h3>Home</h3>
        <h3>Home</h3>
      </div>
      <div className="right-side">
        <h1>Jacob Mason</h1>
      </div>
    </div>
  );
}
