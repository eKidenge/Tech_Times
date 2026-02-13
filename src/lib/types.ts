export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image_url: string;
  published_at: string;
  created_at: string;
  featured: boolean;
}

export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: BlogPost;
        Insert: Omit<BlogPost, 'id' | 'created_at'>;
        Update: Partial<Omit<BlogPost, 'id' | 'created_at'>>;
      };
    };
  };
}
