import React from 'react';
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
 
  return (
    <nav className="bg-[#1e293b] text-white p-4 flex items-center justify-between shadow-md sticky top-0 z-50 ">
      <div className="flex items-center space-x-4">
        <button className="lg:hidden text-white text-2xl focus:outline-none">
          ☰
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-xl" /> 
          <span className="font-semibold text-base">{"Demo"}</span> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;