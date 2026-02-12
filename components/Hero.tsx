
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Available for 2024 Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-12 tracking-tighter"
          >
            CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">DIGITAL</span><br />EXPERIENCES.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
          >
            I am a Senior Frontend Engineer & Designer focused on building high-performance, visually stunning web applications that push the boundaries of what's possible in a browser.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-all flex items-center justify-center space-x-2 group active:scale-95 glow"
            >
              <span>View My Work</span>
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all active:scale-95"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
