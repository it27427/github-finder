import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import NotFoundPage from '@/pages/NotFoundPage';

/*
 * NOTE: Alert is only used on the '/' route moving to that route we can prevent
 * Content shift when alert shows by hiding and unhiding the Alert rather than
 * Conditionally rendering
 */

const App = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Header />

        <main className='px-3 pb-12'>
          <div className='container mx-auto'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
