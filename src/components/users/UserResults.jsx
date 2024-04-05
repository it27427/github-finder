import { useEffect } from 'react';

const UserResults = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `${import.meta.env.REACT_APP_GITHUB_URL}/users`,
      {
        headers: {
          Authorization: `token ${import.meta.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const data = response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>User Results</h1>
    </div>
  );
};

export default UserResults;
