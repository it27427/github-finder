import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './BrandLogo';

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'btn btn-ghost btn-sm rounded-btn btn-active'
      : 'btn btn-ghost btn-sm rounded-btn';

  return (
    <nav className='flex items-center px-2 mx-2 w-full'>
      <Logo />

      <div className='flex-1 px-2 mx-2'>
        <ul className='flex justify-end gap-2'>
          <li>
            <NavLink to='/' className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={linkClass}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
