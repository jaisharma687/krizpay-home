// import React from 'react';
import MarketplaceSvg from '../assets/Marketplace.svg';
import SecuritySvg from '../assets/Security.svg';
import RouterSvg from '../assets/Router.svg';
import CustodianSvg from '../assets/Custodian.svg';

const CosmosServices = () => {
  const features = [
    {
      title: "Marketplace",
      description: "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation.",
      icon: <img src={MarketplaceSvg} alt="Marketplace" className="h-20 m-0" />
    },
    {
      title: "Security provider",
      description: "With the upcoming Interchain Security feature, ATOM will soon be securing many chains, in exchange for additional staking rewards.",
      icon: <img src={SecuritySvg} alt="Security" className="h-20 m-0" />
    },
    {
      title: "Router",
      description: "A core mission of the Hub to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin.",
      icon: <img src={RouterSvg} alt="Router" className="h-20 m-0" />
    },
    {
      title: "Custodian",
      description: "Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains.",
      icon: <img src={CustodianSvg} alt="Custodian" className="h-20 m-0" />
    }
  ];

  return (
      <>
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

      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-2">
      <div className=''></div>
      <div className="max-w-7xl mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className='m-0 p-0'>{feature.icon}</span>
                <h3 className="text-3xl font-semibold text-white m-0">{feature.title}</h3>
                <p className="text-gray-300 text-lg mt-4">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-zinc-900 bg-white hover:bg-purple-700 transition-colors duration-300"
          >
            Cosmos Hub
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
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
    </>
  );
};

export default CosmosServices;