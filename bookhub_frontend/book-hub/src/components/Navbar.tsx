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
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/signup" className="nav-item">Sign Up</Link>
          <Link to="/create" className="nav-item">Create Books</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
