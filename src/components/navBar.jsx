import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* For screens larger than 'md' (medium and up) */}
            <div className='sticky top-0 z-20 flex flex-row pl-5 py-4 bg-black text-white shadow-lg transition-all duration-300 hover:pl-9 hover:bg-slate-900 hover:shadow-2xl hidden md:flex'>
                <div className='font-anton text-2xl'>NEWS APP</div>
                <div className='text-center ml-[3%] flex flex-row gap-x-2 tracking-tighter font-abel'>
                    <button className='hover:w-fit hover:bg-white hover:text-black rounded-md p-1'>Business</button>
                    <button className='hover:w-fit hover:bg-white hover:text-black rounded-md p-1'>Entertainment</button>
                    <button className='hover:w-fit hover:bg-white hover:text-black rounded-md p-1'>General</button>
                    <button className='hover:w-fit hover:bg-white hover:text-black rounded-md p-1'>Health</button>
                    <button className='hover:w-fit hover:bg-white hover:text-black rounded-md p-1'>Science</button>
                    <button className='hover:w-fit hover:bg-white hover:text-black rounded-md p-1'>Sports</button>
                    <button className='hover:w-fit hover:bg-white hover:text-black rounded-md p-1'>Technology</button>
                </div>
            </div>

            {/* For screens smaller than 'md' (below medium size screens) */}
            <div className='sticky top-0 z-20 flex flex-row pl-5 py-4 bg-black text-white shadow-lg transition-all duration-300 hover:pl-9 hover:bg-slate-900 hover:shadow-2xl md:hidden'>
                <div className='font-anton text-2xl'>NEWS APP</div>

                {/* Hamburger Icon for Mobile */}
                <div className='ml-auto mr-5 mt-1'>
                    <button onClick={toggleMenu} className='flex flex-col justify-between items-center space-y-1'>
                        <span className='w-6 h-1 bg-white'></span>
                        <span className='w-6 h-1 bg-white'></span>
                        <span className='w-6 h-1 bg-white'></span>
                    </button>
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className='absolute top-full left-0 w-full bg-black text-white z-10 flex flex-col items-start pl-5 tracking-tighter font-abel'>
                        <button className='hover:bg-white hover:text-black rounded-md p-2'>Business</button>
                        <button className='hover:bg-white hover:text-black rounded-md p-2'>Entertainment</button>
                        <button className='hover:bg-white hover:text-black rounded-md p-2'>General</button>
                        <button className='hover:bg-white hover:text-black rounded-md p-2'>Health</button>
                        <button className='hover:bg-white hover:text-black rounded-md p-2'>Science</button>
                        <button className='hover:bg-white hover:text-black rounded-md p-2'>Sports</button>
                        <button className='hover:bg-white hover:text-black rounded-md p-2'>Technology</button>
                    </div>
                )}
            </div>
        </>
    );
}
