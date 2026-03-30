const brands = [
  {
    name: 'SkinCeuticals',
    href: 'https://www.skinceuticals.co.uk/',
    logo: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Obagi Medical',
    href: 'https://www.obagi.com/',
    logo: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'ZO Skin Health',
    href: 'https://zoskinhealth.com/',
    logo: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Medik8',
    href: 'https://www.medik8.com/',
    logo: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Skinbetter Science',
    href: 'https://skinbetter.com/',
    logo: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'iS Clinical',
    href: 'https://isclinical.com/',
    logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Murad',
    href: 'https://www.murad.co.uk/',
    logo: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Dermalogica',
    href: 'https://www.dermalogica.co.uk/',
    logo: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'PCA Skin',
    href: 'https://pcaskin.com/',
    logo: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=200&h=100&q=80',
  },
];

const Brands = () => (
  <section className="bg-surfaceLow py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="font-500 mb-12 text-center font-heading text-3xl md:text-[42px]">
        Brands We Use
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex aspect-[2/1] items-center justify-center rounded-sm border border-outline/10 bg-surfaceLowest p-4 shadow-[0_10px_30px_-5px_rgba(32,26,26,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(32,26,26,0.1)]"
          >
            <div className="text-center group">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-[50px] max-w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                loading="lazy"
              />
              <span className="font-500 mt-2 block font-body text-[10px] uppercase tracking-wider text-onSurface/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {brand.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export { Brands };
