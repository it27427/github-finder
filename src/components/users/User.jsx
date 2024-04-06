import { useEffect, useContext } from 'react';
import GithubContext from '@/context/github/GithubContext';
import { useParams } from 'react-router-dom';

const User = () => {
  const { getUser, user } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return (
    <>
      {user.login}
      <h1>User</h1>
    </>
  );
};

export default User;
