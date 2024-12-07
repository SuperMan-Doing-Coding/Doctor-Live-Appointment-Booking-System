import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Users,
  Info,
  Phone,
  UserPlus,
  ChevronDown,
  LogOut,
  User,
  Calendar,
} from 'lucide-react';
import doc13 from '../../assets/doc13.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleLoginToggle = () => setIsLoggedIn(!isLoggedIn);

  const MobileNavLink = ({ href, icon, text }) => (
    <a
      href={href}
      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    >
      <span className="mr-2">{icon}</span>
      {text}
    </a>
  );

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer"
          >
            <span className="text-xl font-bold text-indigo-600">MediCare</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <NavLink href="/" icon={<Home size={18} />} text="Home" />
            <NavLink href="/doctors" icon={<Users size={18} />} text="All Doctors" />
            <NavLink href="/about" icon={<Info size={18} />} text="About" />
            <NavLink href="/contact" icon={<Phone size={18} />} text="Contact" />

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <img
                    src={doc13}
                    alt="User profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <ChevronDown size={16} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      <Link
                        to="/my-profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        <User size={16} className="mr-2" />
                        My Profile
                      </Link>
                      <Link
                        to="/my-appointment"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        <Calendar size={16} className="mr-2" />
                        My Appointments
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleLoginToggle}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <UserPlus size={18} className="mr-2" />
                Create Account
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 right-0 left-0 bg-white shadow-lg border-t z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {isLoggedIn && (
              <div className="flex items-center px-3 py-2 border-b border-gray-200 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                  className="h-8 w-8 rounded-full object-cover mr-2"
                />
                <span className="text-sm font-medium text-gray-700">John Doe</span>
              </div>
            )}
            <MobileNavLink href="/" icon={<Home size={18} />} text="Home" />
            <MobileNavLink href="/doctors" icon={<Users size={18} />} text="All Doctors" />
            <MobileNavLink href="/about" icon={<Info size={18} />} text="About" />
            <MobileNavLink href="/contact" icon={<Phone size={18} />} text="Contact" />

            {isLoggedIn ? (
              <>
                <MobileNavLink
                  href="/profile"
                  icon={<User size={18} />}
                  text="My Profile"
                />
                <MobileNavLink
                  href="/appointments"
                  icon={<Calendar size={18} />}
                  text="My Appointments"
                />
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <button className="w-full mt-2 flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
                <UserPlus size={18} className="mr-2" />
                Create Account
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, icon, text }) => (
  <Link
    to={href}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
  >
    <span className="mr-2">{icon}</span>
    {text}
  </Link>
);

export default Navbar;
