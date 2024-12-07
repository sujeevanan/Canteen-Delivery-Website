import React from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar_menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="search" className="search" />
        <div>
          <img src={assets.bag_icon} alt="bag" className="bag" />
          <div className="dot"></div>
        </div>
        <button className="signIn_button">Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
