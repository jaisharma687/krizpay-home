const OpenEconomy = () => {
  return (
    <div className="min-h-screen flex flex-col px-4 py-16">
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
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs text-gray-400 mb-4 tracking-widest">INTERCHAIN ACCOUNTS</div>
              <div className="mb-12"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">One secure account for all your digital assets.</h3>
            </div>
            <div className="text-gray-500 text-sm">Coming soon</div>
          </div>
          
          {/* Right column - stacked cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Top right card */}
            <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs text-gray-400 mb-4 tracking-widest">DECENTRALIZED EXCHANGE</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Swap tokens & collectibles.</h3>
              </div>
              <div className="text-gray-500 text-sm">Coming soon</div>
            </div>
            
            {/* Bottom cards container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bottom left card */}
              <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-gray-400 mb-4 tracking-widest">LIQUIDITY POOLS</div>
                  <h3 className="text-2xl md:text-3xl  font-bold text-white">Provide liquidity.<br />Earn rewards.</h3>
                </div>
                <div className="text-gray-500 text-sm">Coming soon</div>
              </div>
              
              {/* Bottom right card */}
              <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-gray-400 mb-4 tracking-widest">WRAPPED ETH / BTC</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">+ Ethereum.<br />+ Bitcoin.</h3>
                </div>
                <div className="text-gray-500 text-sm">Coming soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenEconomy;