'use client';

import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [isNotified, setIsNotified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNotify = async () => {
    if (!email || !email.includes('@')) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsNotified(true);
    setIsLoading(false);
    setTimeout(() => {
      setEmail('');
      setIsNotified(false);
    }, 3000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleNotify();
  };

  return (
    <section id="launch" className="w-full bg-(--bb-black) py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6">
        {/* 1. TEXT SECTION - Constrained to be narrower */}
        <div className="max-w-md text-center">
          <h2 className="font-display mb-6 text-5xl text-white uppercase sm:text-6xl">
            Launching Soon
          </h2>
          <p className="mb-10 font-sans font-light text-white sm:text-[16px]">
            Follow the show or get notified when the first episode drops.
          </p>
        </div>

        {/* 2. INPUT GROUP - Given a wider max-width than the text above */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 md:flex-row md:justify-center">
          {/* INPUT */}
          <div className="w-full md:w-[380px] lg:w-[450px] xl:w-[520px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder=""
              className="w-full rounded-full bg-[#D9D9D9] px-6 py-4 text-left text-black outline-none"
              disabled={isNotified}
            />
          </div>

          {/* BUTTON */}
          <div className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[1px]">
            <button
              onClick={handleNotify}
              className="rounded-full bg-(--bb-black) px-10 py-3 font-sans text-[18px] font-light text-white transition-all hover:bg-white hover:text-black"
            >
              {isLoading ? '...' : 'Notify Me'}
            </button>
          </div>
        </div>

        {isNotified && (
          <p className="animate-fade-in mt-6 text-sm font-medium text-pink-400">
            ✓ You&apos;ll be notified when we launch!
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
