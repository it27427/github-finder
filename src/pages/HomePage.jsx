import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{import.meta.env.REACT_APP_GITHUB_TOKEN}</p>
    </div>
  );
};

export default HomePage;
