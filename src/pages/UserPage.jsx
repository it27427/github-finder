import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import Spinner from '@/components/layouts/Spinner';
import GithubContext from '@/context/github/GithubContext';

const UserPage = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

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
      <div className='w-full mx-auto lg:w-10/12'></div>
    </>
  );
};

export default UserPage;
