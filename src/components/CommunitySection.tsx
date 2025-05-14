import { ArrowUpRight, MessageSquare, Twitter, Rocket, MessageCircle } from 'lucide-react';

const CommunitySection = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Meet the worldwide community.
          </h1>
          <p className="text-gray-300 text-lg max-w-md">
            Join a fast-growing community of developers and innovators connected all over the world, building the new era of the internet.
          </p>
          
          <div className="mt-8">
            <a 
              href="#" 
              className="inline-flex items-center text-white group"
            >
              <span className="font-medium mr-2">Community</span>
              <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 space-y-8">
          <CommunityLink 
            icon={<MessageSquare />}
            title="Community Chat"
            description="Ask general questions and chat with the worldwide community on Telegram."
          />
          
          <CommunityLink 
            icon={<Twitter />}
            title="Twitter"
            description="Follow @cosmos to get the latest news and updates from across the ecosystem."
          />
          
          <CommunityLink 
            icon={<MessageCircle />}
            title="Developer Chat"
            description="Have technical questions about Cosmos tools? Ask a developer on the Community Discord."
          />
          
          <CommunityLink 
            icon={<Rocket />}
            title="Cosmos Forum"
            description="Thinking about becoming a validator or interested in network matters? Join the discussion."
          />
        </div>
      </div>
    </div>
  );
};

interface CommunityLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CommunityLink = ({ icon, title, description }: CommunityLinkProps) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 p-1">
        {icon}
      </div>
      <div>
        <a href="#" className="flex items-center text-white group">
          <h3 className="font-medium mr-2">{title}</h3>
          <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <p className="text-gray-400 mt-1 max-w-sm">{description}</p>
      </div>
    </div>
  );
};

export default CommunitySection;