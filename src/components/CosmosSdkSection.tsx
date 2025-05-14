import React from 'react';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'

const CosmosSdkSection = () => {
  return (
    // Add a gradient background here
    <div className="min-h-screen text-white px-4 py-16 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="text-sm text-gray-400 mb-4">TECHNOLOGY</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The most trusted<br />way to build value.
          </h1>
          <div className="max-w-lg">
            <p className="text-lg mb-4">
              <span className="font-semibold">Cosmos SDK</span> is a state-of-the-art blockchain 
              framework that powers the Cosmos Hub and its 
              rapidly expanding orbit of sovereign chains.
            </p>
            <p className="text-lg">
              Developers can use the SDK to build innovative 
              applications that create value through exchange 
              with the Cosmos Hub.
            </p>
          </div>
        </div>
        
        {/* Stats Section - Vertical layout as in image 2 */}
        <div className="mb-20">
          {/* Proof of Stake */}
          <div className="mb-12 pl-200">
            <div className="text-sm text-gray-400 mb-4">PROOF-OF-STAKE</div>
            <div className="flex items-end">
              <span className="text-7xl md:text-8xl font-bold">99%</span>
              <div className="ml-4 mb-2">
                <div className="text-xl">lower</div>
                <div className="text-xl">carbon</div>
                <div className="text-xl">footprint</div>
              </div>
            </div>
            <div className="text-gray-400 mt-4">Blockchain tech that truly scales.</div>
          </div>
          
          {/* Transaction Stats - horizontal layout */}
          <div className="grid grid-cols-2 gap-8 mt-30 mb-50">
            {/* Low Fees */}
            <div>
              <div className="text-sm text-gray-400 mb-4">LOW FEES</div>
              <div className="text-6xl md:text-7xl font-bold">$0.01</div>
            </div>
            
            {/* Fast Transactions */}
            <div>
              <div className="text-sm text-gray-400 mb-4">FAST TRANSACTIONS</div>
              <div className="text-6xl md:text-7xl font-bold">7 sec</div>
              <div className="text-gray-400 mt-4">Transactions confirmed in seconds.</div>
            </div>
          </div>
        </div>
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
          {/* Project Card */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col justify-end relative h-72">
            {/* Card Image */}
            <img 
                src={card1} 
                alt="Your project deserves its own blockchain" 
                className="absolute inset-0 w-full h-full object-cover"
                />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10 p-8">
              <h3 className="text-3xl font-bold mb-4">Your project deserves<br />its own block chain</h3>
              <a href="#" className="inline-flex items-center text-lg">
                Start building
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          
          {/* Academy Card */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col justify-end relative h-72">
            {/* Card Image */}
            <img 
                src={card2} 
                alt="Dive deep into the Cosmos SDK" 
                className="absolute inset-0 w-full h-full object-cover"
                />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="relative z-10 p-8">
              <div className="text-sm text-gray-400 mb-2">COSMOS ACADEMY</div>
              <h3 className="text-3xl font-bold mb-4">Dive deep into<br />the Cosmos SDK</h3>
              <a href="#" className="inline-flex items-center text-lg">
                Get started
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmosSdkSection;
