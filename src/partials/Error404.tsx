const Error404 = () => (
  <section className="flex min-h-[70vh] flex-col items-center justify-center bg-surface px-6 py-24 text-center">
    <div className="relative mb-12">
      {/* Decorative large number */}
      <span className="font-heading text-[180px] font-normal leading-none tracking-tighter text-gold opacity-10 md:text-[240px]">
        404
      </span>
      {/* Main message overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 md:pt-12">
        <span className="font-500 mb-2 font-body text-xs uppercase tracking-[0.4em] text-gold md:text-sm">
          Something went wrong
        </span>
        <h1 className="font-heading text-4xl font-normal leading-tight text-onSurface md:text-6xl">
          Page Not Found
        </h1>
      </div>
    </div>

    <div className="mx-auto max-w-lg space-y-8">
      <p className="font-300 font-body text-base leading-relaxed text-onSurface/60 md:text-lg">
        The beauty secret you're looking for seems to be hidden elsewhere. Let
        us help you find your way back to radiance.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/"
          className="font-500 min-w-[200px] rounded-pill bg-gradient-to-br from-gold to-gold-light px-10 py-4 font-body text-[13px] uppercase tracking-[0.14em] text-white shadow-[0_10px_40px_-10px_rgba(32,26,26,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:from-gold-light hover:to-gold hover:shadow-[0_20px_50px_-10px_rgba(32,26,26,0.3)]"
        >
          Return to Home
        </a>
        <a
          href="/#contact"
          className="font-500 min-w-[200px] rounded-pill border border-outline/20 px-10 py-4 font-body text-[13px] uppercase tracking-[0.14em] text-onSurface transition-all duration-300 hover:bg-surfaceLow hover:shadow-sm"
        >
          Contact Us
        </a>
      </div>
    </div>

    {/* Decorative element */}
    <div className="mt-24 h-[1px] w-12 bg-gold/30"></div>
  </section>
);

export { Error404 };
