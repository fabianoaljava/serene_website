const sponsors = [
  {
    name: 'Clerk',
    href: 'https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate',
    logo: '/assets/images/clerk-logo-white.png',
  },
  {
    name: 'CodeRabbit',
    href: 'https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025',
    logo: '/assets/images/coderabbit-logo-dark.svg',
  },
  {
    name: 'Sentry',
    href: 'https://sentry.io/for/nextjs/',
    logo: '/assets/images/sentry-white.png',
  },
  {
    name: 'Arcjet',
    href: 'https://launch.arcjet.com/Q6eLbRE',
    logo: '/assets/images/arcjet-dark.svg',
  },
  {
    name: 'Crowdin',
    href: 'https://l.crowdin.com/next-js',
    logo: '/assets/images/crowdin-white.png',
  },
  {
    name: 'Next.js Boilerplate SaaS',
    href: 'https://nextjs-boilerplate.com/pro-saas-starter-kit',
    logo: '/assets/images/nextjs-boilerplate-saas.png',
  },
];

const Sponsors = () => (
  <section className="bg-surfaceLow py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="font-500 mb-12 text-center font-heading text-3xl md:text-[42px]">
        Sponsors
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex aspect-[16/9] items-center justify-center rounded-sm border border-outline/10 bg-surfaceLowest p-6 shadow-[0_10px_30px_-5px_rgba(32,26,26,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(32,26,26,0.1)]"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-[80px] max-w-[200px] object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export { Sponsors };
