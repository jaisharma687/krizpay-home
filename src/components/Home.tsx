import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-[200vh] relative overflow-hidden flex flex-col justify-start items-center text-white text-center px-4 pt-40">
      {/* Main background with gradient */}
      <div className="absolute inset-0" 
           style={{ 
             background: 'linear-gradient(135deg, #0A0118 0%, #1A0B2E 35%, #2E0B2E 70%, #3D1A1A 100%)'
           }}>

        {/* Blue glow with dark circle */}
        <div className="absolute w-[200px] h-[200px] left-[0%] top-[30%]"
             style={{
               background: '#0A0118',
               borderRadius: '50%',
               boxShadow: '0 0 150px 60px rgba(99, 149, 255, 0.4)',
               filter: 'blur(2px)',
               opacity: 0.9
             }} />

        {/* Additional ambient blue glow */}
        <div className="absolute w-[500px] h-[500px] left-[5%] top-[15%]"
             style={{
               background: 'radial-gradient(circle at center, rgba(99, 149, 255, 0.15) 0%, transparent 70%)',
               filter: 'blur(50px)'
             }} />

        {/* Orange gradient blob */}
        <div className="absolute w-[400px] h-[400px] right-[-50px] bottom-[-50px]"
             style={{
               background: 'radial-gradient(circle at center, #2E0B2E 0%, #FF7E00 100%)',
               filter: 'blur(100px)',
               opacity: 0.4,
               transform: 'rotate(-15deg)'
             }} />

        {/* Dark purple blob - bottom left */}
        <div className="absolute w-[75px] h-[75px] left-[8%] bottom-[40%] rounded-full"
             style={{
               background: 'radial-gradient(circle at 30% 30%, #4A1466 0%, #2E0B2E 60%, #1A0B2E 100%)',
               filter: 'blur(2px)',
               boxShadow: 'inset -12px -12px 24px rgba(0,0,0,0.6)'
             }} />

        {/* Glow effects */}
        <div className="absolute w-[600px] h-[600px] right-[10%] top-[40%]"
             style={{
               background: 'radial-gradient(circle at center, rgba(255, 126, 0, 0.2) 0%, rgba(255, 94, 7, 0.15) 30%, transparent 70%)',
               filter: 'blur(100px)'
             }} />

        {/* Purple circle - bottom left */}
        <div className="absolute w-[100px] h-[100px] left-[25%] bottom-[-40vh] rounded-full"
             style={{
               background: 'radial-gradient(circle at center, #4A1466 0%, #2E0B2E 100%)',
               filter: 'blur(2px)',
               opacity: 0.9
             }} />

        {/* Orange circle with bitcoin - bottom right */}
        <div className="absolute w-[150px] h-[150px] right-[25%] bottom-[-45vh] rounded-full"
             style={{
               background: 'radial-gradient(circle at 30% 30%, #FF7E00 0%, #CC5500 100%)',
               filter: 'blur(1px)',
               boxShadow: 'inset 12px 12px 24px rgba(255,255,255,0.2)',
               opacity: 0.9
             }}>
          {/* Bitcoin symbol */}
          <div className="absolute inset-0 flex items-center justify-center text-[60px] font-bold text-white opacity-30">
            ₿
          </div>
        </div>
      </div>

      {/* Content section with moon */}
      <div className="z-20 max-w-[700px] relative">
        {/* Black circle in left corner */}
        <div className="absolute -left-20 -top-20 w-[150px] h-[150px] rounded-full"
             style={{
               background: '#0A0118',
             }}>
        </div>

        {/* Right side moons */}
        <div className="absolute right-[-80px] top-[-20px] w-[100px] h-[100px] rounded-full"
             style={{
               background: 'radial-gradient(circle at 30% 30%, #3D1A1A 0%, #2E0B2E 60%, #1A0B2E 100%)',
               filter: 'blur(1px)',
               opacity: 0.9,
               boxShadow: 'inset -8px -8px 16px rgba(0,0,0,0.8), 0 0 40px rgba(255, 126, 0, 0.2)',
               transform: 'rotate(225deg)'
             }} />
        
        <div className="absolute right-[-130px] top-[80px] w-[60px] h-[60px] rounded-full"
             style={{
               background: 'radial-gradient(circle at 30% 30%, #3D1A1A 0%, #2E0B2E 60%, #1A0B2E 100%)',
               filter: 'blur(1px)',
               opacity: 0.9,
               boxShadow: 'inset -8px -8px 16px rgba(0,0,0,0.8)',
               transform: 'rotate(225deg)'
             }} />

        {/* Large dark circle with icon */}
        <div className="absolute right-[-180px] top-[150px] w-[200px] h-[200px] rounded-full flex items-center justify-center"
             style={{
               background: ' rgba(24, 11, 2, 0.8)',
               boxShadow: 'inset 0 0 40px rgba(255,255,255,0.1)'
             }}>
          {/* Hourglass icon */}
          <div className="w-[40px] h-[40px] relative">
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '50%',
              top: 0,
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background: '#64ffda'
            }} />
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '50%',
              bottom: 0,
              clipPath: 'polygon(50% 0, 0 100%, 100% 100%)',
              background: '#64ffda'
            }} />
          </div>
        </div>

        <h1 className="text-[80px] leading-[1.1] font-bold mb-6 tracking-tight">
          Build on the<br />
          Interchain.
        </h1>

        {/* New gradient circles */}
        <div className="absolute left-[-50px] top-[150%] z-10">
          {/* Dark purple circle */}
          <div className="absolute -top-48 w-20 h-20 rounded-full bg-gradient-to-br from-[#0a0015] to-[#5d2070] blur-[1px]"></div>
          {/* Blue gradient circle */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-[#3a6fa7] via-[#7166e0] to-[#c2b1fc] shadow-[inset_20px_0px_60px_#ffffff30]"></div>
        </div>
          {/* Dark blue circle */}
          <div className="absolute top-200 left-[-300px] w-48 h-48 rounded-full bg-gradient-to-br from-[#001f2e] to-[#004e75] blur-[0.5px] flex items-center justify-center overflow-hidden"></div>
          <div className="absolute -top-60 left-[-50px] w-20 h-20 rounded-full bg-gradient-to-br from-[#0a0015] to-[#5d2070] blur-[1px]"></div>

        {/* Orange Bitcoin circle with purple circles - right side */}
        <div className="absolute right-[-250px] top-[150%] z-10 flex items-start gap-8">
          {/* Purple gradient circle */}
          <div className="relative right-[95px] w-20 h-20 rounded-full bg-gradient-to-br from-[#4a0078] to-[#1c0036] shadow-[inset_0_0_30px_#00000080]">
            {/* Inner subtle shadow */}
            <div className="absolute inset-0 rounded-full bg-black opacity-20 blur-2xl pointer-events-none" />
          </div>
          
          <div className="relative">
            {/* Orange Bitcoin circle */}
            <div className="relative w-38 h-38 rounded-full bg-gradient-to-br from-[#f98b3b] to-[#fb6648] shadow-[0_0_40px_#ff814b88] flex items-center justify-center overflow-hidden">
              <span className="text-[48px] font-bold text-black opacity-20 select-none">₿</span>
              <div className="absolute w-full h-full rounded-full bg-white opacity-10 blur-2xl"></div>
            </div>
            
            {/* Purple gradient circle below */}
            <div className="relative right-[-100px] top-[20px] w-20 h-20 rounded-full bg-gradient-to-br from-[#4a0078] to-[#1c0036] shadow-[inset_0_0_30px_#00000080] mt-8">
              {/* Inner subtle shadow */}
              <div className="absolute inset-0 rounded-full bg-black opacity-20 blur-2xl pointer-events-none" />
            </div>

            {/* Dark purple Binance circle */}
            <div className="relative right-[100px] top-[20px] w-48 h-48 rounded-full bg-gradient-to-br from-[#1a001a] to-[#24004b] shadow-[inset_-20px_-20px_60px_#000000a0] overflow-hidden mt-8">
              {/* Binance symbol */}
              <span className="absolute top-[60px] left-[80px] text-[40px] font-bold text-[#e19f5c] opacity-10 select-none">◧</span>
              {/* Top-left glow */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Complete elliptical circles around teal glow */}
        <div className="absolute left-1/2 top-[150%] -translate-x-1/2 pointer-events-none">
          {/* Small circle */}
          <div className="absolute w-[800px] h-[400px] left-[-400px] top-[-200px]"
               style={{
                 border: '1px solid rgba(255, 255, 255, 0.4)',
                 borderRadius: '50%',
                 transform: 'scale(1, 0.5) rotate(70deg)',
               }} />
          {/* Medium circle */}
          <div className="absolute w-[1200px] h-[600px] left-[-600px] top-[-300px]"
               style={{
                 border: '1px solid rgba(255, 255, 255, 0.25)',
                 borderRadius: '50%',
                 transform: 'scale(1, 0.5) rotate(70deg)',
               }} />
          {/* Large circle */}
          <div className="absolute w-[2000px] h-[1000px] left-[-1000px] top-[-600px]"
               style={{
                 border: '1px solid rgba(255, 255, 255, 0.15)',
                 borderRadius: '50%',
                 transform: 'scale(1, 0.5) rotate(70deg)',
               }} />
        </div>

        {/* Outer violet glow effect */}
        <div className="absolute left-1/2 top-[95%] -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none"
             style={{
               background: 'radial-gradient(ellipse at center, rgba(238, 48, 241, 0.35) 0%, rgba(190, 24, 255, 0.15) 45%, transparent 75%)',
               filter: 'blur(30px)',
               zIndex: -1
             }} />
        {/* Inner teal glow */}
        <div className="absolute left-1/2 top-[120%] -translate-x-1/2 w-[200px] h-[200px] pointer-events-none"
             style={{
               background: 'radial-gradient(circle at center, rgba(3, 248, 252, 0.8) 0%, rgba(3, 248, 252, 0.3) 30%, transparent 60%)',
               filter: 'blur(5px)',
               zIndex: -1
             }} />

        {/* Glowing violet circle with cyan rim */}
        <div className="absolute left-50 top-[170%] -translate-x-1/2">
          <div className="relative w-15 h-15 rounded-full bg-[#7000b8] ">
            {/* Blue rim light */}
            <div className="absolute -top-2 -left-4 w-20 h-20 rounded-full bg-cyan-400 opacity-30 blur-2xl pointer-events-none"></div>
          </div>
        </div>

        <p className="text-xl text-gray-300 font-light max-w-[600px] mx-auto relative mb-20">
          Build a blockchain using the best-in-class open source libraries and services.
        </p>
      </div>
    </div>
  );
};

export default Home;
