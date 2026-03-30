import type { ReactNode } from 'react';

type IFrontmatter = {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
};

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <section className="py-20 md:py-28">
    <div className="mx-auto max-w-3xl px-6">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="font-400 mb-4 font-heading text-3xl leading-tight md:text-[48px]">
          {props.frontmatter.title}
        </h1>
        <p className="font-300 font-body text-sm text-onSurface/50">
          {props.frontmatter.pubDate}
        </p>
        {props.frontmatter.imgSrc && (
          <img
            src={props.frontmatter.imgSrc}
            alt={props.frontmatter.imgAlt}
            className="mt-8 w-full rounded-sm"
            loading="lazy"
          />
        )}
      </header>

      {/* Content */}
      <article className="font-300 prose prose-lg max-w-none font-body text-onSurface/80 prose-headings:font-heading prose-headings:text-onSurface prose-a:text-gold hover:prose-a:text-gold-light prose-blockquote:border-gold-light prose-blockquote:font-heading prose-blockquote:italic">
        {props.children}
      </article>
    </div>
  </section>
);

export { BlogPost };
export type { IFrontmatter };
