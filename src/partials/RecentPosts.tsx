import type { MarkdownInstance } from 'astro';

type IFrontmatter = {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
};

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <section className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-12 flex items-baseline justify-between">
        <h2 className="font-500 font-heading text-3xl md:text-[42px]">
          Recent{' '}
          <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            Posts
          </span>
        </h2>
        <a
          href="/posts/"
          className="font-400 font-body text-sm text-gold transition-colors hover:text-gold-light"
        >
          View all Posts →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {props.postList.map((post) => (
          <a
            key={post.frontmatter.title}
            href={post.url}
            className="group block overflow-hidden rounded-sm border border-outline/10 bg-surfaceLowest shadow-[0_10px_30px_-5px_rgba(32,26,26,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(32,26,26,0.1)]"
          >
            {post.frontmatter.imgSrc && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.frontmatter.imgSrc}
                  alt={post.frontmatter.imgAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-5">
              <p className="font-300 mb-2 font-body text-[12px] text-onSurface/40">
                {post.frontmatter.pubDate}
              </p>
              <h3 className="font-500 mb-2 font-heading text-lg text-onSurface transition-colors duration-300 group-hover:text-gold">
                {post.frontmatter.title}
              </h3>
              <p className="font-300 line-clamp-2 font-body text-sm text-onSurface/60">
                {post.frontmatter.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export { RecentPosts };
