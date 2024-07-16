import React, { useState } from 'react';
import logo from '../assets/logo.svg'; // Adjust the path as per your project structure

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black bg-gradient-to-r from-black via-gray-800 to-blue-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <img className="h-8 w-auto md:ms-8" src={logo} alt="Your Company" />
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4 md:me-20">
              <a href="#" className="rounded-md text-sm px-3 py-2 font-medium text-white hover:bg-gray-700" aria-current="page">Home</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 text-white">About Us</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 text-white">Features</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 text-white">Solution</a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button 
              type="button" 
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
              aria-controls="mobile-menu" 
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Features</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Solution</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
