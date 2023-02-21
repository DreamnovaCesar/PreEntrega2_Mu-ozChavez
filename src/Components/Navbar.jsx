// Navbar.js
import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <ul className="flex justify-between items-center p-5">
        <li><a className="text-white hover:text-gray-400" href="index.html">Home</a></li>
        <li><a className="text-white hover:text-gray-400" href="about.html">About</a></li>
        <li><a className="text-white hover:text-gray-400" href="contact.html">Contact</a></li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default Navbar;