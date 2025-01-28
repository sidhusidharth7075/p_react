import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderMenuItem = (name, href) => (
    <li>
      <AnchorLink className='anchor-link' offset={50} href={href}>
        <p onClick={() => setMenu(name)}>{name}</p>
      </AnchorLink>
      {menu === name && <img src={underline} alt="Selected" />}
    </li>
  );

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <img
        src={menu_open}
        onClick={() => setIsMenuOpen(true)}
        alt="Open Menu"
        className='nav-mob-open'
        aria-label="Open navigation menu"
      />
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <img
          src={menu_close}
          onClick={() => setIsMenuOpen(false)}
          alt="Close Menu"
          className="nav-mob-close"
          aria-label="Close navigation menu"
        />
        {renderMenuItem("home", "#home")}
        {renderMenuItem("about", "#about")}
        {renderMenuItem("services", "#services")}
        {renderMenuItem("work", "#work")}
        {renderMenuItem("contact", "#contact")}
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;
