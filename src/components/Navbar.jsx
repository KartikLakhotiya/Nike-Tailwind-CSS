import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className='padding-x py-8 absolute z-10 w-full cursor-pointer'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {
                        navLinks.map((items) => (
                            <li key={items.label}>
                                <a href={items.href} className='font-montserrat leading-normal text-lg text-slate-gray font-medium'>
                                    {items.label}
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
