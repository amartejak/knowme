import Link from 'next/link';// If you've implemented the theme toggle as mentioned earlier
import { ThemeSwitch } from './theme-switch';
const Snavbar = () => {
  return (
    <nav className="p-4 fixed top-0 w-full z-10 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-inherit text-2xl font-bold">
          <h2 >Your Name</h2>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="text-inherit">
               About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-inherit">
              Projects
            </Link>
          </li>
          {/* Add more navigation links here as needed */}
        </ul>
        <ThemeSwitch />
      </div>
      <hr className="border-t  w-full mt-4" />
    </nav>
  );
};

export default Snavbar;
