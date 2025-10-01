import "./App.css";

import Community from "./pages/Community";
import Home from "./pages/Home";

import About from "./pages/About";

import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogPage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import CookiePolicy from "./pages/CookiesPage";
import AuthForm from "./pages/Signup";

function App() {
  // Global scroll restoration prevention
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/community" element={<Community />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
