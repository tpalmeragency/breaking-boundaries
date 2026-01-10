'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    // Added 'relative' and 'overflow-hidden'
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-(--bb-black) px-6 pb-24 md:flex-row md:px-0 md:pb-0">
      {/* 1. Left Column: The "B" Graphic */}
      <div className="relative z-0 flex w-full justify-start md:w-[60%]">
        <Image
          src="/images/hero/hero-multiple-b-graphic.svg"
          alt="Breaking Boundaries Logo"
          width={1000}
          height={800}
          className="h-auto w-full scale-110 object-contain object-left md:scale-115" // Scale it up to make it "taller"
          priority
        />
      </div>

      {/* 2. Right Column: Content Stack */}
      {/* Added 'z-10' and 'md:-ml-32' to create the overlap */}
      <div className="z-10 flex w-full flex-col items-start space-y-6 text-left md:mr-20 md:-ml-32 md:w-1/2">
        <span className="font-display text-[20px] font-normal text-white uppercase md:text-[24px]">
          Presented by T Palmer Agency
        </span>

        <div className="w-full max-w-[500px] lg:max-w-[650px]">
          <Image
            src="/images/hero/hero-b-headline.svg"
            alt="Breaking Boundaries Headline"
            width={600}
            height={200}
            className="max-h-[300px] w-full max-w-[600px] md:max-w-none"
            priority
          />
        </div>

        <p className="font-montserrat max-w-sm text-[18px] leading-[1.49] font-normal text-gray-200 md:text-xl lg:max-w-lg">
          A podcast exploring leaders who dare to redefine industries, challenge norms, and create
          new paths.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-8 pt-4">
          <a
            href="#"
            className="border-gradient-brand tracking-[0.03em]font-medium rounded-md pb-1 text-[20px] text-white transition-colors"
          >
            Follow the show
          </a>

          <div className="flex items-center gap-5">
            <button className="transition-transform hover:scale-110 hover:opacity-80">
              <Image src="/images/icons/icon-youtube.svg" width={36} height={26} alt="Youtube" />
            </button>
            <button className="transition-transform hover:scale-110 hover:opacity-80">
              <Image
                src="/images/icons/icon-instagram.svg"
                width={32}
                height={32}
                alt="Instagram"
              />
            </button>
          </div>
        </div>
      </div>

      {/* 3. The Bottom Gradient Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-(--bb-black) to-transparent" />
    </section>
  );
}
