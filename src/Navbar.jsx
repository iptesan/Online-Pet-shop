import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="navLogo">
        <img
          src="https://www.shutterstock.com/image-vector/pet-care-logo-design-vector-260nw-2484974689.jpg"
          alt="logo"
          width={60}
          height={60}
        />
      </div>
      <div className="navMenu">
        <NavLink to={"/"} className="navLinks">
          Home
        </NavLink>
        <NavLink to={"/about-us"} className="navLinks">
          About Us
        </NavLink>
        <NavLink to={"/contact-us"} className="navLinks">
          Contact Us
        </NavLink>
        <NavLink to={"/Admin-Dashboard"} className="navLinks">
          Admin
        </NavLink>
      </div>
      <div className="profile">
        <p>UserName</p>
        
      </div>
    </div>
  );
}

export default Navbar;
