import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="header bg-gray-400 bg-opacity-90 flex justify-center  z-50">
      <nav className="w-[70%] h-[60px] flex items-center justify-between ">
        <img className="w-[150px] h-auto" src={logo} alt="logo" />
        <ul className="space-x-10 font-bold text-xl text-gray-700">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#aboutMe" className="hover:text-blue-700">About Me</a>
          <a href="#skills" className="hover:text-blue-700">Skills</a>
          <a href="#contactMe" className="hover:text-blue-700">Contact Me</a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
