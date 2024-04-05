import { useState } from 'react';

const UserSearch = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-20 lg:pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search...'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 btn btn-lg w-24 lg:w-40 rounded-l-none'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <button className='btn btn-ghost btn-lg'>Clear</button>
      </div>
    </div>
  );
};

export default UserSearch;