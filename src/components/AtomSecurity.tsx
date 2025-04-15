// import React from 'react';

const AtomSecurity = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Secured by<br />
          the ATOM.
        </h2>
        <p className="text-gray-300 text-xl mb-8">
          In return for securing the services on the Cosmos Hub, transaction fees and staking rewards are distributed to ATOM stakers.
        </p>
        <div className="flex gap-6 justify-center">
          <a 
            href="#" 
            className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Start staking
          </a>
          <a 
            href="#" 
            className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AtomSecurity; 