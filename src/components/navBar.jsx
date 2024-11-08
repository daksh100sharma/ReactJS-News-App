import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className='sticky top-0 z-20 flex flex-row pl-5 py-4 bg-black text-white shadow-lg transition-all duration-300 hover:pl-9 hover:bg-slate-900 hover:shadow-2xl hidden md:flex'>
        <div className='font-anton text-2xl'>NEWS APP</div>
        <div className='text-center ml-[3%] flex flex-row gap-x-2 tracking-tighter font-abel'>
          {categories.map((category) => (
            <NavLink
              key={category}
              to={`/${category.toLowerCase()}`}
              className='hover:w-fit hover:bg-white hover:text-black rounded-md p-1'
            >
              {category}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className='sticky top-0 z-20 flex flex-row pl-5 py-4 bg-black text-white shadow-lg transition-all duration-300 hover:pl-9 hover:bg-slate-900 hover:shadow-2xl md:hidden'>
        <div className='font-anton text-2xl'>NEWS APP</div>
        <div className='ml-auto mr-5 mt-1'>
          <button onClick={toggleMenu} className='flex flex-col justify-between items-center space-y-1'>
            <span className='w-6 h-1 bg-white'></span>
            <span className='w-6 h-1 bg-white'></span>
            <span className='w-6 h-1 bg-white'></span>
          </button>
        </div>
        {isOpen && (
          <div className='absolute top-full left-0 w-full bg-black text-white z-10 flex flex-col items-start pl-5 tracking-tighter font-abel'>
            {categories.map((category) => (
              <NavLink
                key={category}
                to={`/${category.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className='hover:bg-white hover:text-black rounded-md p-2'
              >
                {category}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
