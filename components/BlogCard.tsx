
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="group">
      <div className="bg-[#121212] rounded-3xl overflow-hidden border border-white/5 h-full flex flex-col hover:border-blue-400/30 transition-colors">
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center space-x-2 text-gray-500 text-xs mb-4">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-6 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
            <span>Read Story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
