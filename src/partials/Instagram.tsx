import { AppConfig } from '@/utils/AppConfig';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&h=400&q=80',
    likes: '124',
    comments: '12',
  },
  {
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&h=400&q=80',
    likes: '98',
    comments: '8',
  },
  {
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=400&h=400&q=80',
    likes: '231',
    comments: '24',
  },
  {
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&h=400&q=80',
    likes: '156',
    comments: '15',
  },
];

const Instagram = () => (
  <section id="instagram" className="py-20 md:py-28 bg-surfaceLowest">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center mb-16">
        <h2 className="font-500 font-heading text-3xl md:text-[42px] mb-4">
          @sereneskintherapy
        </h2>
        <p className="font-300 font-body text-onSurface/60 uppercase tracking-[0.2em] text-sm">
          Follow us for beauty tips & transformations
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {posts.map((post, index) => (
          <a
            key={index}
            href={AppConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-sm"
          >
            <img
              src={post.image}
              alt={`Instagram post ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-onSurface/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                <span className="font-500 text-sm">{post.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg>
                <span className="font-500 text-sm">{post.comments}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href={AppConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="font-500 inline-block rounded-pill border border-outline/20 px-8 py-3.5 font-body text-[14px] uppercase tracking-[0.1em] text-onSurface transition-all duration-300 hover:bg-onSurface hover:text-white"
        >
          View on Instagram
        </a>
      </div>
    </div>
  </section>
);

export { Instagram };
