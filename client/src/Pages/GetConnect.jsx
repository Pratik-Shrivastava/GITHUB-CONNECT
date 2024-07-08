import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FileUpload from '../components/FileUpload';
import UserProfile from '../components/UserProfile';

const GetConnect = () => {
    const [searchUsername, setSearchUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!searchUsername) {
            setError('Please enter a GitHub username.');
            return;
        }

        try {
            const response = await fetch(`https://api.github.com/users/${searchUsername}`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
                setError(null); // Clear any previous error
            } else {
                setError(`User '${searchUsername}' not found.`);
                setUserData(null);
            }
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            setError('Failed to fetch user data. Please try again later.');
            setUserData(null);
        }
    };

    return (
        <div className=" min-h-screen">
            <div className="container mx-auto py-8">
                <div className=" mx-auto">
                    {/* SearchBar and FileUpload Section */}
                    <div className=" rounded-md shadow-md p-4 mb-8">
                        <h2 className="text-xl font-semibold text-gray- mb-4">Search GitHub Profiles or Upload a File</h2>
                        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                            <SearchBar setSearchUsername={setSearchUsername} handleSearch={handleSearch} />
                            <span className="hidden lg:block text-gray-600 font-semibold">OR</span>
                            <FileUpload />
                        </div>
                    </div>

                    {/* Display User Profile */}
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <UserProfile userData={userData} />
                </div>
            </div>
        </div>
    );
}

export default GetConnect;
