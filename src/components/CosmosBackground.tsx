import React from 'react';
import COIN1 from '../assets/coin1.svg'
import COIN2 from '../assets/coin2.svg'

interface CosmosBackgroundProps {
  children: React.ReactNode;
}

const CosmosBackground: React.FC<CosmosBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
        {/* Orange planet */}
        <div 
            className="absolute w-[200px] h-[200px] left-[15%] top-[22%] z-0" 
            style={{ 
                background: '#F6690F', 
                borderRadius: '100%', 
                boxShadow: '0 0 100px 200px rgba(246, 105, 15, 0.95), 0 0 50px 100px rgba(246, 105, 15, 0.5), 0 0 100px 150px rgba(246, 105, 15, 0.2)', 
                opacity: 1 
            }} 
            />

        {/* Purple gradient  - left side */}
        <div 
            className="absolute w-[1000px] h-[1000px] left-[20%] top-[25%] z-5"
            style={{
                background: 'radial-gradient(circle at center, rgba(146, 52, 171, 0.6) 0%, rgba(146, 52, 171, 0.8) 100%)',
                filter: 'blur(100px)',
                opacity: 0.5,
                borderRadius: '50%',
            }} 
            />

        <div 
            className="absolute w-[1200px] h-[1200px] left-[-10%] top-[20%] z-5"
            style={{
                background: 'radial-gradient(circle at center, rgba(146, 52, 171, 0.6) 0%, rgba(146, 52, 171, 0.8) 100%)',
                filter: 'blur(100px)',
                opacity: 0.5,
                borderRadius: '50%',
            }} 
            />

        {/* Gradient planet */}
        <div className="absolute left-[38%] top-[35%] z-10">
            <div className="w-30 h-30 rounded-full bg-gradient-to-br from-[#c2b1fc] via-[#7166e0] to-[#3a6fa7] shadow-[inset_20px_0px_60px_#ffffff30]"></div>
        </div>

        {/* Blue planet */}
        <div className="absolute left-[16%] top-[44%] w-30 h-30 rounded-full flex items-center justify-center overflow-hidden z-10"
            style={{
                background: "#A5FBFF",
                borderRadius: '100%', 
                boxShadow: '0 0 100px 150px rgba(165, 251, 255, 1),   0 0 100px 200px rgba(102, 128, 255, 0.5)', 
                opacity: 0.9 
            }}
            >
        </div>

        {/* Elliptical rings - positioned to be visible */}
            <div className="absolute left-[20%] top-[50%] -translate-x-1/2 pointer-events-none z-[1]">
            {/* Small ring */}
            <div className="absolute w-[1000px] h-[500px] left-[-470px] top-[-240px]"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '50%',
                    transform: 'scale(1, 0.5) rotate(40deg)',
                    transformOrigin: 'center center',
                }} />
            {/* Medium ring */}
            <div className="absolute w-[1500px] h-[750px] left-[-700px] top-[-350px]"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '50%',
                    transform: 'scale(1, 0.5) rotate(40deg)',
                    transformOrigin: 'center center',
                }} />
            {/* Large ring */}
            <div className="absolute w-[2000px] h-[1000px] left-[-1000px] top-[-500px]"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                    transform: 'scale(1, 0.5) rotate(40deg)',
                    transformOrigin: 'center center',
                }} />
            </div>
            
        {/* Coin left */}
        <div className="absolute z-15 left-[15%] top-[60%]">
            <img src={COIN1} alt="Coin 1" className="h-100 object-contain" />
        </div>

        {/* Coin right */}
        <div className="absolute z-15 left-[70%] top-[75%]">
            <img src={COIN2} alt="Coin 1" className="h-100 object-contain" />
        </div>

        {/*Bottom circle*/}
        <div className="absolute left-[-75%] top-[95%] w-[250%] h-[50%] rounded-full flex items-center justify-center overflow-hidden z-10"
            style={{
                background: "#000",
                borderRadius: '100%', 
                boxShadow: '0 0 100px 150px rgba(38, 38, 41, 1),   0 0 100px 200px rgba(38, 38, 41, 0.5)', 
                opacity: 0.9 
            }}
            >
        </div>

        {/* Content container */}
        <div className="relative z-20">
            {children}
        </div>
    </div>
    );
};

export default CosmosBackground;