import React, { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { NavLink, useNavigate, useSearchParams  } from "react-router-dom";

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
   const [searchQuery, setSearchQuery] = useState("");
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();

   useEffect(() => {
    const queryFromUrl = searchParams.get("search");
    if (queryFromUrl) {
      setSearchQuery(decodeURIComponent(queryFromUrl));
    } else {
      setSearchQuery("");
    }
  }, [searchParams]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blogs?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false); // Close mobile menu after search
    }
  };

  return (
    <nav className="fixed w-full flex items-center justify-between  py-4 bg-[#050505]/95 backdrop-blur-md border-b border-[#353535] z-[1000]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
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
        className={`flex flex-col  md:flex  md:flex-row gap-4 md:gap-8 text-xs w-full items-center mt-4 md:mt-0 md:w-auto transition-transform duration-300 ${
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

      {/* Search (desktop only) */}
      <form onSubmit={handleSearchSubmit} className="hidden md:block md:ml-4">
            <div className="relative bg-zinc-900 rounded-md border border-zinc-800 flex items-center text-sm">
              <input
                type="text"
                placeholder="Search blogs..."
                className="pr-10 px-4 py-1 text-[#bebebc] rounded-md bg-transparent outline-none focus:ring-2 focus:ring-pink-700 focus:border-pink-700 transition-all w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="p-2 absolute right-0 top-0 h-full flex items-center text-gray-400">
                <Search size={16} />
              </button>
            </div>
          </form>

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
          <ul className="flex flex-col gap-0 text-sm pt-1 border-t-1 border-zinc-800">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-1 py-2 rounded-md font-semibold transition ${
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
          <form onSubmit={handleSearchSubmit}>
            <div className="mt-4 relative bg-zinc-900 rounded-md border border-zinc-800 flex items-center text-sm">
              <input
                type="text"
                placeholder="Search blogs..."
                className="pr-10 px-4 py-2 text-[#bebebc] bg-transparent outline-none w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="p-2 absolute right-0 top-0 h-full flex items-center text-gray-400">
                <Search size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
