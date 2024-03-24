// Navbar.js (No changes needed)
import React from "react";
import "../Styles/Navbar.css";
import image from './logoimg.png'


function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img  className="logo" src={image} alt=""/>
      </div>
      <div className="nav-contents">
        <ul className="nav-ul">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#achievement">Achievement</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
