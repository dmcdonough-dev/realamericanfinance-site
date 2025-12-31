import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, Article } from '../lib/supabase';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!slug) return;

      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (!error && data) {
        setArticle(data);
      }
      setLoading(false);
    }

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-white">Article Not Found</h1>
          <Link to="/articles" className="text-crimson hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <article className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl">
          <Link to="/articles" className="text-crimson hover:underline mb-8 inline-block">
            ← Back to Articles
          </Link>

          {article.featured_image_url && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={article.featured_image_url}
                alt={article.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          <h1 className="text-5xl font-heading font-bold mb-4 text-white">{article.title}</h1>

          <div className="text-gray-400 mb-8">
            {new Date(article.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
              {article.content}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
