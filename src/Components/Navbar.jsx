// Navbar.js
import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <ul className="flex justify-around items-center p-5">
        <li><a className="text-white hover:text-gray-400" href="index.html"><Link to="/">Home</Link></a></li>
        <li><a className="text-white hover:text-gray-400" href="about.html"><Link to="/About">About</Link></a></li>
        <li><a className="text-white hover:text-gray-400" href="contact.html"><Link to="/Contact">Contact</Link></a></li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default Navbar;