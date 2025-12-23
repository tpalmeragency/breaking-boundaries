import Image from 'next/image';
import About from './components/About';
import AudioPlayer from './components/AudioPlayer';
import Video from './components/Video';
import HeroSection from './components/Hero';

export default function Home() {
  // Define a reusable Tailwind class for contained sections
  const sectionConstraints = 'w-full max-w-7xl mx-auto px-6 sm:px-16';

  return (
    <div className="bg-(--bb-black) font-sans">
      <main className="flex w-full flex-col">
        {/* SECTION 1: Full Width (e.g., a Hero or Highlight) */}
        <section className="w-full bg-[#111111]">
          <HeroSection />
          <div className={`${sectionConstraints} py-20`}>
            <h2 className="text-lg font-semibold">Full Width Background</h2>
            <p>The background color goes edge-to-edge, but the content stays aligned!</p>
          </div>
          {/* <AudioPlayer
            title="Breaking Boundaries"
            src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
          /> */}
        </section>

        {/* SECTION 2: Contained (With Margins) */}
        <section
          className={`${sectionConstraints} flex flex-col items-center bg-(--bb-black) py-20 text-center`}
        >
          <Video videoId="Aq5WXmQQooo" />

          <About />
          <Image
            className="mb-8 dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <h1 className="mb-4 text-2xl font-bold">Contained Section</h1>
          <p>This text stays within the 3xl max-width.</p>
        </section>

        {/* SECTION 3: Audio Player Section */}
        <section className={sectionConstraints}></section>
      </main>
    </div>
  );
}
