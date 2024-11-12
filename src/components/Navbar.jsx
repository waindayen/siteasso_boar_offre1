import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Accueil", path: "/" },
    { title: "Notre Mission", path: "/mission" },
    { title: "Projets", path: "/projets" },
    { title: "Agir", path: "/agir" },
    { title: "Offres", path: "/offres" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-20 top-0 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="EcoSolidaire" className="h-10 w-auto" />
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-emerald-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Link
            to="/faire-un-don"
            className="hidden md:inline-block bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Faire un don
          </Link>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/faire-un-don"
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-all duration-300 text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Faire un don
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;