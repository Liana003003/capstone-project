import { Link } from "react-router-dom";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  return (
    <nav>
      <ul>
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
    </nav>
  );
}

export default Nav;
