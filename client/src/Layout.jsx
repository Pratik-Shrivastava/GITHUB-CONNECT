// components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function Layout() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <Background />
            <Navbar />
            <div className="flex-grow container mx-auto px-8">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
