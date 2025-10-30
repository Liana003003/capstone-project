import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <img src="Logo.svg" alt="Little Lemon Logo" />
      <Nav/>
    </header>
  );
}

export default Header;