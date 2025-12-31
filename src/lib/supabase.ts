import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url?: string;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
};

export type Podcast = {
  id: string;
  title: string;
  slug: string;
  description: string;
  episode_number?: number;
  audio_url?: string;
  spotify_url?: string;
  apple_url?: string;
  youtube_url?: string;
  duration_minutes?: number;
  published: boolean;
  published_at: string;
  created_at: string;
};

export type Merchandise = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image_url?: string;
  available: boolean;
  category: string;
  external_link?: string;
  created_at: string;
};

export type Resource = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  url?: string;
  file_url?: string;
  featured: boolean;
  created_at: string;
};
