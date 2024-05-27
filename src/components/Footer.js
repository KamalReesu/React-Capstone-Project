import  '..//App.css';
import headerImage from '..//Images/headerImage.png'; // with import
import footerImage from '..//Images/footerImage.png'; // with import
import { useTheme } from './ThemeContext';

const Footer = () => {

    const {theme} =useTheme();
    return (
        <div className="footer" style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
            <div className="one">
                <img src={headerImage} alt="logo" />
            </div>
            <div className="two" style={{color:theme === 'light' ? 'black':'white'}}>
                <ul >
                    <h5><b>Navigation</b></h5>
                    <li><a className={'a '+ (theme === 'light' ? 'black-text': 'white-text')}  href="/">Home</a></li>
                    <li><a  className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="/about">About</a></li>
                    <li><a  className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="/menu">Menu</a></li>
                    <li><a  className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="/reservations">Reservations</a></li>
                    <li><a  className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="/order">Order Online</a></li>
                    <li><a  className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="/login">Login</a></li>
                </ul>
            </div>
            <div className="three" style={{color:theme === 'light' ? 'black':'white'}}>
                <ul>
                    <h5><b>Contact</b></h5>
                    <li><a id="nav"  className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="#">Phone Number</a></li>
                    <li><a id="nav" className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="#">Email</a></li>
                    <li><a id="nav"  className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="#">Address</a></li>
                </ul>
            </div>
            <div className="four" style={{color:theme === 'light' ? 'black':'white'}}>
                <ul>
                    <h5><b>Social Media</b></h5>
                    <li><a id="nav"  className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="#">Instagram</a></li>
                    <li><a id="nav"  className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="#">LinkedIn</a></li>
                    <li><a id="nav" className={'a '+ (theme === 'light' ? 'black-text': 'white-text')} href="#">Pinterest</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;