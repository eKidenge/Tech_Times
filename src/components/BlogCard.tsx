import { Clock, User } from 'lucide-react';
import type { BlogPost } from '../lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const timeAgo = new Date(post.published_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 hover:text-emerald-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
