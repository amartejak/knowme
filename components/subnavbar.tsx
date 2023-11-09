import React from 'react';

const SubNavbar: React.FC = () => {
  return (
    <nav className="flex p-2">
      <ul className="flex max-sm:flex-col max-sm:gap-6 justify-center items-center md:space-x-4">
        <li>
          <a href="#skills" className="text-inherit hover:text-white font-medium px-4 py-2 rounded-full border border-zinc-300 hover:bg-black hover:border-gray-700 shadow-sm shadow-zinc-700/50">My Skills</a>
        </li>
        <li>
          <a href="#experience" className="text-inherit hover:text-white font-medium px-4 py-2 rounded-full border border-zinc-300 hover:bg-black hover:border-gray-700 shadow-sm shadow-zinc-700/50">Experience</a>
        </li>
        <li>
          <a href="#contact" className="text-inherit hover:text-white font-medium px-4 py-2 rounded-full border border-zinc-300 hover:bg-black hover:border-gray-700 shadow-sm shadow-zinc-700/50">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavbar;