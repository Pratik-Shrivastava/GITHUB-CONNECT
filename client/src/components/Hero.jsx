import React from 'react';
import { Link } from 'react-router-dom';
import ConnectImg from '../assets/connect.jpg';

const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2 max-w-xl mx-auto px-4 py-8 text-center">
                <h1 className="text-5xl font-bold mb-4 text-cyan-300">Welcome to GitHub Connect</h1>
                <p className="text-lg mb-8">A platform to explore GitHub profiles by username.</p>
                <div className="max-w-md mx-auto text-left">
                    <p className="mb-4">GitHub Connect allows you to search and discover GitHub profiles using usernames. Whether you're looking for developers, exploring projects, or connecting with collaborators, GitHub Connect simplifies the process.</p>
                    <p>Get started by entering a GitHub username in the search box above and click Search.</p>
                </div>
                <Link to="/get-connect">
                    <button className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white py-2 px-4 rounded-md text-lg font-semibold mt-8 transition duration-300">
                        Get Started
                    </button>
                </Link>
            </div>
            <div className="lg:w-1/2 hidden lg:block">
                <img src={ConnectImg} alt="GitHub Connect Product" className="h-auto max-w-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default Hero;
