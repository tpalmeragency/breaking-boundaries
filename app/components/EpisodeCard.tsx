import { useEpisodeStore } from '../stores/useEpisodeStore';
import { Episode } from '../types/audio';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function EpisodeCard({ episode, index }: { episode: Episode; index: number }) {
  const { playEpisode, currentEpisode } = useEpisodeStore();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#1a1a1a]">
      {/* Image Container */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={episode?.coverImageSrc}
          alt={episode?.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-5 text-left font-sans">
        <p className="mb-1 text-[14px] text-[#BFBEBE]">{episode?.releaseDate}</p>
        <h3 className="mb-3 text-[24px] font-semibold text-white">{episode?.title}</h3>
        <p className="mb-6 text-[16px] leading-relaxed font-light text-white">
          {episode?.description}
        </p>

        <hr className="-mx-6 border-t-2 border-[#111111]" />
        {/* Footer Actions */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <button className="group flex items-center gap-2 text-white transition-colors hover:text-pink-500">
            <Image
              src="/images/icons/icon-episode-card-listen.svg"
              width={30}
              height={35}
              alt="Listen Icon"
            />
            <span className="text-[18px] font-light" onClick={() => playEpisode(index)}>
              Listen
            </span>
          </button>

          <div className="flex items-center gap-2">
            {/* Mock Podcast Icon (Purple) */}
            <Image
              src="/images/icons/icon-episode-card-apple-music.svg"
              width={30}
              height={35}
              alt="Listen on Apple Music"
            />
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#444444] transition-colors hover:bg-white/20">
              <ChevronDown strokeWidth={1.25} size={26} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
