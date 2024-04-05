import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
  return (
    <div>
      <h3>User Item</h3>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
