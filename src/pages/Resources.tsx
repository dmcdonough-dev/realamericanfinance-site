import { useEffect, useState } from 'react';
import { supabase, Resource } from '../lib/supabase';

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    async function fetchResources() {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (!error && data) {
        setResources(data);
      }
      setLoading(false);
    }

    fetchResources();
  }, []);

  const categories = ['all', ...Array.from(new Set(resources.map(item => item.category)))];
  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-heading font-bold mb-8 text-white">Resources</h1>
          <p className="text-xl text-gray-300">
            Tools, templates, and guides to support your financial journey.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center text-gray-400">Loading resources...</div>
          ) : resources.length === 0 ? (
            <div className="text-center">
              <div className="bg-navy-800 p-12 rounded-xl max-w-2xl mx-auto">
                <h2 className="text-2xl font-heading font-bold mb-4 text-white">Coming Soon</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Comprehensive resources are being developed including downloadable templates, worksheets, and strategic guides.
                </p>
                <p className="text-gray-400 mb-6">
                  Planned resources include:
                </p>
                <ul className="text-left max-w-md mx-auto text-gray-300 space-y-2">
                  <li>• Iron Pot Millionaire workbook</li>
                  <li>• Wealth Architecture diagram and templates</li>
                  <li>• Scenario Planning playbooks</li>
                  <li>• Budget tracking spreadsheets</li>
                  <li>• Financial goal-setting frameworks</li>
                  <li>• Recommended books and tools</li>
                </ul>
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
                {filteredResources.map((resource) => (
                  <div
                    key={resource.id}
                    className={`bg-navy-800 p-8 rounded-xl shadow hover:shadow-2xl transition ${
                      resource.featured ? 'ring-2 ring-crimson' : ''
                    }`}
                  >
                    {resource.featured && (
                      <div className="text-crimson font-semibold mb-2 text-sm uppercase tracking-wide">Featured</div>
                    )}
                    <h2 className="text-2xl font-heading font-bold mb-3 text-white">{resource.title}</h2>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <div className="text-sm text-gray-500 mb-4 capitalize">{resource.category}</div>

                    <div className="flex gap-3">
                      {resource.url && (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-crimson hover:bg-red-700 text-white text-center px-4 py-2 rounded-lg font-semibold transition"
                        >
                          View
                        </a>
                      )}
                      {resource.file_url && (
                        <a
                          href={resource.file_url}
                          download
                          className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center px-4 py-2 rounded-lg font-semibold transition"
                        >
                          Download
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
