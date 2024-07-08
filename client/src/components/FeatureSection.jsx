import React from 'react';

const FeatureSection = () => {
    return (
        <section className="py-12 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Our Features</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                        <div className="mb-4">
                            <svg className="h-12 w-12 text-cyan-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">List</h3>
                        <p className="text-gray-400">Description for feature one. It provides these great benefits.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                        <div className="mb-4">
                            <svg className="h-12 w-12 text-cyan-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Upload</h3>
                        <p className="text-gray-400">Description for feature two. It provides these great benefits.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                        <div className="mb-4">
                            <svg className="h-12 w-12 text-cyan-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Connect</h3>
                        <p className="text-gray-400">Description for feature three. It provides these great benefits.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
