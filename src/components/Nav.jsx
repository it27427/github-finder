import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './BrandLogo';

const Nav = () => {
  return (
    <nav className='flex items-center justify-between'>
      <Logo />

      <ul className='flex gap-4'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
