const images = [
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80',
];

const BeautyBox = () => (
  <section id="beauty-box" className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <img
              src={images[0]}
              alt="Beauty box products"
              className="h-64 w-full rounded-sm object-cover md:h-80"
              loading="lazy"
            />
          </div>
          <img
            src={images[1]}
            alt="Beauty products"
            className="h-40 w-full rounded-sm object-cover md:h-52"
            loading="lazy"
          />
          <img
            src={images[2]}
            alt="Skincare selection"
            className="h-40 w-full rounded-sm object-cover md:h-52"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="font-500 mb-6 font-heading text-3xl leading-tight md:text-[42px]">
            Beauty Box
          </h2>
          <p className="font-300 mb-8 font-body text-base leading-relaxed text-onSurface/70 md:text-lg">
            Our beauty box is a set of best full-size products that are top
            sellers in our online shop. We want you to be able to try everything
            at once and make sure that our selection of products is about
            quality, our product just do their job, no compromises. You can
            subscribe and get our beauty box every month or just buy it once.
          </p>
          <a
            href="#"
            className="font-500 inline-block rounded-pill bg-rose-light px-8 py-3.5 font-body text-[14px] uppercase tracking-[0.1em] text-rose transition-all duration-300 hover:bg-surfaceHigh hover:text-onSurface"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </section>
);

export { BeautyBox };
