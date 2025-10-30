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
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="highlights-section" smooth={true} duration={500}>
            Menu
          </ScrollLink>
        </li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li>
          <ScrollLink to="highlights-section" smooth={true} duration={500}>
            Order Online
          </ScrollLink>
        </li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
