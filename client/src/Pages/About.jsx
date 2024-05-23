import React from 'react'
import './About.css';

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section text-center text-white d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-4">About Us</h1>
                    <p className="lead">Learn more about our mission, vision, and the team that makes it all happen.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mt-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8">
                        <h2 className="text-center mb-4">Our Mission</h2>
                        <p>
                            Welcome to our company! We are dedicated to providing the best services to our customers. Our team of experts
                            works tirelessly to ensure customer satisfaction and deliver outstanding results.
                        </p>
                        <p>
                            Our mission is to innovate and lead in our industry, offering solutions that are not only effective but also
                            sustainable and socially responsible. We believe in the power of technology and the importance of human touch in
                            every aspect of our business.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="row mb-5">
                    <div className="col text-center">
                        <h2 className="mb-4">Meet Our Team</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Team Member" />
                            <div className="card-body text-center">
                                <h5 className="card-title">John Doe</h5>
                                <p className="card-text">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Team Member" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Jane Smith</h5>
                                <p className="card-text">Chief Marketing Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Team Member" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Emily Johnson</h5>
                                <p className="card-text">Head of Product Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About
