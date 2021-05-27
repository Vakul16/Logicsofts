import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      {/* Navigation */}
      <ul>
        <img
          width="130"
          // src="https://www.learncontentwriting.com/wp-content/uploads/2018/11/create-blog-blogspot.jpg"
          src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-logo.png"
          className="nav-logo"
          alt="logo"
        />
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
          <a href="#">Advertise With Us</a>
        </div>
        <div className="nav-icon-button">
          <div className="nav-icon1">
            <button href="#">Request a Free quote</button>
          </div>
          <div className="nav-icon2">
            <button href="#">Contact Us</button>
          </div>
        </div>
      </ul>
    </nav>
  );
};
export default Nav;
