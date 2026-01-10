import Image from 'next/image';
import About from './components/About';
import AudioPlayer from './components/AudioPlayer';
import Video from './components/Video';
import HeroSection from './components/Hero';
import RecentEpisodes from './components/RecentEpisodes';
import { getEpisodes } from './util/getEpisodes';
import Info from './components/Info';
import CTA from './components/CTA';

export default async function Home() {
  // Define a reusable Tailwind class for contained sections
  const sectionConstraints = 'w-full max-w-7xl mx-auto px-6 sm:px-16';

  return (
    <div className="bg-(--bb-black) font-sans">
      <main className="flex w-full flex-col">
        {/* SECTION 1: Full Width (e.g., a Hero or Highlight) */}
        <section className="w-full bg-[#111111]">
          <HeroSection />
          {/* <div className={`${sectionConstraints} py-20`}>
            <h2 className="text-lg font-semibold">Full Width Background</h2>
            <p>The background color goes edge-to-edge, but the content stays aligned!</p>
          </div> */}
        </section>

        {/* SECTION 2: Contained (With Margins) */}
        <section
          className={`${sectionConstraints} flex flex-col items-center bg-(--bb-black) text-center`}
        >
          <Info />
          <Video videoId="Aq5WXmQQooo" />
          {/* <RecentEpisodes /> */}
          <About />
          <CTA />
        </section>

        {/* SECTION 3: Audio Player Section */}
        {/* <AudioPlayer /> */}
        <section className={sectionConstraints}></section>
      </main>
    </div>
  );
}
