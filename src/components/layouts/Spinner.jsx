import spinner from '@/assets/images/spinner.gif';

const Spinner = () => {
  return (
    <figure className='w-100 mt-20'>
      <img
        src={spinner}
        alt='Loading...'
        className='text-center mx-auto'
        width={180}
      />
    </figure>
  );
};

export default Spinner;
