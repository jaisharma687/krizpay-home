import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="h-screen  relative overflow-hidden flex flex-col justify-center items-center text-white text-center px-4">
      <div className="absolute inset-0 w-full h-full">
      </div>
      <div className="z-10">
        <h1 className="text-5xl md:text-8xl font-bold mb-4">Build on the Interchain.</h1>
        <p className="text-xl max-w-l">
          Build a blockchain using the best-in-class open source libraries and services.
        </p>
      </div>
    </div>
  );
};

export default Home;
