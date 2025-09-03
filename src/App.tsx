import './App.css'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import BlogPage from './pages/BlogPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

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
          <Route path="/blogs" element={<BlogPage />} />
          <Route 
              path='/contactus'
              element={<ContactUs />}
            />
        </Routes>
      </div>
        
    </>
    
  )
}

export default App
