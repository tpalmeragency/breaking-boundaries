'use client';

import { useEffect, useRef, useState } from 'react';
import { useEpisodeStore } from '../stores/useEpisodeStore';
import { Play, Pause, SkipForward, Repeat, Volume2, ChevronDown } from 'lucide-react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { currentEpisode, playNext, playPrevious } = useEpisodeStore();

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [volume, setVolume] = useState(0.2);

  const [isReady, setIsReady] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  // Helper to format time as 00:00:00
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '00:00';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const parts = [
      hrs > 0 ? hrs.toString().padStart(2, '0') : null,
      mins.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0'),
    ].filter(Boolean);

    return parts.join(':');
  };

  // Force preload & buffer on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.preload = 'auto';
    audio.load();
  }, [currentEpisode]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !isReady || isBuffering) return;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const seek = (time: number) => {
    const audio = audioRef.current;
    if (!audio || !isReady) return;

    audio.currentTime = Math.min(Math.max(time, 0), duration);
    setCurrentTime(audio.currentTime);
  };

  return (
    <div className="sticky bottom-0 z-10 flex w-full bg-zinc-900 p-4 text-white">
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={currentEpisode?.audioSrc}
        preload="auto"
        onLoadStart={() => {
          setPlaying(false);
        }}
        onLoadedMetadata={() => {
          setDuration(audioRef.current?.duration ?? 0);
        }}
        onCanPlay={() => {
          setIsReady(true);
          setIsBuffering(false);
        }}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        onTimeUpdate={() => {
          setCurrentTime(audioRef.current?.currentTime ?? 0);
        }}
        onEnded={() => {
          setPlaying(false);
        }}
        onError={() => {
          setIsReady(false);
          setIsBuffering(false);
        }}
      />

      {/* 1. Thumbnail */}
      <div className="flex h-18 w-18 flex-shrink-0 overflow-hidden rounded-sm">
        <img
          src={currentEpisode?.thumbnailSrc}
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>

      {/* 2. Metadata & Progress Section */}
      <div className="flex flex-1 flex-col justify-center pl-4">
        <div className="mb-1 flex flex-col">
          <span className="text-[16px] font-light text-white">
            Episode {currentEpisode?.episodeNumber || '0'}
          </span>
          <span className="line-clamp-1 text-[18px] font-light text-white">
            {currentEpisode?.title || 'Select an Episode'}
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="relative flex flex-col items-end">
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => seek(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-purple-500 hover:accent-purple-400"
            style={{
              background: `linear-gradient(to right, #444444 ${(currentTime / duration) * 100}%, #8643D5 0%)`,
            }}
          />
          <span className="mt-1 text-[12px] font-light text-white tabular-nums">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* 3. Controls Section */}
      <div className="flex items-center gap-5 px-2">
        <div
          className="relative flex items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Volume2 className="h-6 w-6 cursor-pointer" />

          {/* Slider container – grows on hover */}
          <div
            className={`overflow-hidden transition-all duration-300 ${hovered ? 'w-24' : 'w-0'}`}
          >
            {/* Vertical range input */}
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-24 accent-indigo-500"
            />
          </div>
        </div>

        {/* REST OF THE ICONS */}
        <button className="text-zinc-400 transition hover:text-white">
          <Repeat size={20} />
        </button>

        <button
          onClick={togglePlay}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
        >
          {playing ? (
            <Pause size={20} fill="black" />
          ) : (
            <Play size={20} fill="black" className="ml-1" />
          )}
        </button>

        <button onClick={playNext} className="text-white transition hover:text-purple-400">
          <SkipForward size={24} fill="white" />
        </button>

        {/* <button className="ml-2 self-start text-zinc-400 transition hover:text-white">
          <ChevronDown size={20} />
        </button> */}
      </div>
    </div>
  );
}
