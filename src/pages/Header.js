import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">CodeAnt</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
