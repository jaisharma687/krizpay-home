import React, { useState } from 'react'; 
import backgroundImage from '../assets/background_interchain.png';
import connectIcon from '../assets/connect-icon.png';
import integrateIcon from '../assets/integrate-icon.png';
import validateIcon from '../assets/validate-icon.png';

const cards = [
  {
    tag: 'Connect',
    title: 'Connect chains ↗',
    desc: 'Grow the economy of your chain by connecting to Cosmos Hub services using IBC protocol.',
    icon: connectIcon,
  },
  {
    tag: 'Integrate',
    title: 'Provide services ↗',
    desc: 'Get support to bring users to Cosmos by providing services such as exchanges, wallets, and more.',
    icon: integrateIcon,
  },
  {
    tag: 'Validate',
    title: 'Become a validator ↗',
    desc: 'Join the ranks of trusted and decentralized validator operators in the network and help secure the Interchain.',
    icon: validateIcon,
  },
];

const sectionContainerStyle: React.CSSProperties = {
  position: 'relative',
  color: 'white',
  padding: '680px 24px 200px 24px', // ⬅️ increased top padding to push content down
  overflow: 'hidden',
  textAlign: 'center',
  fontFamily: 'Inter, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '1000px'
};


const glowStyle: React.CSSProperties = {
  position: 'absolute',
  width: '500px',
  height: '500px',
  background: 'radial-gradient(circle, rgba(0,255,150,0.4) 0%, transparent 70%)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  filter: 'brightness(1.3) saturate(1.4)',
  zIndex: 0,
};

const backgroundOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // Fixed the incorrect 0.0x5 to valid RGBA
  zIndex: 1,
};

const headerTextStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 2,
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '58px',
  marginBottom: '0px',
  // ❌ REMOVE THIS LINE:
  // marginTop: '420px',
};


const cardsContainerStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  gap: '40px',
  padding: '40px 0 0 0',
  maxWidth: '1180px',
  margin: '0 auto',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#121212',
  borderRadius: '12px',
  padding: '24px',
  width: '310px',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  cursor: 'default',
  outline: 'none',
  color: '#FFFFFF',
};

const cardHoverStyle: React.CSSProperties = {
  backgroundColor: '#1F1F1F',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0, 255, 150, 0.15)',
};

const cardTagStyle: React.CSSProperties = {
  textTransform: 'uppercase',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#6B7280',
  marginBottom: '8px',
  letterSpacing: '0.08em',
};

const cardTitleStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#FFFFFF',
  marginBottom: '8px',
  cursor: 'pointer',
};

const cardDescStyle: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#D1D5DB',
};

const iconStyle: React.CSSProperties = {
  marginTop: '24px',
  width: '24px',
  height: '24px',
  alignSelf: 'flex-start',
  filter: 'none',
};

const InterChainSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section style={sectionContainerStyle}>
      <div style={backgroundOverlayStyle} />
      <div style={glowStyle} />
      <h2 style={headerTextStyle}>Join the Interchain.</h2>
      <div style={cardsContainerStyle}>
        {cards.map(({ tag, title, desc, icon }, idx) => (
          <div
            key={idx}
            style={hoveredIndex === idx ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
            onMouseOver={() => setHoveredIndex(idx)}
            onMouseOut={() => setHoveredIndex(null)}
            tabIndex={0}
            aria-label={`${title} card`}
            onFocus={() => setHoveredIndex(idx)}
            onBlur={() => setHoveredIndex(null)}
          >
            <div>
              <p style={cardTagStyle}>{tag}</p>
              <h3 style={cardTitleStyle} tabIndex={0} role="link" aria-label={`${title} link`}>
                {title}
              </h3>
              <p style={cardDescStyle}>{desc}</p>
            </div>
            <img src={icon} alt={`${tag} icon`} style={iconStyle} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterChainSection;
