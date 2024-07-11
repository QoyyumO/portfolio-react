import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="h-20 bg-gray-800 flex items-center justify-center w-full">
      <nav className="flex justify-between items-center w-11/12 fixed z-50">
        <div className="flex items-center">
          <img src="assets/carepy_logo-1.svg" alt="logo" className="h-10 w-10 filter invert" />
          <span className="text-white font-bold ml-2 text-lg">PORTFOLIO</span>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/home" className="text-blue-500 hover:underline">Home</Link></li>
          <li><Link to="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
        </ul>
        <div className="search bg-gray-700 flex items-center rounded-lg p-1 w-48">
          <input type="search" placeholder="search" className="bg-transparent border-none text-white w-full outline-none" />
          <i className="ri-search-line text-gray-400"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;