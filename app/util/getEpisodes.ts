import { Episode } from '../types/audio';

export async function getEpisodes(limit = 6, page = 1): Promise<Episode[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/podcast-episode?_embed&per_page=${limit}&page=${page}`
  );

  if (!res.ok) {
    return [];
  }

  interface WpAcfEpisode {
    episode_number: number;
    episode_title: string;
    episode_description: string;
    episode_audio_source: string;
    episode_release_date: string;
    episode_duration: string;
    episode_cover_image: number; // media ID
    episode_thumbnail: number; // media ID
  }

  interface WpPodcastPost {
    id: number;
    date: string;
    title: {
      rendered: string;
    };
    acf?: {
      podcast_episodes_list?: WpAcfEpisode[];
    };
  }

  const posts: WpPodcastPost[] = await res.json();

  const episodePromises: Promise<Episode>[] = posts.flatMap(
    (post) =>
      post.acf?.podcast_episodes_list?.map(async (ep) => ({
        id: `${post.id}-${ep.episode_number}`,
        episodeNumber: ep.episode_number,
        title: ep.episode_title,
        description: ep.episode_description,
        audioSrc: ep.episode_audio_source,
        releaseDate: ep.episode_release_date,
        duration: Number(ep.episode_duration) || 0,
        coverImageSrc: await getMediaUrl(ep.episode_cover_image),
        thumbnailSrc: await getMediaUrl(ep.episode_thumbnail),
      })) ?? []
  );

  return await Promise.all(episodePromises);
}

async function getMediaUrl(id?: number): Promise<string | undefined> {
  if (!id) return;
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/media/${id}`);
  const media = await res.json();
  return media.source_url;
}
