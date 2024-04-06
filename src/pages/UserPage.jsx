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

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {user.login}
      <h1>User</h1>
    </>
  );
};

export default UserPage;
