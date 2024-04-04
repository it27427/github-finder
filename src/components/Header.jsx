import NavBar from './NavBar';

const Header = () => {
  return (
    <header className='navbar mb-12 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10'>
      <div className='container mx-auto'>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
