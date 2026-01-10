import Image from 'next/image';
import About from './components/About';
import AudioPlayer from './components/AudioPlayer';
import Video from './components/Video';
import HeroSection from './components/Hero';
import RecentEpisodes from './components/RecentEpisodes';
import { getEpisodes } from './util/getEpisodes';
import Info from './components/Info';
import CTA from './components/CTA';
import FadeIn from './components/FadeIn';

export default async function Home() {
  const sectionConstraints = 'w-full max-w-7xl mx-auto px-6 sm:px-16';

  return (
    <div className="bg-(--bb-black) font-sans">
      <main className="flex w-full flex-col">
        {/* SECTION 1: Full Width (e.g., a Hero or Highlight) */}
        <section className="w-full bg-[#111111]">
          <HeroSection />
        </section>

        {/* SECTION 2: Contained (With Margins) */}
        <section
          className={`${sectionConstraints} flex flex-col items-center bg-(--bb-black) text-center`}
        >
          <FadeIn>
            <Info />
          </FadeIn>
          {/* Wrap the video in a dedicated container to handle the spacing */}
          <div className="w-full">
            <FadeIn>
              <Video videoId="Aq5WXmQQooo" />
            </FadeIn>
          </div>
          <FadeIn>
            <About />
          </FadeIn>
          {/* <RecentEpisodes /> */}
          <FadeIn>
            <CTA />
          </FadeIn>
        </section>

        {/* SECTION 3: Global Audio Player Section */}
        {/* <AudioPlayer /> */}
        <section className={sectionConstraints}></section>
      </main>
    </div>
  );
}
