import React from 'react';
import './Header.css';

const Header = ({ black }) => {
  return (
    <header className={black ? 'active' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
            alt="Netflix User"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
