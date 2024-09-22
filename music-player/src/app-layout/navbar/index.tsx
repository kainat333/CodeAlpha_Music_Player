import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='bg-transparent h-16 w-full fixed top-0 z-50' >
    <nav className="flex items-center bg-gray-800 text-white p-4">
      {/* Logo Section */}
      <div className="flex items-center">
        {/* Replace with your logo image */}
        <img
          src="/pictures/logo1.png" // Replace with your logo URL or local path
          alt="Logo"
          className="w-10 h-10"
        />
        <span className="text-xl font-semibold text-white ml-2">My Music App</span>
      </div>

      {/* Navigation Links */}
      <div className="ml-auto flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-gray-300'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/all-songs"
          className={({ isActive }) =>
            isActive ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-gray-300'
          }
        >
          All Songs
        </NavLink>
        <NavLink
          to="/albums"
          className={({ isActive }) =>
            isActive ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-gray-300'
          }
        >
          Albums
        </NavLink>
      </div>
    </nav></div>
  );
};

export default Navbar