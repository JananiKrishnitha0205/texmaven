// src/pages/Admin/Leftbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Leftbar = () => {
    const AdminLinks = [
        {
            title: 'Products',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Cart',
            link: '/cart',
            icon: ShoppingCart
        }
    ];

    return (
        <motion.div
            className='h-screen w-1/5 flex flex-col justify-between items-center bg-gradient-to-b from-[#e0f7fa] to-[#0288d1] shadow-2xl pt-8'
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <div className='w-full flex flex-col items-center'>
                <div className='text-white font-bold text-4xl mb-8'>
                    TEXMAVEN
                </div>
                <div className='w-full flex flex-col items-center space-y-4'>
                    {
                        AdminLinks.map((data, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(0,0,0,0.5)', backgroundColor: '#ffffff15' }}
                                whileTap={{ scale: 0.95 }}
                                className='w-full'
                            >
                                <NavLink 
                                    to={data.link} 
                                    className='p-4 flex items-center gap-4 transition-all duration-300 rounded-lg'
                                >
                                    {React.createElement(data.icon, { size: 24, className: 'text-green-800' })}
                                    <span className='font-semibold text-green-900'>{data.title}</span>
                                </NavLink>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default Leftbar;
