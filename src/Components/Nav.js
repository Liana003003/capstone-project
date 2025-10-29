import { Link } from "react-router-dom";
import React from "react";
import { Link as ScrollLink } from "react-scroll";


function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" className="nav-item">HOME</Link></li>
          <li><ScrollLink to="about-section" className="nav-item" smooth={true} duration={500}>ABOUT</ScrollLink></li>
          <li><ScrollLink to="menu-section" className="nav-item" smooth={true} duration={500}>MENU</ScrollLink></li>
          <li><Link to="/reservations" className="nav-item">RESERVATIONS</Link></li>
          <li><ScrollLink to="menu-section" className="nav-item" smooth={true} duration={500}>ORDER ONLINE</ScrollLink></li>
          <li><Link to="/login" className="nav-item" >LOGIN</Link></li>
        </ul>
      </nav>
      </>
  );
}

export default Nav;