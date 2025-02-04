import { useState } from 'react';
import logo from "../assets/logo.png";
import { TbHome } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header bg-gray-400 bg-opacity-90 flex justify-center z-20 sticky top-0 ">
      <nav className="w-[90%] sm:w-[80%] md:w-[70%] h-[60px] flex items-center justify-between backdrop-blur-md">
        <img className="w-[150px] h-auto" src={logo} alt="logo  " />
      
        <div className="hidden md:flex space-x-10 md:font-bold text-xl font-serif text-gray-700">
          <TbHome className='absolute ml-4 mt-1 hover:text-white '/>
          <a href="#home" className="hover:text-white"> Home </a>
          <a href="#aboutMe" className=" hover:text-white">About Me</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contactMe" className="hover:text-white">Contact Me</a>
     
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden w-full bg-gray-400 bg-opacity-90">
          <ul className="space-y-4 py-4 text-center text-xl font-bold text-gray-700">
            <a href="#home" className="block hover:text-white ">Home</a>
            <a href="#aboutMe" className="block hover:text-white">About Me</a>
            <a href="#skills" className="block hover:text-white">Skills</a>
            <a href="#projects" className="block hover:text-white">Projects</a>
            <a href="#contactMe" className="block hover:text-white">Contact Me</a>
            
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
