import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 700 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className="logo" />
        <ul className={mobileMenu ? '' : 'hide-mobile-'}>
          <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
          <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
          <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
          <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to="contact" smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
          <li><button className="btn" onClick={toggleLoginForm}>Login</button></li>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
      </nav>

      {showLogin && (
        <div className="login-modal">
          <div className="login-form">
            <h2>Login</h2>
            <form className='head'>
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" />
              
              <button type="submit">Submit</button>
              <button type="button" onClick={toggleLoginForm}>Close</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
