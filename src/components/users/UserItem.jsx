import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card shadow-md compact side bg-gray-800'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <figure className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Profile-Image' />
            </figure>
          </div>
        </div>
        <div>
          <h2 className='card-title text-white'>{login}</h2>
          <Link
            to={`/user/${login}`}
            className='text-base-content text-opacity-60'
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
