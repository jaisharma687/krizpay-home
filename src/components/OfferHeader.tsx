import React from 'react';

const OfferHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white p-2 sm:p-3 flex items-center justify-center h-10 sm:h-12">
      <span className="text-xs sm:text-sm md:text-base font-semibold font-inter">
        <span className='font-inter-bold'>Game of NFTs</span> is now <span className='font-inter-bold'>Live!</span>
      </span>
      <button className="bg-white text-black px-2 sm:px-3 py-0.5 mx-2 sm:mx-4 rounded-xl text-xs sm:text-sm md:text-base font-inter-bold">
        Get Involved
      </button>
    </div>
  );
};

export default OfferHeader;
