import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      {/* Navigation */}
      <img
        width="130"
        src="https://www.learncontentwriting.com/wp-content/uploads/2018/11/create-blog-blogspot.jpg"
        className="nav-logo"
        alt="logo"
      />
      <ul>
        <div className="nav-icon">
          <a href="#">Blogging Tools</a>
        </div>
        <div className="nav-icon">
          <a href="#">Google</a>
        </div>
        <div className="nav-icon">
          <a href="#">Internet Marketing</a>
        </div>
        <div className="nav-icon">
          <a href="#">Our Services</a>
        </div>
        <div className="nav-icon">
          <button href="#">Contact Us</button>
        </div>
      </ul>
    </nav>
  );
};
export default Nav;
