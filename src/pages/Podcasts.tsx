import { useEffect, useState } from 'react';
import { supabase, Podcast } from '../lib/supabase';

export default function Podcasts() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPodcasts() {
      const { data, error } = await supabase
        .from('podcasts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (!error && data) {
        setPodcasts(data);
      }
      setLoading(false);
    }

    fetchPodcasts();
  }, []);

  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-navy-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-heading font-bold mb-8 text-white">The Real American Finance Podcast</h1>
          <p className="text-xl text-gray-300 mb-8">
            Conversations on money, mindset, and building financial autonomy. No fluff. No hype. Just discipline and strategy.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5v-9l7.5 4.5-7.5 4.5z"/>
              </svg>
              Apple Podcasts
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C15.9 4.5 12 4.5 12 4.5h-.1s-3.9 0-6.9.4c-.4 0-1.3.1-2.1.9C2.2 6.5 2 8 2 8S1.8 9.6 1.8 11.3v1.4C1.8 14.4 2 16 2 16s.2 1.5.8 2.2c.8.8 1.9.8 2.4.9 1.8.2 7.8.4 7.8.4s3.9 0 6.9-.4c.4 0 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.6.2-3.3v-1.4c0-1.7-.2-3.3-.2-3.3zM10 14.7V9.3l5.2 2.7z"/>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center text-gray-400">Loading episodes...</div>
          ) : podcasts.length === 0 ? (
            <div className="text-center">
              <div className="bg-navy-800 p-12 rounded-xl max-w-2xl mx-auto">
                <h2 className="text-2xl font-heading font-bold mb-4 text-white">Coming Soon</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Podcast episodes are in production. Subscribe to the newsletter to be notified when the first episode drops.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {podcasts.map((podcast) => (
                <div key={podcast.id} className="bg-navy-800 p-8 rounded-xl shadow hover:shadow-2xl transition">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-grow">
                      {podcast.episode_number && (
                        <div className="text-crimson font-semibold mb-2">Episode {podcast.episode_number}</div>
                      )}
                      <h2 className="text-2xl font-heading font-bold mb-3 text-white">{podcast.title}</h2>
                      <p className="text-gray-300 mb-4">{podcast.description}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        {podcast.duration_minutes && (
                          <span>{podcast.duration_minutes} min</span>
                        )}
                        <span>
                          {new Date(podcast.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-2">
                      {podcast.spotify_url && (
                        <a
                          href={podcast.spotify_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                        >
                          Spotify
                        </a>
                      )}
                      {podcast.apple_url && (
                        <a
                          href={podcast.apple_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                        >
                          Apple
                        </a>
                      )}
                      {podcast.youtube_url && (
                        <a
                          href={podcast.youtube_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                        >
                          YouTube
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
