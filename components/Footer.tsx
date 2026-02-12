
import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div>
            <div className="flex items-center space-x-2 mb-4">
               <span className="text-xl font-black text-white tracking-tighter uppercase">JAWWAD.</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 MrJawwadAli. All rights reserved. Built with Passion.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:zjawwadali@gmail.com" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
