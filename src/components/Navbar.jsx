import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed w-full h-16 bg-linear-to-bl from-pink-200 to-blue-200 border-b border-gray-200 py-3">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-lg font-bold text-gray-800">
                        ThemeWagon
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className={`text-sm ${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}>
                            Home
                        </Link>
                        <Link to="/services" className={`text-sm ${isActive('/services') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}>
                            Services
                        </Link>
                        <Link to="/details" className={`text-sm ${isActive('/details') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}>
                            Details
                        </Link>
                        <Link to="/features" className={`text-sm ${isActive('/features') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}>
                            Features
                        </Link>
                        <Link to="/projects" className={`text-sm ${isActive('/projects') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}>
                            Projects
                        </Link>
                        <Link to="/team" className={`text-sm ${isActive('/team') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}>
                            Team
                        </Link>
                        <Link to="/contact" className={`text-sm ${isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}>
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-1 text-gray-600"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200">
                        <div className="px-2 py-2 space-y-1">
                            <Link to="/" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-sm rounded-lg ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                                Home
                            </Link>
                            <Link to="/services" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-sm rounded-lg ${isActive('/services') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                                Services
                            </Link>
                            <Link to="/details" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-sm rounded-lg ${isActive('/details') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                                Details
                            </Link>
                            <Link to="/features" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-sm rounded-lg ${isActive('/features') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                                Features
                            </Link>
                            <Link to="/projects" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-sm rounded-lg ${isActive('/projects') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                                Projects
                            </Link>
                            <Link to="/team" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-sm rounded-lg ${isActive('/team') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                                Team
                            </Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-sm rounded-lg ${isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}