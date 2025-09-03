import './App.css'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import { Route , Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route 
            path='/contactus'
            element={<ContactUs />}
          />
      </Routes>
    </BrowserRouter>
      </div>
        
    </>
    
  )
}

export default App
