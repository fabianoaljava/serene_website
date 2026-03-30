import { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'NAILS',
    desc: 'Get your nails done for great mood. Simple pleasures can make your week, not just day.',
  },
  {
    id: 2,
    name: 'BROW',
    desc: 'Brows can change it all. Try out styling and tinting your brows and see the difference.',
  },
  {
    id: 3,
    name: 'HAIR',
    desc: 'Stylish hair cuts, gorgeous styling, incredible color services and best hair treatments. Choose your dream service!',
  },
  {
    id: 4,
    name: 'COSMETOLOGY',
    desc: 'Indulge a little longer with a customized facial to help achieve your skin goals in 60-90 minutes.',
  },
  {
    id: 5,
    name: 'MAKEUP',
    desc: 'Complete your service with beautiful makeup and simply be amazing with complete look.',
  },
];

const ServiceMenu = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="service-menu" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-500 mb-16 text-center font-heading text-3xl md:text-[42px]">
          Service Menu
        </h2>

        <div className="mx-auto max-w-3xl">
          {/* Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-6 md:gap-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`font-500 border-b-2 pb-2 font-body text-[13px] uppercase tracking-[0.1em] transition-all duration-300 ${
                  active === cat.id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-onSurface/50 hover:text-onSurface/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Description */}
          <div className="min-h-[80px] text-center">
            {categories.map((cat) => (
              <p
                key={cat.id}
                className={`font-300 font-body text-base leading-relaxed text-onSurface/70 transition-all duration-500 md:text-lg ${
                  active === cat.id
                    ? 'translate-y-0 opacity-100'
                    : 'hidden opacity-0'
                }`}
              >
                {cat.desc}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="#"
              className="font-500 inline-block rounded-pill bg-gradient-to-br from-gold to-gold-light px-8 py-3.5 font-body text-[14px] uppercase tracking-[0.1em] text-white shadow-[0_10px_30px_-5px_rgba(32,26,26,0.08)] transition-all duration-300 hover:from-gold-light hover:to-gold hover:shadow-[0_15px_40px_-5px_rgba(32,26,26,0.12)]"
            >
              View Service Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServiceMenu };
