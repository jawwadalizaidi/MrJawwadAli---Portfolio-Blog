
import React from 'react';
import { BLOG_POSTS } from '../data';
import BlogCard from '../components/BlogCard';

const BlogListPage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">JOURNAL.</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Thoughts, explorations, and insights into the intersection of technology and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
