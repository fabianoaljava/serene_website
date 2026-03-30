const images = [
  'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=600&q=80',
];

const GiftCards = () => (
  <section id="gift-cards" className="bg-surfaceLow py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <h2 className="font-500 mb-6 font-heading text-3xl leading-tight md:text-[42px]">
            Gift Cards
          </h2>
          <p className="font-300 mb-8 font-body text-base leading-relaxed text-onSurface/70 md:text-lg">
            When in doubt what to buy as a gift, this is the best option. Our
            gift cards have no expiration date and can be used to pay for all
            the services in our beauty studio or in our cosmetic shop. You can
            choose physical or electronic format of the gift card. Amount is
            also flexible. You can personalize your gift card with a message.
          </p>
          <a
            href="#"
            className="font-500 inline-block rounded-pill bg-rose-light px-8 py-3.5 font-body text-[14px] uppercase tracking-[0.1em] text-rose transition-all duration-300 hover:bg-surfaceHigh hover:text-onSurface"
          >
            Learn More
          </a>
        </div>

        {/* Images */}
        <div className="order-1 grid grid-cols-1 gap-4 lg:order-2">
          <img
            src={images[0]}
            alt="Gift card design"
            className="h-56 w-full rounded-sm object-cover md:h-72"
            loading="lazy"
          />
          <img
            src={images[1]}
            alt="Gift card collection"
            className="h-56 w-full rounded-sm object-cover md:h-72"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export { GiftCards };
