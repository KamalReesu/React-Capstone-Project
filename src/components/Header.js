import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useTheme } from './ThemeContext';
import logo from '../Images/logo.png';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`App ${theme}`} >
        <header>
        <img id='header' src={logo} alt="head" />
        <div className="menu-icon" onClick={toggleMenu}>
          {/* Conditional rendering of bars based on isMenuOpen state */}
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        </div>
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <ul className={`nav-links ${isMenuOpen ? "visible" : ""}`}>
            <Link to="/home" className='nav-item' onClick={ toggleMenu}>HOME</Link>
            <Link to="/about" className='nav-item' onClick={ toggleMenu}>ABOUT</Link>
            <Link to="/cuisines" className='nav-item' onClick={ toggleMenu}>MENU</Link>
            <Link to="/booking" className='nav-item' onClick={ toggleMenu}>RESERVATIONS</Link>
            <Link to="/cuisines" className='nav-item' onClick={ toggleMenu}>ORDER ONLINE</Link>
            <Link to="#" className='nav-item' onClick={ toggleMenu}>LOGIN</Link>
          </ul>
        </nav>
        {/* <Switch /> */}
        </header>
      </div>
    </>
  );
};

export default Header;
