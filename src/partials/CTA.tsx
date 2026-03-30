const CTA = () => (
  <section className="bg-surfaceLow py-20 md:py-28">
    <div className="mx-auto max-w-2xl px-6 text-center">
      <h2 className="font-500 mb-4 font-heading text-3xl leading-tight md:text-[42px]">
        Ready for Your{' '}
        <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Transformation?
        </span>
      </h2>
      <p className="font-300 mb-8 font-body text-base text-onSurface/60">
        Experience the luxury of professional skin therapy tailored just for
        you. Book your appointment today and discover your skin's true
        potential.
      </p>
      <div className="flex justify-center">
        <a
          href="#"
          className="font-500 rounded-pill bg-gradient-to-br from-gold to-gold-light px-10 py-4 font-body text-[14px] uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_-5px_rgba(32,26,26,0.08)] transition-all duration-300 hover:from-gold-light hover:to-gold hover:shadow-[0_15px_40px_-5px_rgba(32,26,26,0.12)]"
        >
          Book Appointment Now
        </a>
      </div>
    </div>
  </section>
);

export { CTA };
