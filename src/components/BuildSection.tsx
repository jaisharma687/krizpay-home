import React from "react";
import BuildSectionBG from "../assets/BuildSectionBG.png";
import devPortalImg from "../assets/devPortalImg.png";
import fundraisingImg from "../assets/fundraisingImg.png";

const BuildSection = () => {
  return (
    <div
      className="relative w-full text-white"
      style={{
        backgroundImage: `url(${BuildSectionBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center relative z-10">
        {/* Title Section */}
        <h1 className="text-5xl font-bold mb-6">What will you build?</h1>
<div className="w-full max-w-2xl text-left mb-16">
  <p className="text-gray-400 text-base leading-relaxed">
    Developers in Cosmos are the pioneers of the new era of blockchain technology.
    Join a fast-growing token economy and build upon a secure and stable foundation.
  </p>
</div>


        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 max-w-4xl mx-auto mb-20 text-left">
          <div className="w-72 text-sm leading-relaxed">
            <h2 className="text-lg font-semibold mb-1 text-white">
              Decentralized Finance Applications
            </h2>
            <p className="text-gray-400">
              Create exchanges and marketplaces that allow anyone around the world to buy, trade, invest, and lend – even without a bank account.
            </p>
          </div>

          <div className="w-72 text-sm leading-relaxed">
            <h2 className="text-lg font-semibold mb-1 text-white">
              Resilient, autonomous organizations
            </h2>
            <p className="text-gray-400">
              Empower your community to organize and allocate resources to its members. Vote on impactful governance decisions.
            </p>
          </div>

          <div className="w-72 text-sm leading-relaxed">
            <h2 className="text-lg font-semibold mb-1 text-white">
              Game economies, owned by players
            </h2>
            <p className="text-gray-400">
              Create in-game assets that are available forever. Bring lasting value to gamers by letting them take their loot to another game or into the real world.
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24">
          {/* Developer Portal Card (slightly lowered) */}
          <div className="bg-zinc-900/70 backdrop-blur-md p-6 rounded-2xl w-72 shadow-lg translate-y-6">
            <div className="text-xs text-gray-400 mb-3 tracking-widest">
              DEVELOPER PORTAL
            </div>
            <img
              src={devPortalImg}
              alt="Developer Portal"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold leading-tight">
              Learn how to <br /> build a chain.
            </h3>
            <div className="flex items-center justify-center text-gray-400 hover:text-white mt-4 cursor-pointer">
              Get started
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Fundraising Card (raised higher) */}
          <div className="bg-zinc-900/70 backdrop-blur-md p-6 rounded-2xl w-72 shadow-lg -translate-y-16">
            <div className="text-xs text-gray-400 mb-3 tracking-widest">
              FUNDRAISING
            </div>
            <img
              src={fundraisingImg}
              alt="Fundraising"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold leading-tight">
              Get a grant <br /> to build.
            </h3>
            <div className="flex items-center justify-center text-gray-400 hover:text-white mt-4 cursor-pointer">
              Apply
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildSection;
