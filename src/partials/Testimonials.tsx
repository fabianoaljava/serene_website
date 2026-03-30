import { useState } from 'react';

const quotes = [
  {
    id: 1,
    text: '\u201cThe place with its style, soul and uncompromising quality.\u201d',
    source: 'Vogue',
    url: 'https://www.vogue.co.uk/',
  },
  {
    id: 2,
    text: '\u201cBeauty heaven in the heart of Manhattan. Must visit place for beauty lovers.\u201d',
    source: "Harper's Bazaar",
    url: 'https://www.harpersbazaar.com/',
  },
  {
    id: 3,
    text: '\u201cAwesome atmosphere, professional team and beautiful people around.\u201d',
    source: 'Elle',
    url: 'https://www.elle.com/uk/',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="testimonials" className="bg-surfaceLow py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h5 className="font-500 mb-12 font-body text-[14px] uppercase tracking-[0.1em] text-rose">
          As Seen On
        </h5>

        {/* Quote */}
        <div className="mb-10 flex min-h-[160px] items-center justify-center">
          {quotes.map((q) => (
            <div
              key={q.id}
              className={`transition-all duration-500 ${
                active === q.id
                  ? 'scale-100 opacity-100'
                  : 'hidden scale-95 opacity-0'
              }`}
            >
              <blockquote className="font-400 mb-6 font-heading text-2xl italic leading-snug text-onSurface md:text-[36px]">
                {q.text}
              </blockquote>
              <a
                href={q.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-500 border-b border-gold/30 pb-0.5 font-body text-[13px] uppercase tracking-[0.1em] text-gold transition-colors hover:text-gold-light"
              >
                Read Full Article
              </a>
            </div>
          ))}
        </div>

        {/* Source Tabs */}
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {quotes.map((q) => (
            <button
              key={q.id}
              onClick={() => setActive(q.id)}
              className={`font-500 border-b-2 pb-1 font-heading text-lg tracking-wide transition-all duration-300 md:text-xl ${
                active === q.id
                  ? 'border-gold text-onSurface'
                  : 'border-transparent text-onSurface/30 hover:text-onSurface/60'
              }`}
            >
              {q.source}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
