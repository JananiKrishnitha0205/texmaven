// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/home"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    },
    {
      title: "Rent",
      path: "/jobs"
    },
    {
      title: "Products",
      path: "/admin/dashboard" // Updated path for "Products"
    },
    {
      title: "About Us",
      path: "/about-us" // New path for "About Us"
    },
    {
      title: "Contact Us",
      path: "/contact-us"
    }
  ];

  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      <div className="w-1/4 h-full font-bold flex justify-start items-center text-lg">TEXMAVEN</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink 
                to={links.path}
                className={({ isActive }) => 
                  `text-gray-700 hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
                }
              >
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
