const posts = [
  {
    title: '10 Tips for Healthy Mind and Body',
    category: 'Health',
    date: 'June 29, 2020',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'How to Maintain Healthy Hair: 10 Easy Tips',
    category: 'Health',
    date: 'June 20, 2020',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Aroma Therapy and Aroma Massages',
    category: 'Health',
    date: 'June 20, 2020',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: '10 Ways to Spend Your Weekend Outside',
    category: 'Health',
    date: 'June 20, 2020',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
];

const Blog = () => (
  <section id="blog" className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="font-500 mb-16 text-center font-heading text-3xl md:text-[42px]">
        Blog
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <a key={post.title} href="#" className="group block">
            <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mb-2 flex items-center gap-3">
              <span className="font-500 relative font-body text-[12px] uppercase tracking-wider text-gold after:absolute after:-bottom-0.5 after:-left-0 after:h-[1px] after:w-full after:bg-gold after:content-['']">
                {post.category}
              </span>
              <span className="font-300 font-body text-[12px] text-onSurface/40">
                {post.date}
              </span>
            </div>
            <h3 className="font-500 font-body text-[15px] leading-snug text-onSurface transition-colors duration-300 group-hover:text-gold">
              {post.title}
            </h3>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="font-500 inline-block rounded-pill bg-rose-light px-8 py-3.5 font-body text-[14px] uppercase tracking-[0.1em] text-rose transition-all duration-300 hover:bg-surfaceHigh hover:text-onSurface"
        >
          View All Posts
        </a>
      </div>
    </div>
  </section>
);

export { Blog };
