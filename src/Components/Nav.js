import { Link } from "react-router-dom";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <nav className="navbar">
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li>
          <ScrollLink
            to="about-section"
            smooth={"easeInOutQuad"}
            duration={1000}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="highlights-section" smooth={true} duration={500} offset={100}>
            Menu
          </ScrollLink>
        </li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li>
          <ScrollLink to="highlights-section" smooth={true} duration={500} offset={100}>
            Order Online
          </ScrollLink>
        </li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
      </>
  );
}

export default Nav;
