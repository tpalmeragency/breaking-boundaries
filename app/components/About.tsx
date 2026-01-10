export default function About() {
  return (
    <section id="about" className="bg-(--bb-black) py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20 lg:gap-45">
          {/* Text Content */}
          <div className="order-2 flex-1 text-start md:order-1">
            <p className="text(--bb-white) font-display mb-4 text-[24px] uppercase">
              Behind the Mic
            </p>
            <h1 className="mb-6 font-sans text-4xl font-normal md:text-[40px]">
              Thien-Nga “T” Palmer
            </h1>
            <p className="md:[16px] font-sansleading-relaxed mb-8 font-light text-(--bb-white)">
              Thien-Nga “T” Palmer is the visionary CEO of T Palmer Agency and the force behind
              Breaking Boundaries. With more than two decades of experience leading high-impact
              events for global brands across entertainment, tech, finance, and beyond, T has built
              a reputation for transforming ideas into unforgettable experiences. Her work blends
              creativity, precision, and purpose, shaped by a passion for storytelling and a
              lifelong dedication to elevating the voices and innovations shaping our future.
              Breaking Boundaries is her latest platform to explore those stories and the people
              redefining what’s possible.
            </p>
            {/* <div className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[1px] hover:cursor-pointer">
              <button className="rounded-full bg-(--bb-black) px-11 py-[8px] font-sans font-light transition-colors duration-300 hover:cursor-pointer hover:bg-white hover:text-black">
                Get in touch
              </button>
            </div> */}
          </div>

          {/* Image */}
          <div className="order-1 w-full flex-1 md:order-2">
            <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 md:aspect-[497-470] md:aspect-auto">
              {/* Replace this div with your actual image */}
              <img
                src="/images/about/about-headshot.svg"
                alt="Thien-Nga T Palmer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
