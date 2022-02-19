import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> The Epic Reader App</h1>
      <div className="links-1">
        <a href="/">Home</a>
        <div className="links-2">
        <a href="/About">About</a>
        <div className="links-3">
        <a href="/Testimonials">Testimonials </a>
      </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
