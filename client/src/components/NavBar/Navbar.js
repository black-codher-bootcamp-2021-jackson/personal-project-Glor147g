import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> The Epic Reader App</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Login">Login </a>
      </div>
      <h2> About </h2>
    </nav>
  );
};

export default Navbar;
