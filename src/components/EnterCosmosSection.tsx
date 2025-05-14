import React from 'react';
import { ArrowRight } from 'lucide-react';

const EnterCosmosSection = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center p-4 py-16 relative overflow-hidden">
      
      <div className="container mx-auto max-w-6xl z-10">
        {/* Heading section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Enter the Cosmos</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you're a developer, token holder, or new to it all, there's a place for everyone in Cosmos.
          </p>
        </div>
        
        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CosmosCard 
            category="LEARN"
            title="Welcome to Cosmos"
            description="Read the vision of Cosmos and learn about the powerful blockchain technology that makes it possible."
            imageSpaceholder={true}
            link="#"
          />
          
          <CosmosCard 
            category="STAKE"
            title="Discover the ATOM"
            description="ATOM secures and governs the Cosmos Hub, the first blockchain in the Cosmos Network."
            imageSpaceholder={true}
            link="#"
          />
          
          <CosmosCard 
            category="DISCOVER"
            title="Explore the ecosystem"
            description="Browse the ever-expanding, diverse collection of apps, services, and tools built on Cosmos to date."
            imageSpaceholder={true}
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

interface CosmosCardProps {
  category: string;
  title: string;
  description: string;
  imageSpaceholder: boolean;
  link: string;
}

const CosmosCard = ({ category, title, description, imageSpaceholder, link }: CosmosCardProps) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col h-full">
      {/* Image placeholder - you'll replace this */}
      <div className="aspect-square w-full relative">
        {/* This div serves as a placeholder for your images */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* You'll replace this entire div with your actual images */}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="text-xs text-gray-400 mb-4 tracking-widest">
          {category}
        </div>
        
        <div className="flex items-start mb-6 group">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </h3>
          <ArrowRight 
            size={18} 
            className="ml-2 mt-2 transform group-hover:translate-x-1 transition-transform"
          />
        </div>
        
        <p className="text-gray-400 mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EnterCosmosSection;