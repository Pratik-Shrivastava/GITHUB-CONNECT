import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <nav className="border-b border-gray-700 ">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/" className="text-white text-2xl font-bold">
                                GitHub Connect
                            </Link>
                        </div>

                        {/* Instructions and Get Started Links */}
                        <div>
                            {/* Instructions Button */}
                            <button
                                onClick={openModal}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Instructions
                            </button>
                            <Link to="/get-connect" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Let's Connect
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-slate-200 rounded-lg p-6 relative max-w-md w-full">
                        <h2 className="text-xl text-black font-bold mb-4">Instructions</h2>
                        <ul className="list-disc list-inside text-gray-800 space-y-2">
                            <li>
                                <span className="font-semibold">Search GitHub Users:</span> Use the search bar to find GitHub users. Enter the GitHub username in the text field and click the <span className="font-medium">Search</span> button. The application will display information about the user if they exist.
                            </li>
                            <li>
                                <span className="font-semibold">Upload GitHub Links:</span> You can upload a file containing GitHub usernames or links. Make sure to provide the correct column name for the GitHub links or usernames when uploading the file.
                            </li>
                            <li>
                                <span className="font-semibold">How to Upload:</span> Click on the <span className="font-medium">Upload File</span> button to select your file. Enter the column name that contains the GitHub links or usernames in the provided text field. Click <span className="font-medium">Upload File</span> to start the upload process.
                            </li>
                        </ul>
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            &times;
                        </button>
                    </div>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={closeModal}
                    ></div>
                </div>
            )}
        </>
    );
};

export default Navbar;
