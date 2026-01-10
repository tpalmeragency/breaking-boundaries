'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-(--bb-black) px-6 pb-24 md:flex-row md:px-0 md:pb-0"
    >
      {/* 1. Left Column: The "B" Graphic */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 200 }} // Start down and right
        animate={{ opacity: 1, x: 0, y: 0 }} // End at original position
        transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
        className="relative z-0 flex w-full justify-start md:w-[60%]"
      >
        <Image
          src="/images/hero/hero-multiple-b-graphic.svg"
          alt="Breaking Boundaries Logo"
          width={1000}
          height={800}
          className="h-auto w-full scale-110 object-contain object-left md:scale-115" // Scale it up to make it "taller"
          priority
        />
      </motion.div>
      {/* <div className="relative z-0 flex w-full justify-start md:w-[60%]"></div> */}

      {/* 2. Right Column: Content Stack */}
      <div className="z-10 flex w-full flex-col items-start space-y-6 text-left md:mr-20 md:-ml-32 md:w-1/2">
        <motion.span
          className="font-display text-[20px] font-normal text-white uppercase md:text-[24px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Presented by T Palmer Agency
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-[500px] lg:max-w-[650px]"
        >
          <Image
            src="/images/hero/hero-b-headline.svg"
            alt="Breaking Boundaries Headline"
            width={600}
            height={200}
            className="max-h-[300px] w-full max-w-[600px] md:max-w-none"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-montserrat max-w-sm text-[18px] leading-[1.49] font-normal text-gray-200 md:text-xl lg:max-w-lg"
          transition={{ duration: 2, delay: 1 }}
        >
          A podcast exploring leaders who dare to redefine industries, challenge norms, and create
          new paths.
        </motion.p>

        {/* Action Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap items-center gap-8 pt-4"
          transition={{ duration: 2, delay: 1 }}
        >
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
        </motion.div>
      </div>

      {/* 3. The Bottom Gradient Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-(--bb-black) to-transparent" />
    </section>
  );
}
