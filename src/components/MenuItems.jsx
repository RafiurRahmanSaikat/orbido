import React from 'react';

const MenuItems = ({ label }) => {
  return (
    <li>
      <a
        href={`#${label}`}
        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:underline underline-offset-8"
      >
        {label}
      </a>
    </li>
  );
};

export default MenuItems;