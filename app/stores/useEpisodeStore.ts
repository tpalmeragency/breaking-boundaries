// stores/useEpisodeStore.ts
import { create } from 'zustand';
import { Episode } from '../types/audio';
import { getEpisodes } from '../util/getEpisodes';

interface EpisodeState {
  episodes: Episode[];
  currentEpisode: Episode | null;
  currentEpisodeIndex: number | null;
  loading: boolean;
  hasMore: boolean;
  page: number;

  // actions
  loadEpisodes: (limit?: number) => Promise<void>;
  loadMore: () => Promise<void>;
  playEpisode: (index: number) => void;
  playNext: () => void;
  playPrevious: () => void;
}

export const useEpisodeStore = create<EpisodeState>((set, get) => ({
  episodes: [],
  currentEpisode: null,
  currentEpisodeIndex: null,
  loading: false,
  hasMore: true,
  page: 1,

  loadEpisodes: async (limit = 6) => {
    set({ loading: true });
    const newEpisodes = await getEpisodes(limit, 1);
    set({
      episodes: newEpisodes,
      page: 2,
      hasMore: newEpisodes.length === limit,
      loading: false,
      currentEpisode: newEpisodes[0] || null,
      currentEpisodeIndex: newEpisodes.length > 0 ? 0 : null,
    });
  },

  loadMore: async () => {
    const { loading, page, episodes, hasMore } = get();
    if (loading || !hasMore) return;

    set({ loading: true });
    const newEpisodes = await getEpisodes(6, page);

    set({
      episodes: [...episodes, ...newEpisodes],
      page: page + 1,
      hasMore: newEpisodes.length === 6,
      loading: false,
    });
  },

  playEpisode: (index: number) => {
    const { episodes } = get();
    set({ currentEpisode: episodes[index], currentEpisodeIndex: index });
  },

  playNext: () => {
    const { currentEpisodeIndex, episodes } = get();
    if (currentEpisodeIndex === null) return;
    const nextIndex = (currentEpisodeIndex + 1) % episodes.length;
    set({ currentEpisodeIndex: nextIndex });
  },

  playPrevious: () => {
    const { currentEpisodeIndex, episodes } = get();
    if (currentEpisodeIndex === null) return;
    const prevIndex = (currentEpisodeIndex - 1 + episodes.length) % episodes.length;
    set({ currentEpisodeIndex: prevIndex });
  },
}));
