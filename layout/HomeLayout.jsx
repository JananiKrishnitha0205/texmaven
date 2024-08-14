import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const HomeLayout = () => {
    const location = useLocation();
    
    // Define paths where the Navbar should be hidden
    const hideNavbarPaths = ['/login', '/register', '/dash'];

    // Define paths where the Footer should be hidden
    const hideFooterPaths = ['/contact-us', '/about-us','/home'];

    // Determine if Navbar should be shown
    const showNavbar = !hideNavbarPaths.includes(location.pathname);
    // Determine if Footer should be shown
    const showFooter = !hideFooterPaths.includes(location.pathname);

    return (
        <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-col overflow-y-auto'>
            {showNavbar && <Navbar />}
            <Outlet />
            {showFooter && <Footer />}
        </div>
    );
};

export default HomeLayout;
