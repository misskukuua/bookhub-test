// Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyBookHub
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/books" className="nav-item">Books</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
