import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <div className="navbar-links">
        <Link to="/">Головна</Link>
        <Link to="/about">Про нас</Link>
        <Link to="/contact">Контакти</Link>
      </div>
    </nav>
  );
}

export default Navbar;
