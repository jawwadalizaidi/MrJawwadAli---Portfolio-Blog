
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { TECH_STACK } from '../data';

const TechMarquee: React.FC = () => {
  // Fixed: Explicitly marked repeatType and ease as constants to match Framer Motion's literal union types (RepeatType and Easing)
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <div className="py-20 border-y border-white/5 overflow-hidden bg-black/20">
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => {
          const IconComponent = (Icons as any)[tech.icon];
          return (
            <div key={index} className="flex items-center space-x-4 mx-12">
              {IconComponent && <IconComponent className="w-8 h-8 text-blue-400 opacity-70" />}
              <span className="text-3xl font-black text-white/20 uppercase tracking-tighter">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
