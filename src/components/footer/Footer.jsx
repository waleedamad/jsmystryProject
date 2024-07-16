import React from 'react';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

function Footer() {
  return (
    <>
      <div className='bg-gradient-to-r from-black via-gray-800 to-blue-950 text-white py-8 px-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div className='flex flex-col md:items-start items-center'>
            <img src={logo} alt="Logo" className='mb-4 w-32 md:w-40' />
            <p className='text-center md:text-left md:mt-4'>
              A new way to make payments easy, reliable, and secure.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <p className='font-bold text-2xl mb-4'>Useful Links</p>
            <ul className='list-none space-y-2'>
              <li>
                <a href='#' className='hover:underline'>Content</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>How it Works</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Create</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Explore</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Team & Services</a>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <p className='font-bold text-2xl mb-4'>Community</p>
            <ul className='list-none space-y-2'>
              <li>
                <a href='#' className='hover:underline'>Help Center</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Partner</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Suggestions</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Blogs</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Newsletters</a>
              </li>
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <p className='font-bold text-2xl mb-4'>Partner</p>
            <ul className='list-none space-y-2'>
              <li>
                <a href='#' className='hover:underline'>Our Partner</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Become a Partner</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-gray-700 h-px'></div>

      <div className='bg-gradient-to-r from-black via-gray-800 to-blue-950 text-white flex justify-between items-center py-4 px-5'>
        <p className='text-sm'>&copy; 2024 HooBank. All rights reserved.</p>
        <div className='flex space-x-4'>
          <img src={facebook} alt="Facebook" className='w-6 h-6 cursor-pointer hover:opacity-80' />
          <img src={twitter} alt="Twitter" className='w-6 h-6 cursor-pointer hover:opacity-80' />
          <img src={instagram} alt="Instagram" className='w-6 h-6 cursor-pointer hover:opacity-80' />
          <img src={linkedin} alt="LinkedIn" className='w-6 h-6 cursor-pointer hover:opacity-80' />
        </div>
      </div>
    </>
  );
}

export default Footer;
