const CTA = () => (
  <section className="bg-surfaceLow py-20 md:py-28">
    <div className="mx-auto max-w-2xl px-6 text-center">
      <h2 className="font-500 mb-4 font-heading text-3xl leading-tight md:text-[42px]">
        Subscribe to our{' '}
        <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Newsletter
        </span>
      </h2>
      <p className="font-300 mb-8 font-body text-base text-onSurface/60">
        Stay updated with our latest beauty tips, new services, and exclusive
        offers. We promise not to spam your inbox.
      </p>
      <form
        className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="you@example.com"
          required
          className="font-300 flex-1 rounded border-none bg-surfaceHigh px-4 py-3 font-body text-sm text-onSurface transition-all placeholder:text-onSurface/40 focus:outline-none focus:ring-1 focus:ring-gold/20"
        />
        <button
          type="submit"
          className="font-500 rounded-pill bg-gradient-to-br from-gold to-gold-light px-6 py-3 font-body text-[13px] uppercase tracking-[0.1em] text-white shadow-[0_10px_30px_-5px_rgba(32,26,26,0.08)] transition-all duration-300 hover:from-gold-light hover:to-gold hover:shadow-[0_15px_40px_-5px_rgba(32,26,26,0.12)]"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export { CTA };
