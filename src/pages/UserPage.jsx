import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaCode,
  FaStore,
  FaUserFriends,
  FaUsers,
  FaArrowLeft,
} from 'react-icons/fa';
import Spinner from '@/components/layouts/Spinner';
import RepoList from '@/components/repos/RepoList';

import GithubContext from '@/context/github/GithubContext';
import { getUserAndRepos } from '@/context/github/GithubActions';

const UserPage = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
    };

    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            <FaArrowLeft /> Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full relative'>
              <figure>
                <img src={avatar_url} alt='Profile-Picture' />
              </figure>
              <div className='absolute bottom-6 left-6 z-10'>
                <h2 className='card-title mb-0'>{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <div className='flex items-center'>
                <h1 className='text-2xl card-title text-white'>{name}</h1>

                <span className='ml-2 mr-1 mt-1.5 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-800 ring-1 ring-inset ring-green-600/20'>
                  {type}
                </span>

                {hireable && (
                  <span className='mx-1 mt-1.5 inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10'>
                    Hireable
                  </span>
                )}
              </div>
              <p className='text-slate-100'>{bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              {location && (
                <div className='stat'>
                  <h5 className='stat-title text-md'>Location</h5>
                  <p className='stat-value text-lg text-slate-300 font-medium'>
                    {location}
                  </p>
                </div>
              )}

              {blog && (
                <div className='stat'>
                  <h5 className='stat-title text-md'>Website</h5>
                  <a
                    href={`https://${blog}`}
                    target='_blank'
                    rel='noreferrer'
                    className='text-slate-300 font-medium'
                  >
                    {blog}
                  </a>
                </div>
              )}

              {twitter_username && (
                <div className='stat'>
                  <h5 className='stat-title text-md'>Twitter</h5>
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target='_blank'
                    rel='noreferrer'
                    className='text-slate-300 font-medium'
                  >
                    {twitter_username}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='w-full py-5 mb-6 rounded-lg shadow-sm bg-base-100 stats'>
          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaUsers className='text-3xl md:text-5xl' />
            </div>
            <h5 className='stat-title pr-5'>Followers</h5>
            <p className='stat-value pr-5 text-3xl md:text-4xl'>{followers}</p>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaUserFriends className='text-3xl md:text-5xl' />
            </div>
            <h5 className='stat-title pr-5'>Following</h5>
            <p className='stat-value pr-5 text-3xl md:text-4xl'>{following}</p>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaCode className='text-3xl md:text-5xl' />
            </div>
            <h5 className='stat-title pr-5'>Public Repos</h5>
            <p className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_repos}
            </p>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaStore className='text-3xl md:text-5xl' />
            </div>
            <h5 className='stat-title pr-5'>Public Gists</h5>
            <p className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_gists}
            </p>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default UserPage;
