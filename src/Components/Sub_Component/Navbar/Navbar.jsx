import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Close sidebar if screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { to: '/', name: 'Home' },
    { to: '/about', name: 'About' },
    { to: '/events', name: 'Events' },
    { to: '/leadership', name: 'Leadership' },
    { to: '/membership', name: 'Membership' },
    { to: '/contact', name: 'Contact' },
  ];

  return (
    <header>
      <nav>
        <h1 className="nav_h1">ADO-ODO-OTA HOTELIERS ASSOCIATION</h1>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Menu size={30} className="menu" onClick={handleMenu} />
      </nav>

      {showMenu && (
  <div className={`over-lay ${showMenu ? 'active' : ''}`} onClick={handleMenu}>
    <div className="sideBar" onClick={(e) => e.stopPropagation()}>
      <X size={24} className="cancel-icon" onClick={handleMenu} />
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.to} className="link" onClick={handleMenu}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
      )}

    </header>
  );
};

export default Navbar;