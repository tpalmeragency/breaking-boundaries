export default function Info() {
  return (
    <section className="bg-(--bb-black) pt-20 text-white md:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20 lg:gap-45">
          {/* Text Content */}
          <div className="order-2 flex-1 text-start md:order-1">
            <p className="text(--bb-white) font-display mb-4 text-[24px] uppercase">
              No scripts. No safe topics. No single lane
            </p>
            <p className="md:[16px] font-sansleading-relaxed mb-8 font-light text-(--bb-white)">
              Lorem ipsum dolor sit amet consectetur. Mauris mattis in mattis tristique nullam
              gravida id ipsum consectetur. Posuere in risus leo vestibulum dignissim fermentum
              fermentum. Tristique eget cras non risus a nisi. Magna massa consequat varius quisque
              sagittis in sodales quam nisi. Sagittis condimentum dolor imperdiet faucibus hac
              facilisis neque. Nibh sed sagittis consectetur amet tincidunt eu tristique.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 w-full flex-1 md:order-2">
            <div className="aspect-square overflow-hidden rounded-3xl md:aspect-[497-470] md:aspect-auto">
              <img
                src="/images/info/info-graphic.svg"
                alt="Colorful graphic"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
