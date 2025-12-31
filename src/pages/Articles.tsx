import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase, Article } from '../lib/supabase';

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (!error && data) {
        setArticles(data);
      }
      setLoading(false);
    }

    fetchArticles();
  }, []);

  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-heading font-bold mb-8 text-white">Articles & Insights</h1>
          <p className="text-xl text-gray-300">
            Deep-dive insights on financial discipline, minimalism, and long-term strategy.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center text-gray-400">Loading articles...</div>
          ) : articles.length === 0 ? (
            <div className="text-center">
              <div className="bg-navy-800 p-12 rounded-xl max-w-2xl mx-auto">
                <h2 className="text-2xl font-heading font-bold mb-4 text-white">Coming Soon</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Articles are being prepared. Check back soon for disciplined financial insights and strategic thinking.
                </p>
                <p className="text-gray-400">
                  In the meantime, explore the frameworks to get started building your financial system.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.slug}`}
                  className="bg-navy-800 rounded-xl overflow-hidden shadow hover:shadow-2xl transition group"
                >
                  {article.featured_image_url && (
                    <div className="h-48 bg-navy-900 overflow-hidden">
                      <img
                        src={article.featured_image_url}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-heading font-bold mb-3 text-white group-hover:text-crimson transition">
                      {article.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                    <div className="text-sm text-gray-500">
                      {new Date(article.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
