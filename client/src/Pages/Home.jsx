import React from 'react';
import { Link } from 'react-router-dom';
import ConnectImg from '../assets/img4.jpg';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-cover bg-center mt-5" style={{ backgroundImage: `url(${ConnectImg})` }}>
                <div className="bg-black bg-opacity-50 lg:w-1/2 max-w-xl mx-auto px-4 py-8 text-center rounded-lg">
                    <h1 className="text-5xl font-bold mb-4 text-cyan-300">Welcome to GitHub Connect</h1>
                    <p className="text-lg mb-8 text-white">A platform to explore GitHub profiles.</p>
                    <div className="max-w-md mx-auto text-left text-white space-y-4 ">
                        <p>GitHub Connect allows you to search and discover GitHub profiles using usernames. Whether you're looking for developers, exploring projects, or connecting with collaborators, GitHub Connect simplifies the process.</p>
                        <p>Get started by entering a GitHub username in the search box above and click Search.</p>
                        {/* <p>Additionally, you can upload a file containing multiple GitHub usernames and view all profiles in one place. </p> */}
                    </div>
                    <Link to="/get-connect">
                        <button className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white py-2 px-4 rounded-md text-lg font-semibold mt-8 transition duration-300">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
            <section className="py-12 mt-5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-cyan-300 text-center mb-8">Our Features</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="bg-gray-700 p-6 rounded-lg text-center">
                            <div className="mb-4">
                                <svg className="h-12 w-12 text-cyan-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Profile Browsing</h3>
                            <p className="text-gray-400">Easily search and browse through GitHub profiles by entering a username. View user details, repositories, contributions, and more.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gray-700 p-6 rounded-lg text-center">
                            <div className="mb-4">
                                <svg className="h-12 w-12 text-cyan-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Project Insights</h3>
                            <p className="text-gray-400">Get detailed insights into repositories including languages used, stars, forks, and issues to better understand project popularity and activity.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gray-700 p-6 rounded-lg text-center">
                            <div className="mb-4">
                                <svg className="h-12 w-12 text-cyan-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Developer Connection</h3>
                            <p className="text-gray-400">Connect with developers and collaborators. Follow users, contribute to projects, and expand your professional network on GitHub.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
