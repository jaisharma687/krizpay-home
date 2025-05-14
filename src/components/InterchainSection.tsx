import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  linkText?: string;
  comingSoon?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, icon, link, linkText, comingSoon }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between h-70">
      <div>
        <div className="text-xs text-gray-400 mb-4 tracking-widest">{title}</div>
        <div className="mb-10">{icon}</div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">{description}</h3>
      </div>
      {comingSoon ? (
        <div className="text-gray-500 text-sm">Coming soon</div>
      ) : (
        link && linkText && (
          <a href={link} className="flex items-center text-white hover:underline">
            {linkText}
          </a>
        )
      )}
    </div>
  );
};

const InterchainSection: React.FC = () => {
  return (
    <div className="min-h-auto py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">Join the Interchain.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            title="CONNECT"
            description="Connect chains"
            icon={""}
            link="#"
            linkText="Grow the economy of your chain by connecting to Cosmos Hub services using IBC protocol."
          />
          
          <Card 
            title="INTEGRATE"
            description="Provide services"
            icon={""}
            link="#"
            linkText="Get support to bring users to Cosmos by providing services such as exchanges, wallets, and more."
          />
          
          <Card 
            title="VALIDATE"
            description="Become a validator"
            icon={""}
            link="#"
            linkText="Join the ranks of trusted and decentralized validator operators in the network and help secure the Interchain."
          />
        </div>
      </div>
    </div>
  );
};

export default InterchainSection;
