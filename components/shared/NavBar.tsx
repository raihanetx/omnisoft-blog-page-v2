

import React from 'react';
import Logo from './Logo';

interface NavBarProps {
    onGoHome: () => void;
    theme: string;
    toggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onGoHome, theme, toggleTheme }) => {
    const navLinks = ['Home', 'Services', 'Projects', 'Blog', 'About', 'Contact'];

    return (
        <header className="fixed top-4 left-0 right-0 z-50">
            <div className="container mx-auto px-4">
                <div className="bg-white/60 dark:bg-black/20 backdrop-blur-md rounded-full px-8 py-5 max-w-7xl mx-auto flex items-center justify-between border border-gray-300 dark:border-white/10">
                    {/* Logo and Name */}
                    <div 
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={onGoHome}
                        role="button"
                        aria-label="Go to homepage"
                    >
                        <Logo />
                        <span className="text-gray-900 dark:text-white font-bold text-2xl tracking-wider">omnisoft</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a
                                key={link}
                                href="#"
                                className={`text-lg transition-colors ${link === 'Blog' ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'}`}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* Search and Theme Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-black/5 placeholder-gray-500 text-gray-900 dark:bg-white/10 dark:placeholder-gray-400 dark:text-white text-base rounded-full py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-button-secondary w-48"
                            />
                            <i className="fas fa-search text-gray-500 dark:text-gray-400 absolute right-4 top-1/2 -translate-y-1/2"></i>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="bg-black/5 text-gray-800 hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            <i className={`fas text-xl ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;