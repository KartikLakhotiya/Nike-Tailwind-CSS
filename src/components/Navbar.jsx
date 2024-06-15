import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className={`sticky top-0 z-10 w-full cursor-pointer backdrop-blur-md ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/70'}`}>
            <nav className='flex justify-between items-center max-container padding-x py-8'>
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray font-medium'>
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                    <li className='font-montserrat leading-normal text-lg text-slate-gray font-medium' onClick={toggleDarkMode}>Dark Mode</li>
                </ul>
                <div className='hidden max-lg:flex items-center gap-4'>
                    <img src={hamburger} alt="hamburger" width={25} height={25} />
                    <button onClick={toggleDarkMode} className='px-4 py-2 border rounded-lg text-lg'>
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
