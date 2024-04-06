import PropTypes from 'prop-types';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
      <div className='card-body'>
        <h3 className='font-semibold text-lg mb-2'>
          <a href={html_url}>
            <FaLink className='inline mr-1' />
            {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>

        <div>
          <span class='inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10'>
            <FaEye className='mr-2' /> {watchers_count}
          </span>
          <span class='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10'>
            <FaStar className='mr-2' /> {stargazers_count}
          </span>
          <span class='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10'>
            <FaInfo className='mr-2' /> {open_issues}
          </span>
          <span class='inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-700/10'>
            <FaUtensils className='mr-2' /> {forks}
          </span>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
