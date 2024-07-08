import React from 'react';
import { Link } from 'react-router-dom';
import ConnectImg from '../assets/connect.jpg'

const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2 max-w-xl mx-auto px-4 py-8 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Welcome to GitHub Connect</h1>
                <p className="text-lg mb-8">A platform to explore GitHub profiles by username</p>
                <div className="max-w-md mx-auto">
                    <p className="mb-4 text-start">GitHub Connect allows you to search and discover GitHub profiles using usernames. Whether you're looking for developers, exploring projects, or connecting with collaborators, GitHub Connect simplifies the process.</p>
                    <p className='text-start'>Get started by entering a GitHub username in the search box above and click Search.</p>
                </div>
                <Link to="/get-connect">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold mt-8">
                        Get Started
                    </button>
                </Link>
            </div>
            <div className="lg:w-1/2 hidden lg:block">
                {/* Image relevant to your product */}
                <img src={ConnectImg} alt="GitHub Connect Product" className="h-auto max-w-full" />
            </div>
        </div>
    );
}

export default Hero;
