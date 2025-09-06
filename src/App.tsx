import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import BlogPage from './pages/BlogPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import CookiePolicy from './pages/CookiesPage';

function App() {
  // Global scroll restoration prevention
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route 
            path='/contactus'
            element={<ContactUs />}
          />
          <Route 
            path='/cookies'
            element={<CookiePolicy />}
          />
      </Routes>
      </div>
        
    </>
    
  )
}

export default App
