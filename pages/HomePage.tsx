
import React from 'react';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import { PROJECTS, BLOG_POSTS } from '../data';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a]">
      <Hero />
      <TechMarquee />

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 block">Selected Projects</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">WORK THAT SPEAKS.</h2>
            </div>
            <p className="text-gray-400 max-w-sm mt-6 md:mt-0">
              Handpicked collection of digital products where design meets high-end engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-32 bg-[#0c0c0c] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4 block">Knowledge Share</span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">LATEST ARTICLES.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deep dives into technology, UI patterns, and the future of creative coding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">READY TO START A PROJECT?</h2>
            <p className="text-2xl text-gray-400 mb-12 font-light">
              I'm always looking for new challenges and interesting collaborations.
            </p>
            <a
              href="mailto:zjawwadali@gmail.com"
              className="inline-block px-12 py-6 bg-white text-black text-xl font-bold rounded-full hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105 active:scale-95"
            >
              zjawwadali@gmail.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
