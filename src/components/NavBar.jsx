import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './BrandLogo';

const NavBar = () => {
  return (
    <nav className='flex items-center px-2 mx-2 w-full'>
      <Logo />

      <div className='flex-1 px-2 mx-2'>
        <ul className='flex justify-end'>
          <li>
            <NavLink to='/' className={`btn btn-ghost btn-sm rounded-btn`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={`btn btn-ghost btn-sm rounded-btn`}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
