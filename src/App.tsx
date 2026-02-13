import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import type { BlogPost } from './lib/types';
import Navigation from './components/Navigation';
import HeroSlider from './components/HeroSlider';
import BlogCard from './components/BlogCard';

function App() {
  const [activeCategory, setActiveCategory] = useState('Latest');
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [categoryPosts, setCategoryPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  useEffect(() => {
    fetchCategoryPosts();
  }, [activeCategory]);

  async function fetchFeaturedPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('featured', true)
      .order('published_at', { ascending: false });

    if (!error && data) {
      setFeaturedPosts(data);
    }
    setLoading(false);
  }

  async function fetchCategoryPosts() {
    setLoading(true);
    let query = supabase
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false });

    if (activeCategory !== 'Latest') {
      query = query.eq('category', activeCategory);
    }

    const { data, error } = await query;

    if (!error && data) {
      setCategoryPosts(data);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {activeCategory === 'Latest' && <HeroSlider posts={featuredPosts} />}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {activeCategory === 'Latest' ? 'Latest Stories' : activeCategory}
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
          </div>
        ) : categoryPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-600 text-lg">
              No posts found in this category yet.
            </p>
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">THE TECH TIMES</h3>
            <p className="text-slate-400 mb-6">
              Your trusted source for technology news and insights.
            </p>
            <p className="text-slate-500 text-sm">
              © 2026 The Tech Times. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
