import React from 'react';

const SubNavbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="#section1">Section 1</a>
        </li>
        <li>
          <a href="#section2">Section 2</a>
        </li>
        <li>
          <a href="#footer">Section 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavbar;