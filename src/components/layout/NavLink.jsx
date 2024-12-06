import React from 'react';

const NavLink = ({ href, icon, text }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors"
    >
      <span className="mr-2">{icon}</span>
      {text}
    </a>
  );
};

export default NavLink;