const OurStory = () => (
  <section id="our-story" className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
            alt="Our beauty studio"
            className="w-full rounded-sm shadow-[0_20px_60px_-10px_rgba(32,26,26,0.1)]"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-sm bg-surfaceLow" />
        </div>

        {/* Text */}
        <div>
          <h2 className="font-500 mb-6 font-heading text-3xl leading-tight md:text-[42px]">
            Our Story
          </h2>
          <p className="font-300 mb-8 font-body text-base leading-relaxed text-onSurface/70 md:text-lg">
            We started as a small beauty studio in Islington, London. Our main
            idea was to create the best beauty studio in the world. Can there be
            compromises in the best studio in the world? Our answer is always
            no, we care about the best quality, we hire the best specialists and
            provide the best customer service. This approach allowed us to grow
            and create awesome team that is passionate about everything we do.
          </p>
          <a
            href="#"
            className="font-500 inline-block rounded-pill bg-rose-light px-8 py-3.5 font-body text-[14px] uppercase tracking-[0.1em] text-rose transition-all duration-300 hover:bg-surfaceHigh hover:text-onSurface"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
);

export { OurStory };
