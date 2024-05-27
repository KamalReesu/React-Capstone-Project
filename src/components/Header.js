import DishesImage from '../Images/dishes.jpg'; // with import
import footerImage from '../Images/footerImage.png'; // with import
import { Link } from "react-router-dom";

import  '..//App.css';
import Switch from './Switch';
import { useTheme } from './ThemeContext';

import { useState  } from 'react';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const {theme} = useTheme();
    return (
    <>
    <div className="App" style={{ backgroundColor: theme === "light" ? "white" : "black" , color: theme === "light" ? "white" : "black" }} >
    <header href="#">
      <img id='header' src={footerImage} alt="head"  />
      {/* <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div> */}
      <nav >
        <ul>
          <Link to="/home" className={'nav-item '+ (theme === 'light' ? 'black-text': 'white-text')}>HOME </Link>
          <Link to="/about" className={'nav-item '+ (theme === 'light' ? 'black-text': 'white-text')}>ABOUT </Link>
          <Link to="/cuisines" className={'nav-item '+ (theme === 'light' ? 'black-text': 'white-text')}>MENU</Link>
          <Link to="/booking" className={'nav-item '+ (theme === 'light' ? 'black-text': 'white-text')}>RESERVATIONS</Link>
          <Link to="/cuisines" className={'nav-item '+ (theme === 'light' ? 'black-text': 'white-text')}>ORDER ONLINE</Link>
          <Link  className={'nav-item '+ (theme === 'light' ? 'black-text': 'white-text')}>LOGIN</Link>
        </ul>
        </nav>
      <Switch/>
    </header>
    </div>
    <br/>
    <br/>
      <div id="carousel">
      <div id="about">
      <h1 style={{ color: '#f4ce14'}}>Little Lemon</h1>
          <p style={{width :80+'%'}}>
          <b>Chicago</b>
          <br/>
          <br/>
          We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
          <br/>
          <button id="reserve">Reserve a Table</button>
      </div>
      <div>
          <img className="menu" src={DishesImage} alt='dish' width={500}  />
      </div>
  </div>
  </>
    )
};

export default Header;