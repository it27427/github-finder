import React from 'react';

const AboutPage = () => {
  return (
    <div className='px-2'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl mb-4 text-white'>
        Github Finder
      </h1>
      <p className='mb-4 text-2xl font-light text-gray-200'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='text-lgtext-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
    </div>
  );
};

export default AboutPage;
