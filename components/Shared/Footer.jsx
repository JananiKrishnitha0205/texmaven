import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative bottom-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center border-t-2 border-primary/50 mt-10">
      {/* Main footer container */}
      <div className="flex flex-row justify-between items-center w-full px-6">
        {/* Left section with copyright text */}
        <div className="text-primary font-bold text-lg">
          © texmaven.com
        </div>

        {/* Right section with social media icons */}
        <div className='flex flex-row items-center gap-6'>
          <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
            <Facebook className='h-7 w-7' />
          </a>
          <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
            <Twitter className='h-7 w-7' />
          </a>
          <a href="#" target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
            <Linkedin className='h-7 w-7 '/>
          </a>
          <a href="#" target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
            <Instagram className='h-7 w-7 '/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
