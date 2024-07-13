import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} GitHub Connect. All rights reserved.
                </p>
                <div className="mt-2">
                    <a href="/about" className="text-gray-400 hover:text-white mx-2">About</a>
                    <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy</a>
                    <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
