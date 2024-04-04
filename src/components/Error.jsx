import { Link } from 'react-router-dom';
import NotFound from '@/assets/images/not-found.svg';
import { FaArrowLeft } from 'react-icons/fa';

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-4 pb-12'>
      <figure>
        <img
          src={NotFound}
          alt='not-found-thumbnail'
          width={320}
          height={320}
        />
      </figure>

      <Link to='/' className='btn btn-neutral'>
        <FaArrowLeft />
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
