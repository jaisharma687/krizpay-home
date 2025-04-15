import React from 'react';

const CosmosHub: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white py-20 px-4">
      <div className='grid grid-cols-5'>
        <div className='col-span-2'></div>
      <div className="max-w-4xl mx-auto col-span-3">
        <p className="text-gray-300 uppercase tracking-wider mb-4">
          ENTER THE COSMOS HUB
        </p>
        <h1 className="text-6xl font-bold mb-8 leading-tight">
          The heart of the<br />Interchain.
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Serving as the economic center of Interchain,
          the Cosmos Hub is a blockchain that provides
          vital services to the Interchain
        </p>
      </div>
      </div>
    </div>
  );
};

export default CosmosHub;