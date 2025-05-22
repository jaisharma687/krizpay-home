import { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import DIV from '../assets/div.svg';
import COIN from '../assets/coin.svg';
import radial from '../assets/svg (1).svg';

interface CosmosCardProps {
  category: string;
  title: string;
  description: string;
  link: string;
  variant: 'learn' | 'stake' | 'discover';
  image?: string;
}

const CosmosCard = ({
  category,
  title,
  description,
  link,
  variant,
  image,
}: CosmosCardProps) => {
  const isStake = variant === 'stake';
  const [imageState, setImageState] = useState<'div' | 'coin' | 'transitioningBack'>('div');
  const [hovering, setHovering] = useState(false);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHovering(true);
    enterTimer.current = setTimeout(() => {
      setImageState('coin');
    }, 200);
  };

  const handleMouseLeave = () => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
    setHovering(false);
    leaveTimer.current = setTimeout(() => {
      setImageState('transitioningBack');
      setTimeout(() => {
        setImageState('div');
      }, 500);
    }, 1000);
  };

  const currentImage = imageState === 'div' ? DIV : COIN;

  // Custom Learn Card
  if (variant === 'learn') {
    return (
     <div 
      className="relative rounded-[20px] p-6 w-[350px] h-[450px] overflow-hidden shadow-xl group"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
     >
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Radial Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 transition-all duration-[2041ms] ease-in-out group-hover:scale-110 group-hover:opacity-90">
        <img 
          src={radial || "/placeholder.svg"} 
          alt="Radial Background" 
          className="w-full h-full object-cover opacity-70 brightness-125 contrast-125 group-hover:brightness-[1.6] group-hover:contrast-[1.6]"
        />
      </div>

      {/* Glowing Orbit Gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          className="absolute top-0 left-0 opacity-30 transition-all duration-[2041ms] ease-in-out group-hover:opacity-50 group-hover:scale-105"
        >
          <defs>
            <radialGradient id="orbitGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6B21A8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.05" />
            </radialGradient>
          </defs>
          <ellipse
            cx="200"
            cy="200"
            rx="180"
            ry="100"
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Small top-right orb */}
      <div className={`small-orb absolute top-[-1px] right-10 w-10 h-10 rounded-full bg-[radial-gradient(circle_at_bottom_left,_#BA55D3_10%,_black_60%)] z-10 transition-all duration-[2013ms] ease-in-out group-hover:brightness-125 group-hover: bg-[radial-gradient(circle_at_bottom_left,_#BA55D3_30%,_black_70%)] ${hovering ? 'animate-smallSphere' : ''}`} />

      {/* Large Orb animating along orbit */}
      <div className={`large-orb absolute z-10 w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle_at_top,_#BA55D3_10%,_black_80%)] shadow-2xl bottom-[60px] right-[-20px] transition-all duration-[2013ms] ease-in-out ${hovering ? 'animate-orbitPath' : ''}`} />

      {/* Content */}
      <div className="relative z-20 mt-[230px] transition-all duration-[2013ms] ease-in-out group-hover:scale-[1.02]">
        <p className="text-xs font-semibold uppercase text-white/70">Learn</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 flex items-center gap-2">
          Welcome to
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 flex items-center gap-2">
          Cosmos 
          <ArrowRight size={20} />
        </h2>
        <p className="text-sm text-white/60 mt-2">
          Read the vision of Cosmos and learn about the powerful blockchain technology that makes it possible.
        </p>
      </div>

      {/* Custom CSS for orbit animation */}
      <style>
        {`
          @keyframes orbitPath {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(-280px, -130px) scale(1);
            }
          }
          @keyframes smallSphere {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(40px, 90px) scale(1);
            } 
          }
          .animate-smallSphere {
            animation: smallSphere 4s ease-in-out forwards;         
          }
          .animate-orbitPath {
            animation: orbitPath 4s ease-in-out forwards;
          }
        `}
      </style>
    </div>
    );
  }
  
  // Discover Card (Updated to match image exactly with 3D sphere)
  if (variant === 'discover') {
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`
        relative rounded-[20px] w-[350px] h-[450px] overflow-hidden shadow-xl
        transition-all duration-[2041ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${hovering ? 
'bg-black text-white':'bg-black text-[#d4d4d4]'}
      `}
    >
      {/* Orbit Rings */}
      <div
        className={`
          absolute inset-0 pointer-events-none transition-opacity duration-[2041ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${hovering ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <svg width="100%" height="100%" viewBox="0 0 320 450" className="opacity-20">
          <ellipse cx="160" cy="225" rx="280" ry="170" fill="none" stroke="white" strokeWidth="0.5" />
          <ellipse cx="160" cy="225" rx="220" ry="130" fill="none" stroke="white" strokeWidth="0.5" />
          <ellipse cx="160" cy="225" rx="160" ry="90" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Blue Planet */}
      <div
        className={`
          absolute top-[100px] left-[-50px] transition-opacity duration-[2041ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${hovering ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div className="relative w-[230px] h-[230px] rounded-full overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-700 to-black z-10" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-black opacity-40" />
          <div className="absolute top-[20px] left-[10px] w-[60px] h-[60px] rounded-full bg-blue-500 blur-md opacity-30" />
          <div className="absolute top-[90px] left-[10px] w-[40px] h-[40px] rounded-full bg-blue-400 blur-sm opacity-20" />
        </div>
      </div>

      {/* Moon Sphere */}
      <div
        className={`
          absolute top-[94px] right-[50px] transition-opacity duration-[2041ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${hovering ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div className="relative w-[40px] h-[40px] rounded-full">
          <div className="absolute inset-0 rounded-full bg-gray-500" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-600 to-black z-10 opacity-50" />
          <div className="absolute top-[5px] left-[10px] w-[10px] h-[10px] rounded-full bg-gray-300 blur-sm opacity-50" />
        </div>
      </div>

      {/* Sun Glow */}
      <div
        className={`
          absolute bottom-[180px] right-[20px] transition-opacity duration-[2041ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${hovering ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div className="w-[140px] h-[140px] rounded-full bg-orange-600 blur-2xl opacity-70" />
        <div className="absolute inset-0 w-[100px] h-[100px] rounded-full bg-yellow-500 blur-xl opacity-80" />
        <div className="absolute top-[30px] left-[30px] w-[40px] h-[40px] rounded-full bg-yellow-300 blur-md opacity-90" />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-10 transition-all duration-[2041ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        <p className={`text-sm font-medium uppercase tracking-wider mb-2 transition-colors duration-[2041ms] ${hovering ? 'text-white/80' : 'text-gray-400'}`}>
          DISCOVER
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 flex items-center gap-2">
          Explore the
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 flex items-center gap-2">
          ecosystem <ArrowRight size={20} />
        </h2>
        <p className={`text-sm mt-2 transition-colors duration-[2041ms] ${hovering ? 'text-white/70' : 'text-white/60'}`}>
          Browse the ever-expanding, diverse collection of apps, services, and tools built on Cosmos to date.
        </p>
      </div>
    </div>
  );
}

// Stake Card
return (
  <div
    onMouseEnter={isStake ? handleMouseEnter : undefined}
    onMouseLeave={isStake ? handleMouseLeave : undefined}
    className={`relative rounded-2xl overflow-hidden flex flex-col h-[450px] w-[350px] p-8 transition-all duration-500
      ${isStake
        ? hovering
          ? 'bg-white text-black ease-out'
          :'bg-black text-white':'bg-black text-[#d4d4d4]'
      }
      group
    `}
  >
    {/* Card Content */}
    <div className="relative z-20 flex flex-col flex-grow justify-end transition-colors duration-300 ease-in-out">
      <a href={link}
        className={`text-xs mb-4 tracking-widest transition-colors ${
          isStake
            ? hovering
              ? 'text-black'
              : 'text-white'
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
      </a>

      {/* Image */}
      <div className="flex justify-center">
        {isStake ? (
          <img
            key={imageState} 
            src={currentImage || "/placeholder.svg"}
            alt="Stake Image"
            className={`w-80 h-[180px] mb-4 object-contain ${
              imageState === 'transitioningBack' ? 'animate-bounce' : ''
            }`}
          />
        ) : (
          image && (
            <img
              src={image || "/placeholder.svg"}
              alt={`${category} image`}
              className="mb-4 w-80 h-[200px] object-contain rounded-lg"
            />
          )
        )}
      </div>
      <p className="text-xs font-semibold uppercase text/70">{category}</p>
      {/* Title + Arrow */}
      <a href={link} className="group flex items-center mb-2 w-fit cursor-pointer">
        <h3
          className={`text-2xl md:text-3xl font-bold transition-colors ${
            isStake
              ? hovering
                ? 'text-black'
                : 'text-white'
              : 'text-white'
          }`}
        >
          {title}
        </h3>
        <ArrowRight
          size={20}
          className={`ml-1 transform transition-transform group-hover:translate-x-1 ${
            isStake
              ? hovering
                ? 'text-black'
                : 'text-white'
              : 'text-white'
          }`}
        />
      </a>
      {/* Description */}
      <p
        className={`text-sm transition-colors ${
          isStake
            ? hovering
              ? 'text-black/60'
              : 'text-gray-300/60'
            : 'text-gray-300/60'
        }`}
      >
        {description}
      </p>
    </div>
  </div>
);
};

const EnterCosmosSection = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center p-4 py-16 relative overflow-hidden">
      {/* Purple Gradient Background for the entire section */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      <div className="container mx-auto max-w-6xl z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Enter the Cosmos</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you're a developer, token holder, or new to it all, there's a place for everyone in Cosmos.
          </p>
        </div>
        <div  style={{ background: 'radial-gradient(ellipse at center, rgba(180,70,200,0.6) 0%, rgba(0,0,0,0.9) 70%)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} className="w-full h-[450px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CosmosCard
            category="LEARN"
            title="Welcome to Cosmos"
            description="Read the vision of Cosmos and learn about the powerful blockchain technology that makes it possible."
            link="#"
            variant="learn"
          />
          <CosmosCard
            category="STAKE"
            title="Discover the ATOM"
            description="ATOM secures and governs the Cosmos Hub, the first blockchain in the Cosmos Network."
            link="#"
            variant="stake"
          />
          <CosmosCard
            category="DISCOVER"
            title="Explore the ecosystem"
            description="Browse the ever-expanding, diverse collection of apps, services, and tools built on Cosmos to date."
            link="#"
            variant="discover"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default EnterCosmosSection;