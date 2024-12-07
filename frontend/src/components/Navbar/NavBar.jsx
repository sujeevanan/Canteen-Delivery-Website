import React, { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar_menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="search" className="search" />
        <div>
          <img src={assets.bag_icon} alt="bag" className="bag" />
          <div className="dot"></div>
        </div>
        <button className="signIn_button">Sighn In</button>
      </div>
    </div>
  );
};

export default NavBar;
