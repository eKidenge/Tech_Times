/*
  # Create Blog Posts Table for THE TECH TIMES

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each post
      - `title` (text) - Post title
      - `excerpt` (text) - Short description/preview
      - `content` (text) - Full post content
      - `category` (text) - Post category (Latest, Startups, Venture, Apple, Security, AI, Apps, Events, Podcasts, Newsletters)
      - `author` (text) - Author name
      - `image_url` (text) - Featured image URL
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz) - Creation timestamp
      - `featured` (boolean) - Whether post should appear in hero slider

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access (blog is public)
    - Authenticated users can insert/update posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  author text NOT NULL DEFAULT 'Tech Times Editorial',
  image_url text NOT NULL,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  featured boolean DEFAULT false
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);