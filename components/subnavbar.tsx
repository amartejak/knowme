import React from 'react';

const SubNavbar: React.FC = () => {
  return (
    <nav className="p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="#skills" className="text-inherit hover:text-white font-medium px-4 py-2 gap-2 rounded-full border hover:bg-black hover:border-gray-700 shadow-xl shadow-gray-700/50">My Skills</a>
        </li>
        <li>
          <a href="#experience" className="text-inherit hover:text-white font-medium px-4 py-2 gap-2 rounded-full border hover:bg-black hover:border-gray-700 shadow-xl shadow-gray-700/50">Experience</a>
        </li>
        <li>
          <a href="#contact" className="text-inherit hover:text-white font-medium px-4 py-2 gap-2 rounded-full border hover:bg-black hover:border-gray-700 shadow-xl shadow-gray-700/50">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavbar;