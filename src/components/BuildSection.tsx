const BuildSection = () => {
  return (
    <div className="relative w-full text-white py-16 px-4 overflow-hidden">
      
      <div className="max-w-6xl ml-150">
        {/* Main heading */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6">What will you build?</h1>
          <p className="text-gray-400 max-w-md">
            Developers in Cosmos are the pioneers of the new 
            era of blockchain technology. Join a fast-growing
            token economy and build upon a secure and stable
            foundation.
          </p>
        </div>
        
        {/* Three main sections in grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* DeFi Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-2">Decentralized</h2>
            <h2 className="text-2xl font-bold mb-4">Finance Applications</h2>
            <p className="text-gray-400">
              Create exchanges and marketplaces that
              allow anyone around the world to buy,
              trade, invest, and lend – even without a
              bank account.
            </p>
          </div>
          
          {/* DAO Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-2">Resilient, autonomous</h2>
            <h2 className="text-2xl font-bold mb-4">organizations</h2>
            <p className="text-gray-400">
              Empower your community to organize and
              allocate resources to its members. Vote on
              impactful governance decisions.
            </p>
          </div>
          
          {/* Gaming Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-2">Game economies, owned</h2>
            <h2 className="text-2xl font-bold mb-4">by players</h2>
            <p className="text-gray-400">
              Create in-game assets that are available
              forever. Bring lasting value to gamers by
              letting them take their loot to another
              game or into the real world.
            </p>
          </div>
        </div>
        
        {/* Bottom cards with new layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Developer Portal Card */}
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs text-gray-400 mb-4 tracking-widest">DEVELOPER PORTAL</div>
              <div className="mb-12"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Learn how to<br />build a chain.</h3>
            </div>
            <div className="flex items-center text-gray-400 hover:text-white transition cursor-pointer">
              Get started
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
          
          {/* Fundraising Card */}
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs text-gray-400 mb-4 tracking-widest">FUNDRAISING</div>
              <div className="mb-12"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Get a grant<br />to build.</h3>
            </div>
            <div className="flex items-center text-gray-400 hover:text-white transition cursor-pointer">
              Apply
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildSection;
