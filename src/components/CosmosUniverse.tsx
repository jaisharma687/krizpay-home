import React from 'react';

interface CosmosUniverseProps {
  headerText?: string;
  mainHeadline?: string;
  descriptionText?: string;
  statistics?: {
    appsCount: {
      value: number;
      label: string;
    };
    assetsValue: {
      value: number;
      currency: string;
      unit: string;
      label: string;
    };
  };
  ctaButtons?: {
    primary: {
      text: string;
      icon?: string;
      onClick?: () => void;
    };
    secondary: {
      text: string;
      icon?: string;
      onClick?: () => void;
    };
  };
}

const CosmosUniverse: React.FC<CosmosUniverseProps> = ({
  headerText = "COMMUNITY-OWNED AND OPERATED",
  mainHeadline = "Enter a new universe of connected services.",
  descriptionText = "Cosmos apps and services connect using IBC, the Inter-Blockchain Communication protocol. This innovation enables you to freely exchange assets and data across sovereign, decentralized blockchains.",
  statistics = {
    appsCount: {
      value: 272,
      label: "Apps & services, and growing."
    },
    assetsValue: {
      value: 62,
      currency: "$",
      unit: "B",
      label: "Digital assets under management."
    }
  },
  ctaButtons = {
    primary: {
      text: "Learn",
      icon: "→"
    },
    secondary: {
      text: "Explore tokens",
      icon: "→"
    }
  }
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white relative mb-50">
      {/* Corner brackets */}
      <div className="absolute top-0 right-0 text-5xl opacity-100">⌝</div>
      <div className="absolute bottom-0 right-0 text-5xl opacity-100">⌟</div>
      
      {/* Header text */}
      <div className='flex justify-center'>
      <div>
      <p className="text-sm text-gray-400 tracking-wider">{headerText}</p>
      <div className="grid grid-cols-4 gap-12">
        {/* Left column */}
        <div className="col-span-3 space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {mainHeadline}
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl">
            {descriptionText}
          </p>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <button className="bg-white text-black px-8 py-3 rounded-md font-medium flex items-center hover:bg-gray-200 transition-colors">
              {ctaButtons.primary.text} <span className="ml-2">{ctaButtons.primary.icon}</span>
            </button>
            <button className="text-white px-8 py-3 flex items-center hover:text-gray-300 transition-colors">
              {ctaButtons.secondary.text} <span className="ml-2">{ctaButtons.secondary.icon}</span>
            </button>
          </div>
        </div>
        
        {/* Right column */}
        <div className="col-span-1 space-y-16 flex flex-col">
          <div className="space-y-2">
            <h2 className="text-6xl md:text-7xl font-bold">{statistics.appsCount.value}+</h2>
            <p className="text-gray-300">{statistics.appsCount.label}</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-6xl md:text-7xl font-bold">{statistics.assetsValue.currency}{statistics.assetsValue.value}{statistics.assetsValue.unit}+</h2>
            <p className="text-gray-300">{statistics.assetsValue.label}</p>
          </div>
        </div>
      </div>

      </div>
      </div>
    </div>
  );
};

export default CosmosUniverse;
