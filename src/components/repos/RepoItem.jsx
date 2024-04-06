import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div>
      <h1>Repo Item</h1>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
