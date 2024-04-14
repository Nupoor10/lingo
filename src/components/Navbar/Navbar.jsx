import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import './Navbar.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const navigate = useNavigate
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    };

    const navlinks = [
        {name: 'Home', path: '/'},
        {name: 'Learn', path: '/learn'},
        {name: 'Objects', path: '/objects'},
        {name: 'Summarize', path: '/summary'},
        {name: 'Grammar', path: '/grammar'},
        {name: 'Concepts', path: '/concepts'},
        {name: 'Translate', path: '/translate'},
    ]
  
    return (
      <nav className="navbar__wrapper">
        <div className="navbar__container">
          <div className="logo__icon" onClick={() => {navigate("/")}}>🌍  Lingo</div>
          <div className='navbar__content'>
              <div className={`navbar__elements ${showNavbar && 'active'}`}>
              <ul>
                {navlinks.map((item, index) => {
                  return <li key={index}><NavLink to={item.path}>{item.name}</NavLink></li>
                })}
              </ul>
              </div>
              <div className="menu__icon" onClick={handleShowNavbar}>
                {showNavbar ? <ImCancelCircle /> : <GiHamburgerMenu />}
              </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar