import React from "react";
import "./Layout.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">Logo</span>
        <ul>
          <li>Home</li>
          <li>Sale</li>
          <li>Products</li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li>Cart</li>
          <li>Sign In</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
