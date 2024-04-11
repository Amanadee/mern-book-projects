import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6"; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMouseOverMenu, setIsMouseOverMenu] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu on mouse leave
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Handle mouse enter and leave for menu button
    const handleMenuMouseEnter = () => {
        setIsMouseOverMenu(true);
    };

    const handleMenuMouseLeave = () => {
        setIsMouseOverMenu(false);
    };

    // Define navItems as an array of objects
    const navItems = [
        { linkText: "Home", path: "/" },
        { linkText: "About", path: "/about" },
        { linkText: "Shop", path: "/shop" },
        { linkText: "Sell Your Book", path: "/admin/dashboard" },
        { linkText: "blog", path: "/blog" },
        { linkText: "Write a book", path: "/writer" },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className='py-4 lg:px-24 px-4 ${isSticky ?}"sticky top-0 left-0 right-0 bg-blue-300" : ""'>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Logo */}
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block'/>Books</Link>
                    
                    {/* nav items for large device */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ linkText, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{linkText}</Link>
                            </li>
                        ))}
                    </ul>
                    {/* menu btn for lg devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button 
                            onMouseEnter={handleMenuMouseEnter}
                            onMouseLeave={handleMenuMouseLeave}
                            onClick={toggleMenu}>
                            {isMouseOverMenu || isMenuOpen ? <FaXmark className ='w-5 hover:text-blue-700'/> : <FaBarsStaggered className ='w-5 hover:text-blue-700'/>}
                        </button>
                    </div>

                    {/* menu btn for the mobile devices */}
                    <div className='md:hidden'>
                        <button 
                            onClick={toggleMenu} 
                            className='text-black focus:outline-none'
                            onMouseEnter={handleMenuMouseEnter}
                            onMouseLeave={handleMenuMouseLeave}>
                            {isMouseOverMenu || isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>}
                        </button>
                    </div>
                </div>

                {/* nav items for small devices */}
                <div className={`space-y-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    {navItems.map(({ linkText, path }) => (
                        <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{linkText}</Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}; 

export default Navbar;
