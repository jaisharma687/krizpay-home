// import React from 'react';
import MediumIcon from '../assets/medium.svg';
import XIcon from '../assets/x.svg';
import RedditIcon from '../assets/reddit.svg';
import TelegramIcon from '../assets/telegram.svg';
import DiscordIcon from '../assets/discord.svg';
import YoutubeIcon from '../assets/youtube.svg';

const Footer = () => {
  const footerLinks = {
    learn: {
      title: 'Learn',
      links: [
        { name: 'Introduction', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Staking', href: '#' },
        { name: 'Get ATOM', href: '#' },
        { name: 'FAQ', href: '#' },
      ]
    },
    build: {
      title: 'Build',
      links: [
        { name: 'Developer Portal', href: '#' },
        { name: 'Ignite CLI', href: '#' },
        { name: 'Cosmos SDK', href: '#' },
        { name: 'IBC Protocol', href: '#' },
      ]
    },
    explore: {
      title: 'Explore',
      links: [
        { name: 'Tokens', href: '#' },
        { name: 'Apps & Services', href: '#' },
        { name: 'Wallets', href: '#' },
        { name: 'Gravity DEX', href: '#' },
        { name: 'Blog', href: '#' },
      ]
    },
    participate: {
      title: 'Participate',
      links: [
        { name: 'Community', href: '#' },
        { name: 'Contributors', href: '#' },
        { name: 'Events', href: '#' },
        { name: 'Newsletters', href: '#' },
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'About', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Design', href: '#' },
        { name: 'Resources', href: '#' },
      ]
    }
  };

  return (
    <footer className="text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Email Subscription */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-16 text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-1 w-70">Receive transmissions</h3>
            <p className="text-sm text-gray-400">
              Unsubscribe at any time. <a href="#" className="underline">Privacy policy</a>
            </p>
          </div>
          <div className="flex w-full max-w-70">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 md:w-80 px-4 py-3 bg-zinc-900/50 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-white/20"
            />
            <button className="px-6 py-3 bg-zinc-900/50 rounded-r-lg border-l border-white/10 hover:bg-zinc-800/50 transition-colors">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-40 mb-16">
        {Object.values(footerLinks).map((section) => (
          <div key={section.title} className="text-left">
            <h4 className="font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span>{link.name}</span>
                    <svg className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12L12 4M6 4h6v6" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div></div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white"><img src={MediumIcon} alt="Medium" className="h-6 w-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white"><img src={XIcon} alt="X" className="h-6 w-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white"><img src={RedditIcon} alt="Reddit" className="h-6 w-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white"><img src={TelegramIcon} alt="Telegram" className="h-6 w-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white"><img src={DiscordIcon} alt="Discord" className="h-6 w-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white"><img src={YoutubeIcon} alt="YouTube" className="h-6 w-6" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;