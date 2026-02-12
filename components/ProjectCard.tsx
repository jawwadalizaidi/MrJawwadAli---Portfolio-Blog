
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-[#121212] rounded-3xl overflow-hidden border border-white/5"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
        />
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/5 text-[10px] font-bold text-blue-400 rounded-full border border-white/5 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            className="flex items-center space-x-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center space-x-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
