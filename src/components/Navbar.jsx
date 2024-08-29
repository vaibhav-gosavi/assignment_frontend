import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center h-auto md:h-[68px] w-full p-4 bg-white shadow-lg">
      {/* Company Logo */}
      <div className="flex items-center justify-between w-full md:w-1/3 md:pl-12">
        <img
          src="/company_icon.png"
          alt="HyggeX"
          className="h-[50px] md:h-[58px] lg:h-[86px]"
        />
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#06286e] focus:outline-none"
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Links and Buttons */}
      <div
        className={`flex flex-col md:flex-row justify-around items-center w-full md:w-2/3 mt-4 md:mt-0 absolute md:relative top-[60px] md:top-0 bg-white md:bg-transparent left-0 md:left-auto z-10 md:z-auto transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row justify-around items-center w-full md:w-auto gap-y-2 md:gap-x-12 text-[#06286e]">
          <li className="font-[Roboto]">
            <a href="#" className="text-sm md:text-base hover:text-[#407FFF]">
              Learn
            </a>
          </li>
          <li className="font-[Roboto]">
            <a href="#" className="text-sm md:text-base hover:text-[#407FFF]">
              Practice
            </a>
          </li>
          <li className="font-[Roboto]">
            <a href="#" className="text-sm md:text-base hover:text-[#407FFF]">
              Assessments
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <ul className="flex flex-col md:flex-row justify-around items-center gap-4 md:gap-8 w-full md:w-auto mt-4 md:mt-0">
          <li>
            <button className="w-[150px] md:w-[92px] h-[42px] md:h-[37px] border-2 border-[#06286e] rounded text-[#06286e] hover:bg-[#06286e] hover:text-white transition">
              Login
            </button>
          </li>
          <li>
            <button className="w-[150px] md:w-[110px] h-[42px] md:h-[37px] bg-[#06286E] text-white rounded-[6px] hover:bg-[#407FFF] transition">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
