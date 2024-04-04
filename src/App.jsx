import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Header />

        <main className='px-3 pb-12'>
          <div className='container mx-auto'>
            <h1>Content</h1>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
