import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-[200vh] relative overflow-hidden flex flex-col justify-start items-center text-white text-center px-2 sm:px-4 pt-24 sm:pt-40 bg-black">
      {/* Main background with gradient */}
      <div className="absolute inset-0"
           style={{
             background: '#000'
           }}>

        {/* Black vignette for cosmos border blending */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)',
            mixBlendMode: 'multiply'
          }}
        />

        {/* Blue glow with dark circle */}
        <div className="absolute w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] left-[0%] top-[20%] sm:top-[30%]"
             style={{
               background: '#0A0118',
               borderRadius: '50%',
               boxShadow: '0 0 80px 30px rgba(99, 149, 255, 0.4)',
               filter: 'blur(2px)',
               opacity: 0.9
             }} />

        {/* Additional ambient blue glow */}
        <div className="absolute w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] left-[5%] top-[10%] sm:top-[15%]"
             style={{
               background: 'radial-gradient(circle at center, rgba(99, 149, 255, 0.15) 0%, transparent 70%)',
               filter: 'blur(30px)'
             }} />

        {/* Orange gradient blob */}
        <div className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] right-[-100px] sm:right-[-220px] top-[120%] sm:top-[150%] z-0"
             style={{
               background: 'radial-gradient(circle at center, #2E0B2E 0%, #FF7E00 100%)',
               filter: 'blur(60px)',
               opacity: 0.4,
             }} />

        {/* Dark purple blob - bottom left */}
        <div className="absolute w-[40px] h-[40px] sm:w-[75px] sm:h-[75px] left-[8%] bottom-[30%] sm:bottom-[40%] rounded-full"
             style={{
               background: 'radial-gradient(circle at 30% 30%, #4A1466 0%, #2E0B2E 60%, #1A0B2E 100%)',
               filter: 'blur(2px)',
               boxShadow: 'inset -12px -12px 24px rgba(0,0,0,0.6)'
             }} />

        {/* Glow effects */}
        <div
          className="absolute right-10 w-[1000px] h-[2200px] sm:w-[1000px] sm:h-[2600px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255, 85, 0, 0.45) 0%, rgba(180, 60, 0, 0.35) 30%, rgba(80, 20, 0, 0.5) 70%, rgba(0,0,0,0.8) 100%)',
            filter: 'blur(80px)',
            bottom: '10%'
          }}
        />

        {/* Purple circle - bottom left */}
        <div className="absolute w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] left-[25%] bottom-[-20vh] sm:bottom-[-40vh] rounded-full"
             style={{
               background: 'radial-gradient(circle at center, #4A1466 0%, #2E0B2E 100%)',
               filter: 'blur(2px)',
               opacity: 0.9
             }} />

        {/* Orange circle with bitcoin - bottom right */}
        <div className="absolute w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] right-[25%] bottom-[-25vh] sm:bottom-[-45vh] rounded-full"
             style={{
               background: 'radial-gradient(circle at 30% 30%, #FF7E00 0%, #CC5500 100%)',
               filter: 'blur(1px)',
               boxShadow: 'inset 12px 12px 24px rgba(255,255,255,0.2)',
               opacity: 0.9
             }}>
          {/* Bitcoin symbol */}
          <div className="absolute inset-0 flex items-center justify-center text-[32px] sm:text-[60px] font-bold text-white opacity-30">
            ₿
          </div>
        </div>

        {/* Tapered glowing line (water drop effect) 1 */}
        <div
          className="absolute"
          style={{
            left: '40%',
            top: '48%',
            width: '40px',
            height: '8px',
            background: 'linear-gradient(90deg, rgba(0,255,255,0.0) 0%, cyan 60%, #fff 100%)',
            clipPath: 'polygon(0 60%, 0% 0, 100% 100%, 0 60%)',
            boxShadow: '0 0 8px 2px #fff',
            transform: 'rotate(-40deg) translate(-50%, -50%)',
            opacity: 0.8,
            filter: 'blur(0.2px)',
            zIndex: 10,
          }}
        />
        {/* Tapered glowing line (water drop effect) 2 */}
        <div
          className="absolute"
          style={{
            left: '52%',
            top: '52%',
            width: '90px',
            height: '10px',
            background: 'linear-gradient(90deg, rgba(0,255,255,0.0) 0%, cyan 60%, #fff 100%)',
            clipPath: 'polygon(0 60%, 0% 0, 100% 100%, 0 60%)',
            boxShadow: '0 0 12px 3px #fff',
            transform: 'rotate(-145deg) translate(-50%, -50%)',
            opacity: 0.7,
            filter: 'blur(0.2px)',
            zIndex: 10,
          }}
        />
      </div>

      {/* Content section with moon */}
      <div className="z-20 max-w-[95vw] sm:max-w-[700px] relative">
        {/* Black circle in left corner */}
        <div className="absolute -left-10 sm:-left-20 -top-10 sm:-top-20 w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-full"
             style={{
               background: '#0A0118',
             }}>
        </div>

        {/* Right side moons */}
        <div className="absolute right-[-40px] sm:right-[-80px] top-[-10px] sm:top-[-20px] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-full"
             style={{
               background: 'radial-gradient(circle at 30% 30%, #3D1A1A 0%, #2E0B2E 60%, #1A0B2E 100%)',
               filter: 'blur(1px)',
               opacity: 0.9,
               boxShadow: 'inset -8px -8px 16px rgba(0,0,0,0.8), 0 0 40px rgba(255, 126, 0, 0.2)',
               transform: 'rotate(225deg)'
             }} />
        
        <div className="absolute right-[-65px] sm:right-[-130px] top-[40px] sm:top-[80px] w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] rounded-full"
             style={{
               background: 'radial-gradient(circle at 30% 30%, #3D1A1A 0%, #2E0B2E 60%, #1A0B2E 100%)',
               filter: 'blur(1px)',
               opacity: 0.9,
               boxShadow: 'inset -8px -8px 16px rgba(0,0,0,0.8)',
               transform: 'rotate(225deg)'
             }} />

   {/* Large dark circle with icon */}
