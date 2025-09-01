
import React, { useState, useRef, useEffect } from 'react';
import { CATEGORIES } from '../../constants';

interface FilterControlsProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center mb-16 gap-4">
            <div className="relative flex items-center bg-white rounded-lg focus-within:ring-2 focus-within:ring-button-secondary w-full md:w-1/2 lg:w-1/2">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search blogs...."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="bg-transparent text-gray-800 w-full py-3 pl-4 pr-2 focus:outline-none"
                />
                <div className="w-px h-6 bg-gray-300"></div>
                <label htmlFor="search-input" className="pl-3 pr-4 text-gray-400 cursor-pointer">
                    <i className="fas fa-search"></i>
                    <span className="sr-only">Search</span>
                </label>
            </div>
            <div ref={dropdownRef} className="relative w-full md:w-auto">
                <button
                    id="filter-button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-button-primary text-white px-4 py-3 rounded-lg focus:outline-none cursor-pointer flex items-center justify-between gap-4 w-full md:w-60"
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                >
                    <span className="text-center flex-grow">
                        {selectedCategory === 'All' ? 'Filter by category' : selectedCategory}
                    </span>
                    <i className={`fas fa-chevron-down transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                <ul
                    role="listbox"
                    aria-labelledby="filter-button"
                    className={`absolute z-10 mt-2 w-full bg-button-primary border border-button-secondary rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                    aria-hidden={!dropdownOpen}
                >
                    {CATEGORIES.map(cat => (
                        <li 
                            key={cat} 
                            onClick={() => {
                                onCategoryChange(cat);
                                setDropdownOpen(false);
                            }}
                            className="px-6 py-3 text-white hover:bg-button-secondary cursor-pointer text-center"
                            role="option"
                            aria-selected={selectedCategory === cat}
                        >
                            {cat === 'All' ? 'All categories' : cat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FilterControls;