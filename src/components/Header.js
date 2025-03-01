// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="SafePlate Logo" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-allergies">Allergy Info</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/tips-quiz">Tips & Quiz</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
