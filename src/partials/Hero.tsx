import { AppConfig } from '@/utils/AppConfig';
import heroimage from '@/images/hero2.jpg';

const Hero = () => (
  <section
    id="hero"
    className="relative flex min-h-screen items-stretch overflow-hidden pb-0 pt-24"
  >
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroimage.src}
        alt="Beauty salon interior"
        className="h-full w-full object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-onSurface/70 via-onSurface/30 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex w-full flex-col">
      <div className="mx-auto flex max-w-7xl flex-1 items-center justify-center px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-4 font-500 mb-1 block font-body tracking-[0.1em] text-white">
            Microneedling & Anti-Aging
          </p>
          <h1 className="mb-1 font-heading text-4xl font-normal leading-tight text-white md:text-5xl lg:text-[60px]">
            Radiant Skin Starts Here
          </h1>
          <p className="text-4 font-500 mb-8 block font-body tracking-[0.1em] text-white">
            Experience the transformative power of professional microneedling
            and luxury anti-aging treatments. Discover your skin's true
            potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="font-500 inline-block rounded-pill border border-white/40 bg-white/10 px-7 py-3 font-body text-[14px] uppercase tracking-[0.1em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-onSurface"
            >
              Book Appointment
            </a>
            <a
              href="#service-menu"
              className="font-500 border-white/15 inline-block rounded-pill border bg-white/5 px-7 py-3 font-body text-[14px] uppercase tracking-[0.1em] text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              View Service Menu
            </a>
          </div>
        </div>
      </div>

      {/* Info Strip */}
      <div className="bg-surfaceLow/95 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 md:grid-cols-3 md:gap-8">
          <div>
            <span className="font-500 mb-1 block font-body text-[13px] uppercase tracking-[0.1em] text-rose">
              Contact
            </span>
            <p className="font-300 font-body text-[15px] leading-relaxed text-onSurface/80">
              T: {AppConfig.phone}
              <br />
              {AppConfig.email}
            </p>
          </div>
          <div>
            <span className="font-500 mb-1 block font-body text-[13px] uppercase tracking-[0.1em] text-rose">
              Hours
            </span>
            <p className="font-300 font-body text-[15px] leading-relaxed text-onSurface/80">
              {AppConfig.hours.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < AppConfig.hours.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
          <div>
            <span className="font-500 mb-1 block font-body text-[13px] uppercase tracking-[0.1em] text-rose">
              Location
            </span>
            <p className="font-300 font-body text-[15px] leading-relaxed text-onSurface/80">
              {AppConfig.address_line1}
              <br />
              {AppConfig.address_line2}
              <br />
              {AppConfig.address_line3}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { Hero };
