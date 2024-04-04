import Logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const BrandLogo = () => {
  return (
    <Link to='/' className='flex items-center gap-2'>
      <img src={Logo} alt='Brand-Logo' width={40} height={40} />
      <span>Github Finder</span>
    </Link>
  );
};

export default BrandLogo;
