import './App.css'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import { Route , Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
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
