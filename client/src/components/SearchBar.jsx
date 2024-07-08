import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-gray-100 p-4 rounded-md shadow-md">
            {/* Left side: Search bar */}
            <div className="flex items-center mb-4 lg:mb-0">
                <input
                    type="text"
                    placeholder="Search GitHub profiles..."
                    className="px-4 py-2 w-full lg:w-auto bg-white rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
                    Search
                </button>
            </div>

            {/* Right side: Instructions */}
            <p className="text-center lg:text-left text-gray-700">
                Enter a GitHub username above to search for profiles.
            </p>
        </div>
    );
}

export default SearchBar;
