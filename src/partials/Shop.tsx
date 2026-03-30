const products = [
  {
    name: 'Facial Cleanser',
    price: '£19.00',
    oldPrice: '£25.00',
    sale: true,
    image:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Eye Cream',
    price: '£54.00',
    oldPrice: null,
    sale: false,
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Super Glow',
    price: '£21.00',
    oldPrice: '£28.00',
    sale: true,
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Facial Balancing Gel',
    price: '£32.00',
    oldPrice: null,
    sale: false,
    image:
      'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?auto=format&fit=crop&w=400&q=80',
  },
];

const Shop = () => (
  <section id="shop" className="bg-surfaceLow py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="font-500 mb-16 text-center font-heading text-3xl md:text-[42px]">
        Shop
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <a
            key={product.name}
            href="#"
            className="group block overflow-hidden rounded-sm border border-outline/10 bg-surfaceLowest shadow-[0_10px_30px_-5px_rgba(32,26,26,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(32,26,26,0.1)]"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-surfaceHigh">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {product.sale && (
                <span className="font-500 absolute left-3 top-3 rounded-pill bg-gold px-3 py-1 font-body text-[11px] uppercase tracking-wider text-white">
                  Sale!
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-400 mb-2 font-body text-base text-onSurface">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                {product.oldPrice && (
                  <span className="font-body text-sm text-onSurface/40 line-through">
                    {product.oldPrice}
                  </span>
                )}
                <span className="font-500 font-body text-sm text-onSurface">
                  {product.price}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="font-500 inline-block rounded-pill bg-rose-light px-8 py-3.5 font-body text-[14px] uppercase tracking-[0.1em] text-rose transition-all duration-300 hover:bg-surfaceHigh hover:text-onSurface"
        >
          Shop All
        </a>
      </div>
    </div>
  </section>
);

export { Shop };
