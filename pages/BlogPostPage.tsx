
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-400 hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-bold text-sm uppercase tracking-widest">Back to Journal</span>
        </Link>

        <article className="max-w-4xl mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-3xl mb-12 grayscale-[0.3]"
          />

          <div className="flex items-center space-x-6 text-gray-500 mb-8 border-b border-white/5 pb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">{post.author}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 leading-[1.1]">
            {post.title}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split('\n').map((line, i) => {
              if (line.trim().startsWith('##')) {
                return <h2 key={i} className="text-3xl font-bold text-white mt-12 mb-6">{line.replace('##', '').trim()}</h2>;
              }
              if (line.trim().startsWith('###')) {
                return <h3 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{line.replace('###', '').trim()}</h3>;
              }
              if (line.trim().startsWith('-')) {
                return <li key={i} className="text-gray-300 ml-6 mb-2">{line.replace('-', '').trim()}</li>;
              }
              if (line.trim() === '') return <br key={i} />;
              return <p key={i} className="text-gray-400 text-lg leading-relaxed mb-6">{line}</p>;
            })}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
