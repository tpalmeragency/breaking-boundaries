'use client';
import Image from 'next/image';
export default function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-1 bg-(--bb-black) px-6 pb-12 md:flex-row md:px-0 md:pb-0">
      {/* Left Column: The "B" Graphic */}
      <div className="flex w-full justify-start md:w-1/2">
        <Image
          src="/images/hero/hero-b-graphic.svg"
          alt="Breaking Boundaries Logo"
          width={800}
          height={500}
          className="max-h-[600px] w-full max-w-[500px] md:max-w-none"
          priority
        />
      </div>

      {/* Right Column: Content Stack */}
      <div className="flex w-full flex-col items-start space-y-6 text-left md:w-1/2">
        <span className="font-display text-[24px] font-normal text-white uppercase">
          Presented by T Palmer Agency
        </span>

        <div className="flex w-full justify-start md:w-1/2 md:justify-start">
          <Image
            src="/images/hero/hero-b-headline.svg"
            alt="Breaking Boundaries Headline"
            width={600}
            height={200}
            className="max-h-[300px] w-full max-w-[600px] md:max-w-none"
            priority
          />
        </div>

        <p className="font-montserrat max-w-sm text-[18px] leading-[1.49] font-normal text-white md:text-xl lg:max-w-lg">
          A podcast exploring leaders who dare to redefine industries, challenge norms, and create
          new paths.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-6 pt-4">
          <a
            href="#"
            className="border-gradient-brand tracking-[0.03em]font-medium rounded-md pb-1 text-[20px] text-white transition-colors"
          >
            Listen now
          </a>

          <div className="flex items-center gap-4">
            {/* Podcast Platform Icons */}
            <button className="transition-opacity hover:opacity-80">
              <Image src="/images/icons/icon-apple-music.svg" width={57} height={57} alt="Apple" />
            </button>
            <button className="transition-opacity hover:opacity-80">
              <Image src="/images/icons/icon-spotify.svg" width={36} height={35} alt="Spotify" />
            </button>
            <button className="transition-opacity hover:opacity-80">
              <Image
                src="/images/icons/icon-amazon-music.svg"
                width={56}
                height={56}
                alt="Amazon"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
