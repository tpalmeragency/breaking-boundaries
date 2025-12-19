import Image from 'next/image'
import AudioPlayer from './components/AudioPlayer'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <AudioPlayer
          title="Breaking Boundaries"
          src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
        />
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </main>
    </div>
  )
}
