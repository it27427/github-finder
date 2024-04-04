import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

const BrandLogo = ({ title }) => {
  return (
    <Link to='/' className='flex items-center gap-2'>
      <FaGithub className='text-3xl text-white' />
      <span className='text-lg font-bold align-middle text-white'>{title}</span>
    </Link>
  );
};

BrandLogo.defaultProps = {
  title: 'Github Finder',
};

BrandLogo.propTypes = {
  title: PropTypes.string,
};

export default BrandLogo;
