export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  audioSrc: string;
  releaseDate: string;
  duration: number;
  coverImageSrc?: string;
  thumbnailSrc?: string;
}
