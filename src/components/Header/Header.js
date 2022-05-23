import React from 'react';
import logo from '../../ftq-logo-transparent.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img
        className="logo"
        src={logo}
        alt="Frequently Thought Questions logo"
      />
      <h1>Ask Your Frequently THOUGHT Questions</h1>
    </header>
  );
};

export default Header;
