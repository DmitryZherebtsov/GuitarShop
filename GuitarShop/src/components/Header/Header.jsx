import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { nav_assets } from '../../assets/assets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div>
        <Link to='/'> <img className='nav_logo' src={nav_assets.logo} alt="Logo" /> </Link>
      </div>

      <div className='nav_block'>
        <ul className='navigation'>
          <li><Link to='/'>Main Page</Link></li> |
          <li><Link to='/Find_Artists'>Find Artists</Link></li> |
          <li><Link to='/Guitars'>Guitars</Link></li> |
          <li><Link to='/AboutUs'>About Us</Link></li>
        </ul>
      </div>

      <div>
        <Link to='/Cart'>
          <p className='nav_cart'>Cart <img className="nav_cart_img" src={nav_assets.cart} alt="Cart" /></p>
        </Link>
      </div>

      <div className="nav_burger" onClick={toggleMenu}>
        <img src={nav_assets.burger} className="nav_burger_img" alt="Burger Menu" />
      </div>

      {isMenuOpen && (
        <div className='nav_burger_menu'>
          <ul className='navigation'>
            <li><Link to='/'>Main Page</Link></li>
            <li><Link to='/Find_Artists'>Find Artists</Link></li>
            <li><Link to='/Guitars'>Guitars</Link></li>
            <li><Link to='/AboutUs'>About Us</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
