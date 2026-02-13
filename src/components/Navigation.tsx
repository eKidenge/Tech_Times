import { Newspaper } from 'lucide-react';

const categories = [
  'Latest',
  'Startups',
  'Venture',
  'Apple',
  'Security',
  'AI',
  'Apps',
  'Events',
  'Podcasts',
  'Newsletters'
];

interface NavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Navigation({ activeCategory, onCategoryChange }: NavigationProps) {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Newspaper className="w-8 h-8 text-emerald-400" />
            <h1 className="text-2xl font-bold tracking-tight">THE TECH TIMES</h1>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide py-3 space-x-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
