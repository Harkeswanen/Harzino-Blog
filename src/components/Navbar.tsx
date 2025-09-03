import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full flex items-center justify-between px-6 py-4 bg-[#050505]/95 backdrop-blur-md border-b border-[#353535] z-[1000]">
      {/* Logo */}
      <h6 className="text-pink-600 font-bold text-2xl sm:text-md cursor-pointer transition-transform duration-200 hover:scale-110">
        Harzino
      </h6>

      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none hover:text-pink-600 transition"
      >
        {isMenuOpen ? <X size={12} /> : <Menu size={12} />}
      </button>

      {/* Desktop links */}
      <ul
        className={`flex flex-col md:flex-row gap-4 md:gap-8 text-xs w-full items-center mt-4 md:mt-0 md:w-auto transition-transform duration-300 ${
          isMenuOpen
            ? "block translate-y-0"
            : "hidden -translate-y-4 md:flex md:translate-y-0"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-semibold transition ${
                  isActive ? "bg-zinc-900 text-pink-600" : "text-zinc-400 hover:text-pink-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Search */}
      <div
        className={`mt-4 md:mt-0 md:flex relative bg-zinc-900 rounded-md border border-zinc-800 items-center text-xs focus-within:ring-2 focus-within:ring-pink-700 w-full md:w-auto transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "hidden opacity-0 md:opacity-100"
        }`}
      >
      {/* Search (desktop only) */}
      <div className="hidden md:flex relative bg-zinc-900 rounded-md border border-zinc-800 items-center text-xs focus-within:ring-2 focus-within:ring-pink-700 w-64">
        <input
          type="text"
          placeholder="Search blogs..."
          className="pr-10 px-4 py-1 text-[#bebebc] bg-transparent outline-none w-full"
        />
        <div className="p-2 absolute right-0 top-0 h-full flex items-center">
          <Search className="text-gray-400" size={14} />
        </div>
      </div>
      </div>

      {/* Mobile full-screen menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-fit bg-[#050505]/95 backdrop-blur-md border-b border-[#353535] flex flex-col px-6 py-6 z-[9999] animate-slide-down">
          {/* Header (Logo + Close btn) */}
          <div className="flex justify-between items-center mb-4">
            <h6 className="text-pink-600 font-bold text-lg">Harzino</h6>
            <button onClick={toggleMenu} className="text-white hover:text-pink-600 transition">
              <X size={12} />
            </button>
          </div>

          {/* Nav links */}
          <ul className="flex flex-col gap-2 text-sm pt-1 border-t-1 border-zinc-800">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md font-semibold transition ${
                      isActive ? "bg-pink-900/30 text-pink-500" : "text-zinc-300 hover:text-pink-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search input */}
          <div className="mt-2 relative bg-zinc-900 rounded-md border border-zinc-800 items-center text-sm flex">
            <input
              type="text"
              placeholder="Search blogs..."
              className="file:text-foreground placeholder:text-muted-foreground flex h-9 min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280] pr-10"
            />
            <div className="p-2 absolute right-0 top-0 h-full flex items-center">
              <Search className="text-gray-400" size={16} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
