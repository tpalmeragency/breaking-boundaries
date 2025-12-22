'use client';

import { useEffect, useRef, useState } from 'react';

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const [isReady, setIsReady] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  // Force preload & buffer on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.preload = 'auto';
    audio.load();
  }, [src]);

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
    <div className="fixed bottom-0 w-full bg-zinc-900 p-4 text-white">
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
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

      {/* Podcast Metadata */}
      {title && <div className="mb-2 font-medium">{title}</div>}

      <div className="flex items-center gap-4">
        {/* PLAY BUTTON */}
        <button
          onClick={togglePlay}
          disabled={!isReady || isBuffering}
          className={`rounded px-4 py-2 transition ${
            !isReady || isBuffering
              ? 'cursor-not-allowed bg-zinc-600 opacity-50'
              : 'bg-zinc-700 hover:bg-zinc-600'
          }`}
        >
          {isBuffering ? 'Loading…' : playing ? 'Pause' : 'Play'}
        </button>

        {/* TIME */}
        <span className="text-sm tabular-nums">
          {Math.floor(currentTime)} / {Math.floor(duration)}s
        </span>

        {/* SEEK */}
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={1}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          disabled={!isReady}
          className="flex-1 accent-indigo-500 disabled:opacity-50"
        />

        {/* VOLUME */}
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => {
            const v = Number(e.target.value);
            setVolume(v);
            if (audioRef.current) audioRef.current.volume = v;
          }}
          className="w-24 accent-indigo-500"
        />
      </div>
    </div>
  );
}
