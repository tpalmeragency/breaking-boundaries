'use client';
import { Episode } from '../types/audio';
import { useEpisodeStore } from '../stores/useEpisodeStore';
import EpisodeCard from './EpisodeCard';
import { useEffect } from 'react';
import { ChevronRight, ChevronDown, Search } from 'lucide-react';

const categories = [
  { name: 'Health and Wellness', color: 'border-blue-500/50 shadow-blue-500/20' },
  { name: 'Music', color: 'border-cyan-500/50 shadow-cyan-500/20' },
  { name: 'Branding', color: 'border-indigo-500/50 shadow-indigo-500/20' },
  { name: 'Womens Issues', color: 'border-purple-500/50 shadow-purple-500/20' },
  { name: 'Tech', color: 'border-pink-500/50 shadow-pink-500/20' },
  { name: 'Entrepreneurship', color: 'border-orange-500/50 shadow-orange-500/20' },
];

export default function RecentEpisodes() {
  const { episodes, loadEpisodes, loadMore, loading, hasMore, playEpisode } = useEpisodeStore();

  useEffect(() => {
    loadEpisodes(); // initial load
  }, []);

  return (
    <section className="min-h-screen bg-(--bb-black) pt-8 text-white md:pt-36">
      <div className="mx-auto max-w-7xl">
        {/* Header Row */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-montserrat mb-2 text-4xl font-bold md:text-6xl">Recent Episodes</h2>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search Episode Library"
              className="w-full rounded-lg border border-white/10 bg-[#1a1a1a] py-2 pr-4 pl-10 text-sm transition-all focus:border-white/30 focus:outline-none"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`rounded-full border bg-black/40 px-5 py-1.5 text-sm font-medium shadow-lg transition-all hover:brightness-125 ${cat.color}`}
            >
              {cat.name}
            </button>
          ))}
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/50 transition-all hover:bg-orange-500/10">
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode: Episode, index: number) => (
            <EpisodeCard key={episode.id} episode={episode} index={index} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-2 text-white transition-colors hover:cursor-pointer hover:text-white">
            <span className="text-lg font-medium">More Episodes</span>
            <ChevronDown size={20} className="transition-transform group-hover:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
}
