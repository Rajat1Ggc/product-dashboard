import { Heart, Menu, Search, Store } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ searchOpen, setSearchOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Global" className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="ProductDash"
              className="h-8 w-8"
            />
            <span className="font-semibold text-gray-900">
              ProductDash
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1 ${
                  isActive
                    ? 'text-indigo-600 font-medium'
                    : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              <Store size={18} />
              Products
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `flex items-center gap-1 ${
                  isActive
                    ? 'text-indigo-600 font-medium'
                    : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              <Heart size={18} />
              Favorites
            </NavLink>

            <button
              type="button"
              aria-label="Toggle search"
              aria-pressed={searchOpen}
              onClick={() => setSearchOpen(prev => !prev)}
              className={`p-2 rounded-md transition ${
                searchOpen
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open main menu"
            aria-expanded={open}
            onClick={() => setOpen(prev => !prev)}
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-3">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
            >
              <Store size={18} />
              Products
            </NavLink>

            <NavLink
              to="/favorites"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
            >
              <Heart size={18} />
              Favorites
            </NavLink>

            {/* Mobile Search */}
            <button
              onClick={() => {
                setSearchOpen(prev => !prev);
                setOpen(false);
              }}
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
            >
              <Search size={18} />
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

NavBar.propTypes = {
  setSearchOpen: PropTypes.func.isRequired,
  searchOpen: PropTypes.bool.isRequired,
};

export default NavBar;
