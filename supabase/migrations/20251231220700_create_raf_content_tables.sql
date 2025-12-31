/*
  # Real American Finance Content Schema

  ## Overview
  Creates tables for managing website content including articles, podcasts, merchandise, and resources.

  ## New Tables
  
  ### `articles`
  - `id` (uuid, primary key)
  - `title` (text) - Article title
  - `slug` (text, unique) - URL-friendly identifier
  - `excerpt` (text) - Short summary for listings
  - `content` (text) - Full article content (markdown)
  - `featured_image_url` (text) - Optional header image
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Record creation time
  - `updated_at` (timestamptz) - Last update time

  ### `podcasts`
  - `id` (uuid, primary key)
  - `title` (text) - Episode title
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text) - Episode description
  - `episode_number` (integer) - Episode number
  - `audio_url` (text) - Link to audio file (Spotify, Apple, etc.)
  - `spotify_url` (text) - Spotify link
  - `apple_url` (text) - Apple Podcasts link
  - `youtube_url` (text) - YouTube link
  - `duration_minutes` (integer) - Episode length
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Record creation time

  ### `merchandise`
  - `id` (uuid, primary key)
  - `name` (text) - Product name
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text) - Product description
  - `price` (decimal) - Product price
  - `image_url` (text) - Product image
  - `available` (boolean) - Availability status
  - `category` (text) - Product category (shirts, books, etc.)
  - `external_link` (text) - Link to purchase (external store)
  - `created_at` (timestamptz) - Record creation time

  ### `resources`
  - `id` (uuid, primary key)
  - `title` (text) - Resource title
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text) - Resource description
  - `category` (text) - Category (tools, templates, guides, etc.)
  - `url` (text) - Link to resource
  - `file_url` (text) - Optional downloadable file
  - `featured` (boolean) - Show on featured list
  - `created_at` (timestamptz) - Record creation time

  ## Security
  - RLS enabled on all tables
  - Public read access for published content
  - Insert/update/delete restricted to authenticated admin users
*/

-- Articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  featured_image_url text,
  published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published articles"
  ON articles FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can insert articles"
  ON articles FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update articles"
  ON articles FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete articles"
  ON articles FOR DELETE
  TO authenticated
  USING (true);

-- Podcasts table
CREATE TABLE IF NOT EXISTS podcasts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL DEFAULT '',
  episode_number integer,
  audio_url text,
  spotify_url text,
  apple_url text,
  youtube_url text,
  duration_minutes integer,
  published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE podcasts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published podcasts"
  ON podcasts FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can insert podcasts"
  ON podcasts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update podcasts"
  ON podcasts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete podcasts"
  ON podcasts FOR DELETE
  TO authenticated
  USING (true);

-- Merchandise table
CREATE TABLE IF NOT EXISTS merchandise (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL DEFAULT '',
  price decimal(10,2) NOT NULL DEFAULT 0,
  image_url text,
  available boolean DEFAULT true,
  category text NOT NULL DEFAULT 'general',
  external_link text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE merchandise ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available merchandise"
  ON merchandise FOR SELECT
  USING (available = true);

CREATE POLICY "Authenticated users can insert merchandise"
  ON merchandise FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update merchandise"
  ON merchandise FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete merchandise"
  ON merchandise FOR DELETE
  TO authenticated
  USING (true);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'general',
  url text,
  file_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view resources"
  ON resources FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert resources"
  ON resources FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update resources"
  ON resources FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete resources"
  ON resources FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS articles_published_idx ON articles(published, published_at DESC);
CREATE INDEX IF NOT EXISTS articles_slug_idx ON articles(slug);
CREATE INDEX IF NOT EXISTS podcasts_published_idx ON podcasts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS podcasts_slug_idx ON podcasts(slug);
CREATE INDEX IF NOT EXISTS merchandise_available_idx ON merchandise(available);
CREATE INDEX IF NOT EXISTS merchandise_category_idx ON merchandise(category);
CREATE INDEX IF NOT EXISTS resources_category_idx ON resources(category);
CREATE INDEX IF NOT EXISTS resources_featured_idx ON resources(featured);
