import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">KASPIRATE</span>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-1">© 2025 KASPIRATE. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="https://x.com/kpratcoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://t.me/kaspiratecoin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;