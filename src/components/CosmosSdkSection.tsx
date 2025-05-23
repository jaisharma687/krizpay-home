import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import hex from '../assets/hex.svg'
import diamond from '../assets/diamond.svg'
import alpha from '../assets/alpha.svg'
import coinsHover from '../assets/coinsHover.svg'
import coinsNotHover from '../assets/coinsNotHover.svg'
import styled, { keyframes } from 'styled-components';

const topDown = keyframes`
  0% { transform: translateY(0); }
  33% { transform: translateY(-20px); }
  66% { transform: translateY(20px); }
  100% { transform: translateY(0); }
`;

const leftRight = keyframes`
  0% { transform: translateX(0); }
  33% { transform: translateX(-20px); }
  66% { transform: translateX(20px); }
  100% { transform: translateX(0); }
`;

// Create styled components
const AnimatedDiamond = styled.img`
  animation: ${topDown} 3s ease-in-out infinite;
  transition: all 0.5s;
  
  &:hover {
    transform: translateY(0px);
  }
`;

const AnimatedAlpha = styled.img`
  animation: ${leftRight} 3s ease-in-out infinite;
  transition: all 0.5s;
  
  &:hover {
    transform: translateX(0px);
  }
`;

const CosmosSdkSection = () => {
  return (
    <div className='relative overflow-hidden'>
    <div className="min-h-screen flex flex-col px-4 py-16 z-10">
      <div className="max-w-5xl w-full mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Be part of the open<br />economy of the future.
        </h1>
        <div className="flex items-center gap-2 mb-12">
          <a href="#" className="text-gray-300 flex items-center group">
            Powerful features
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left tall card */}
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between h-full z-10 hover:bg-white group transition-colors duration-300 relative overflow-hidden">
          <div >
            <div className="text-xs text-gray-400 mb-4 tracking-widest group-hover:text-gray-700 transition-colors duration-300 ">
              INTERCHAIN ACCOUNTS
            </div>
            <div className='flex flex-row items-center gap-10 my-20 justify-center'>
              <div className="z-15">
              <AnimatedDiamond src={diamond} alt="Diamond" />
            </div>
            <div className="z-15 ">
              <AnimatedAlpha src={alpha} alt="Alpha" className='group-hover:brightness-0'/>
            </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-zinc-900 transition-colors duration-300">
              One secure account for all your digital assets.
            </h3>
          </div>
          <div className="text-gray-500 text-sm group-hover:text-zinc-700 transition-colors duration-300">
            Coming soon
          </div>
        </div>

          
          {/* Right column - stacked cards */}
          <div className="grid grid-cols-1 gap-6 z-10">
            {/* Top right card */}
            <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between hover:bg-white group duration-300 transition-colors">
  <div>
    <div className="text-xs text-gray-400 mb-4 tracking-widest group-hover:text-gray-700 duration-300 transition-colors">DECENTRALIZED EXCHANGE</div>
    <div className='flex flex-row'>
      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-zinc-900 duration-300 transition-colors">Swap tokens & collectibles.</h3>
      <div className="">
        <img 
          src={coinsNotHover}
          className="transition-all duration-300 ease-in-out group-hover:scale-105 cursor-pointer group-hover:hidden"
          alt="Coins"
        />
        <img 
          src={coinsHover}
          className="transition-all duration-300 ease-in-out group-hover:scale-105 cursor-pointer hidden group-hover:block"
          alt="Coins Hover"
        />
      </div>
    </div>
  </div>
  <div className="text-gray-500 text-sm group-hover:text-zinc-700 transition-colors duration-300">Coming soon</div>
</div>

            
            {/* Bottom cards container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
              {/* Bottom left card */}
              <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between hover:bg-white group duration-300 transition-colors">
                <div>
                  <div className="text-xs text-gray-400 mb-4 tracking-widest group-hover:text-gray-700 duration-300 transition-colors">LIQUIDITY POOLS</div>
                  <h3 className="text-2xl md:text-3xl  font-bold text-white group-hover:text-gray-900 duration-300 transition-colors">Provide liquidity.<br />Earn rewards.</h3>
                </div>
                <div className="text-gray-500 text-sm group-hover:text-gray-700 duration-300 transition-colors">Coming soon</div>
              </div>
              
              {/* Bottom right card */}
              <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between z-10 hover:bg-white group duration-300 transition-colors">
                <div>
                  <div className="text-xs text-gray-400 mb-4 tracking-widest group-hover:text-gray-700 duration-300 transition-colors">WRAPPED ETH / BTC</div>
                  <div className='flex flex-col mt-10'>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gray-900 duration-300 transition-colors">+ Ethereum.</h3>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gray-900 duration-300 transition-colors">+ Bitcoin.</h3>
                  </div>
                  
                </div>
                <div className="text-gray-500 text-sm group-hover:text-gray-700 duration-300 transition-colors">Coming soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Blue planet*/}
    <div className="absolute left-[60%] top-[35%] w-96 h-96 rounded-full flex items-center justify-center overflow-visible z-0"
        style={{
            background: "#A5FBFF",
            borderRadius: '100%', 
            boxShadow: '0 0 50px 75px rgba(165, 251, 255, 1), 0 0 200px 250px rgba(91, 118, 232, 0.7), 0 0 200px 500px rgba(68, 21, 74, 0.7)', 
            opacity: 0.9 
        }}
      >
    <div className="absolute w-[1100px] h-[2200px] left-[-95%] top-[-240%]"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '50%',
                    transform: 'scale(1, 0.5) rotate(0deg)',
                    transformOrigin: 'center center',
                    opacity: 0.5 
    }} />
    <div className="absolute w-[800px] h-[1600px] left-[-55%] top-[-160%]"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '50%',
                    transform: 'scale(1, 0.5) rotate(0deg)',
                    transformOrigin: 'center center',
                    opacity: 0.5 
    }} />
    <div className="absolute z-15 left-[16%] top-[-20%]">
            <img src={hex} alt="Hex Pattern" className="h-60 object-contain" />
        </div>
    </div>
    <div className="min-h-screen text-white px-4 py-16 z-10 mt-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16  z-10">
          <div className="text-sm text-gray-400 mb-4 z-10">TECHNOLOGY</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 z-10">
            The most trusted<br />way to build value.
          </h1>
          <div className="max-w-lg">
            <p className="text-lg mb-4">
              <span className="font-semibold">Cosmos SDK</span> is a state-of-the-art blockchain 
              framework that powers the Cosmos Hub and its 
              rapidly expanding orbit of sovereign chains.
            </p>
            <p className="text-lg">
              Developers can use the SDK to build innovative 
              applications that create value through exchange 
              with the Cosmos Hub.
            </p>
          </div>
        </div>
        
        <div className="mb-20">
          {/* Proof of Stake */}
          <div className="mb-12 pl-200">
            <div className="text-sm text-gray-400 mb-4">PROOF-OF-STAKE</div>
            <div className="flex items-end">
              <span className="text-7xl md:text-9xl font-bold">99%</span>
              <div className="ml-4 mb-2">
                <div className="text-xl">lower</div>
                <div className="text-xl">carbon</div>
                <div className="text-xl">footprint</div>
              </div>
            </div>
            <div className="text-gray-400 mt-4">Blockchain tech that truly scales.</div>
          </div>
          
          {/* Transaction Stats - horizontal layout */}
          <div className="grid grid-cols-2 gap-8 mt-30 mb-50">
            {/* Low Fees */}
            <div>
              <div className="text-sm text-gray-400 mb-4">LOW FEES</div>
              <div className="text-6xl md:text-9xl font-bold">$0.01</div>
            </div>
            
            {/* Fast Transactions */}
            <div>
              <div className="text-sm text-gray-400 mb-4">FAST TRANSACTIONS</div>
              <div className="text-6xl md:text-9xl font-bold">7 sec</div>
              <div className="text-gray-400 mt-4">Transactions confirmed in seconds.</div>
            </div>
          </div>
        </div>
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
          {/* Project Card */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col justify-end relative h-72">
            {/* Card Image */}
            <img 
                src={card1} 
                alt="Your project deserves its own blockchain" 
                className="absolute inset-0 w-full h-full object-cover"
                />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10 p-8">
              <h3 className="text-3xl font-bold mb-4">Your project deserves<br />its own block chain</h3>
              <a href="#" className="inline-flex items-center text-lg">
                Start building
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          
          {/* Academy Card */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col justify-end relative h-72">
            {/* Card Image */}
            <img 
                src={card2} 
                alt="Dive deep into the Cosmos SDK" 
                className="absolute inset-0 w-full h-full object-cover"
                />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="relative z-10 p-8">
              <div className="text-sm text-gray-400 mb-2">COSMOS ACADEMY</div>
              <h3 className="text-3xl font-bold mb-4">Dive deep into<br />the Cosmos SDK</h3>
              <a href="#" className="inline-flex items-center text-lg">
                Get started
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CosmosSdkSection;
