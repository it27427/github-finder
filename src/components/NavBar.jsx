import { NavLink } from 'react-router-dom';
import Logo from './BrandLogo';

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'btn btn-ghost btn-sm rounded-btn btn-active text-white'
      : 'btn btn-ghost btn-sm rounded-btn text-white';

  return (
    <nav className='flex items-center px-2 mx-2 w-full'>
      <Logo />

      <div className='flex-1'>
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
