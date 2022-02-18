import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> The Epic Reader App</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Testimonials">Testimonials </a>
      </div>
      
    </nav>
  );
};

export default Navbar;
