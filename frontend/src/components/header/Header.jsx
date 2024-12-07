import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Order Your Favourite Food Here</h1>
        <p>
          Explore a wide variety of cuisines, order your favorite dishes, and
          enjoy fast, reliable delivery to your doorstep. Satisfy your hunger
          with just a few taps!"
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