<div className="absolute right-[-90px] sm:right-[-180px] top-[75px] sm:top-[150px] w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] rounded-full flex items-center justify-center"
  style={{
    background: 'radial-gradient(circle at center, #2B1930 0%, #150A17 100%)',
    boxShadow: 'inset 0 0 40px rgba(0, 255, 255, 0.05)'
  }}
>
        {/* Helarious logo icon */}
        <div className="relative w-[20px] h-[40px] sm:w-[40px] sm:h-[80px]">
          
      {/* Top triangle */}
      <div className="absolute top-0 left-5 w-0 h-0"
            style={{
              borderLeft: '20px solid transparent',
              borderRight: '0px solid transparent',
              borderBottom: '40px solid rgb(8, 97, 64)',
              transform: 'translateY(0) rotate(50deg)',
              mixBlendMode: 'screen',
              opacity: 0.9
            }}
          />
          {/* Bottom triangle */}
          <div className="absolute bottom-2 left- w-0 h-0"
            style={{
              borderLeft: '20px solid transparent',
              borderRight: '0px solid transparent',
              borderTop: '40px solid rgb(9, 79, 65)',
              transform: 'translateY(0) rotate(68deg)',
              filter: 'drop-shadow(0 4px 4px rgba(46, 60, 61, 0.8))',
              opacity: 0.9
            }}
          />
       </div>
       </div>


        <h1 className="text-[32px] sm:text-[80px] leading-[1.1] font-bold mb-6 tracking-tight">
          Build on the<br />
          Interchain.
        </h1>

        {/* New gradient circles */}
        <div className="absolute left-[-20px] sm:left-[-50px] top-[120%] sm:top-[150%] z-10">
          {/* Dark purple circle */}
          <div className="absolute -top-24 sm:-top-48 w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#0a0015] to-[#5d2070] blur-[1px]"></div>
          {/* Blue gradient circle */}
          <div className="w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-[#3a6fa7] via-[#7166e0] to-[#c2b1fc] shadow-[inset_20px_0px_60px_#ffffff30]"></div>
        </div>
          {/* Dark blue circle */}
          <div className="absolute top-100 sm:top-200 left-[-150px] sm:left-[-300px] w-24 h-24 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#001f2e] to-[#004e75] blur-[0.5px] flex items-center justify-center overflow-hidden">
            {/* Hexagon centered inside the circle */}
            <div
              className="w-[50px] h-[30px] sm:w-[60px] sm:h-[58px] bg-[#1f395f]"
              style={{
                clipPath:
                  "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              }}
            ></div>
            </div>
          <div className="absolute -top-32 sm:-top-60 left-[-25px] sm:left-[-50px] w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#0a0015] to-[#5d2070] blur-[1px]"></div>

        {/* Orange Bitcoin circle with purple circles - right side */}
        <div className="absolute right-[-120px] sm:right-[-250px] top-[120%] sm:top-[150%] z-10 flex items-start gap-4 sm:gap-8">
          {/* Purple gradient circle */}
          <div className="relative right-[45px] sm:right-[95px] w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#4a0078] to-[#1c0036] shadow-[inset_0_0_30px_#00000080]">
            {/* Inner subtle shadow */}
            <div className="absolute inset-0 rounded-full bg-black opacity-20 blur-2xl pointer-events-none" />
          </div>
          
          <div className="relative">
            {/* Orange Bitcoin circle */}
            <div
              className="relative w-20 h-20 sm:w-38 sm:h-38 rounded-full bg-gradient-to-br from-[#f98b3b] to-[#fb6648] flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '50px 0 200px 100px #ff7e00, 0 0 120px 40px #fb6648',
              }}
            >
              <span className="text-[28px] sm:text-[48px] font-bold text-black opacity-20 select-none">₿</span>
              <div className="absolute w-full h-full rounded-full bg-white opacity-10 blur-2xl"></div>
            </div>
            
            {/* Purple gradient circle below */}
            <div
              className="relative right-[-50px] sm:right-[-100px] top-[10px] sm:top-[20px] w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#4a0078] to-[#1c0036] shadow-[inset_0_0_30px_#00000080] mt-4 sm:mt-8"
              style={{
                boxShadow: '300px 50px 300px 150px #ff7e00,0 100px 190px 100px #fb6648',
              }}
            >
              {/* Inner subtle shadow */}
              <div className="absolute inset-0 rounded-full bg-black opacity-20 blur-2xl pointer-events-none" />
            </div>

            {/* Dark purple Binance circle */}
            <div className="relative right-[50px] sm:right-[100px] top-[10px] sm:top-[20px] w-24 h-24 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#1a001a] to-[#24004b] shadow-[inset_-20px_-20px_60px_#000000a0] overflow-hidden mt-4 sm:mt-8">
              {/* Binance symbol */}
              <span className="absolute top-[30px] sm:top-[60px] left-[40px] sm:left-[80px] text-[20px] sm:text-[40px] font-bold text-[#e19f5c] opacity-10 select-none">◧</span>
              {/* Top-left glow */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-16 h-16 sm:w-32 sm:h-32 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Complete elliptical circles around teal glow */}
        <div className="absolute left-1/2 top-[120%] sm:top-[150%] -translate-x-1/2 pointer-events-none">
          {/* Small circle */}
          <div className="absolute w-[400px] h-[200px] sm:w-[800px] sm:h-[400px] left-[-200px] sm:left-[-400px] top-[-100px] sm:top-[-200px]"
               style={{
                 border: '1px solid rgba(255, 255, 255, 0.4)',
                 borderRadius: '50%',
                 transform: 'scale(1, 0.5) rotate(70deg)',
               }} />
          {/* Medium circle */}
          <div className="absolute w-[600px] h-[300px] sm:w-[1200px] sm:h-[600px] left-[-300px] sm:left-[-600px] top-[-150px] sm:top-[-300px]"
               style={{
                 border: '1px solid rgba(255, 255, 255, 0.25)',
                 borderRadius: '50%',
                 transform: 'scale(1, 0.5) rotate(70deg)',
               }} />
          {/* Large circle */}
          <div className="absolute w-[1000px] h-[500px] sm:w-[2000px] sm:h-[1000px] left-[-500px] sm:left-[-1000px] top-[-300px] sm:top-[-600px]"
               style={{
                 border: '1px solid rgba(255, 255, 255, 0.15)',
                 borderRadius: '50%',
                 transform: 'scale(1, 0.5) rotate(70deg)',
               }} />
        </div>

        {/* Outer violet glow effect */}
        <div className="absolute left-1/2 top-[50%] sm:top-[40%] -translate-x-1/2 w-[700px] h-[750px] sm:w-[1500px] sm:h-[700px] pointer-events-none"
             style={{
               background: 'radial-gradient(ellipse at center, rgba(255, 87, 244, 0.7) 0%, rgba(60, 0, 80, 0.5) 45%, rgba(30, 0, 40, 0.7) 75%, rgba(0,0,0,0.9) 100%)',
               filter: 'blur(30px)',
               zIndex: -1
             }} />
        {/* Inner teal glow */}
        <div className="absolute left-1/2 top-[80%] sm:top-[120%] -translate-x-1/2 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] pointer-events-none"
             style={{
               background: 'radial-gradient(circle at center, rgba(3, 248, 252, 0.8) 0%, rgba(3, 248, 252, 0.3) 30%, transparent 60%)',
               filter: 'blur(5px)',
               zIndex: -1
             }} />

        {/* Glowing violet circle with cyan rim */}
        <div className="absolute left-50 top-[120%] sm:top-[170%] -translate-x-1/2">
          <div className="relative w-8 h-8 sm:w-15 sm:h-15 rounded-full bg-[#7000b8] ">
            {/* Blue rim light */}
            <div className="absolute -top-1 sm:-top-2 -left-2 sm:-left-4 w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-cyan-400 opacity-30 blur-2xl pointer-events-none"></div>
          </div>
        </div>

        <p className="text-base sm:text-xl text-gray-300 font-light max-w-[90vw] sm:max-w-[600px] mx-auto relative mb-10 sm:mb-20">
          Build a blockchain using the best-in-class open source libraries and services.
        </p>
      </div>
    </div>
  );
};

export default Home;
