import React, { useState } from 'react';
import krizpayLogo from '../assets/krizpay-logo.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" to-orange-500 text-white py-4 px-4 md:px-8 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        {/* Logo section */}
        <div className="flex w-full md:w-auto justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-30 h-10">
              <img src={krizpayLogo} alt="Krizpay Logo" className="w-full h-full" />
            </div>
          </div>
          
          {/* Hamburger menu for mobile */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation links section */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto items-center mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row list-none gap-4 md:gap-8 p-0 m-0">
            <li className="text-center"><a href="#products" className="text-white no-underline text-base hover:opacity-80 transition-opacity duration-300">Products</a></li>
            <li className="text-center"><a href="#resources" className="text-white no-underline text-base hover:opacity-80 transition-opacity duration-300">Resources</a></li>
            <li className="text-center"><a href="#z-hub" className="text-white no-underline text-base hover:opacity-80 transition-opacity duration-300">Z-Hub</a></li>
          </ul>
        </div>

        {/* CTA button section */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex mt-4 md:mt-0`}>
          <a href="#get-atom" className="bg-transparent text-white border-none py-2 px-4 text-base cursor-pointer flex items-center gap-2 no-underline hover:opacity-80 transition-opacity duration-300">
            Get ATOM <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
