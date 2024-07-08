import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-2xl font-bold">
                            GitHub Connect
                        </Link>
                    </div>
                    {/* Get Started Link */}
                    <div>
                        <Link to="/get-connect" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Let's Connect
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
