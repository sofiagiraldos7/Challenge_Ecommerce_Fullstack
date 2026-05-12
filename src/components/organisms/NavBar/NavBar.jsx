import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { subscribeToAuthChanges } from '../../../services/authService';
import useCartStore from '../../../store/cartStore';
import SearchBar from '../../molecules/SearchBar';
import Badge from '../../atoms/Badge';

export default function NavBar() {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      setLoggedInUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    "text-base font-medium transition-all duration-300 pb-2 border-b-2 " +
    (isActive(path)
      ? "text-purple-600 border-purple-600"
      : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300");

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold hover:opacity-80 transition-opacity shrink-0"
          >
            <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              MyStore
            </span>
          </Link>

          {/* SearchBar (solo desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <SearchBar placeholder="Buscar productos..." />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6 shrink-0">
            <li>
              <Link to="/gallery" className={linkClass("/gallery")}>
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={linkClass("/cart") + " inline-flex items-center gap-2"}
              >
                <span>Cart</span>
                <Badge count={totalItems} />
              </Link>
            </li>
            {loggedInUser ? (
              <li>
                <Link to="/profile" className={linkClass("/profile")}>
                  Profile
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" className={linkClass("/login")}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className={linkClass("/register")}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Mobile Menu Button (opcional para futuro) */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-50"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}