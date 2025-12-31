import { useEffect, useState } from 'react';
import { supabase, Merchandise } from '../lib/supabase';

export default function Merch() {
  const [merchandise, setMerchandise] = useState<Merchandise[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    async function fetchMerchandise() {
      const { data, error } = await supabase
        .from('merchandise')
        .select('*')
        .eq('available', true)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setMerchandise(data);
      }
      setLoading(false);
    }

    fetchMerchandise();
  }, []);

  const categories = ['all', ...Array.from(new Set(merchandise.map(item => item.category)))];
  const filteredMerch = selectedCategory === 'all'
    ? merchandise
    : merchandise.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-heading font-bold mb-8 text-white">Merch Store</h1>
          <p className="text-xl text-gray-300">
            Represent the discipline. Support the mission. Build the life.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center text-gray-400">Loading products...</div>
          ) : merchandise.length === 0 ? (
            <div className="text-center">
              <div className="bg-navy-800 p-12 rounded-xl max-w-2xl mx-auto">
                <h2 className="text-2xl font-heading font-bold mb-4 text-white">Coming Soon</h2>
                <p className="text-lg text-gray-300 mb-6">
                  The Real American Finance merch store is launching soon. Quality products that represent discipline,
                  autonomy, and long-term thinking.
                </p>
                <p className="text-gray-400">
                  Subscribe to the newsletter to be notified when the store opens.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-lg font-semibold capitalize transition ${
                      selectedCategory === category
                        ? 'bg-crimson text-white'
                        : 'bg-navy-800 text-gray-300 hover:bg-navy-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMerch.map((item) => (
                  <div key={item.id} className="bg-navy-800 rounded-xl overflow-hidden shadow hover:shadow-2xl transition">
                    {item.image_url && (
                      <div className="h-64 bg-navy-900 overflow-hidden">
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h2 className="text-2xl font-heading font-bold text-white">{item.name}</h2>
                        <span className="text-crimson font-bold text-xl">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      {item.external_link && (
                        <a
                          href={item.external_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-crimson hover:bg-red-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition"
                        >
                          Buy Now
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
