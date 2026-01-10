'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Video({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative my-20 aspect-video w-full overflow-hidden bg-black hover:cursor-pointer">
      {!playing ? (
        <button
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex items-center justify-center"
        >
          {/* Thumbnail */}
          <Image
            src="/images/video/hero-thumbnail.svg"
            alt="Company Logo"
            className="absolute inset-0 h-full w-full cursor-pointer object-cover"
            width={1200}
            height={800}
            priority
          />
        </button>
      ) : (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}
