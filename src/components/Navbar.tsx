import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contactus" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // ✅ detects current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full max-h-fit flex flex-col md:flex-row items-center justify-between md:justify-around px-4 md:px-10 py-4 bg-black text-white border-b border-zinc-800 z-1000">
      {/* Logo and Mobile Menu Button */}
      <div className="flex w-full md:w-auto justify-between items-center px-6 md:px-0">
        <h6 className="text-pink-600 font-bold text-2xl cursor-pointer transition-transform duration-200 hover:scale-110">
          Harzino
        </h6>
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Links */}
      <ul
        className={`flex flex-col md:flex-row gap-4 md:gap-8 text-xs w-full items-center mt-4 md:mt-0 md:w-auto transition-transform duration-300 ${
          isMenuOpen
            ? "block translate-y-0"
            : "hidden -translate-y-4 md:flex md:translate-y-0"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className={`px-3 py-2 rounded-md font-semibold cursor-pointer transition-transform duration-150 hover:scale-x-105 hover:scale-y-105
                ${
                  location.pathname === item.href
                    ? "bg-zinc-900 text-pink-600 hover:scale-105"
                    : "text-zinc-400 hover:text-pink-600"
                }
              `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Search */}
      <div
        className={`mt-4 md:mt-0 md:flex relative bg-zinc-900 rounded-md border border-zinc-800 items-center text-xs focus-within:ring-2 focus-within:ring-pink-700 w-full md:w-auto transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "hidden opacity-0 md:opacity-100"
        }`}
      >
        <input
          type="text"
          placeholder="Search blogs..."
          className="pr-20 px-4 py-1 text-pink-800 bg-transparent outline-none w-full"
        />
        <div className="p-2 absolute right-0 top-0 h-full flex items-center">
          <Search className="text-gray-400" size={14} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
