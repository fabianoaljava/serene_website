const projects = [
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
    link: '/',
    image: '/assets/images/project-web-design.png',
    tags: ['Astro.js', 'Web design', 'Tailwind.css', 'TypeScript'],
  },
  {
    name: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
    link: '/',
    image: '/assets/images/project-fire.png',
    tags: ['Next.js', 'Blog', 'JavaScript'],
  },
  {
    name: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
    link: '/',
    image: '/assets/images/project-maps.png',
    tags: ['Astro.js', 'Bootstrap', 'TypeScript'],
  },
];

const tagColors: Record<string, string> = {
  'Astro.js': 'bg-rose-light text-rose',
  'Web design': 'bg-surfaceHigh text-gold',
  'Tailwind.css': 'bg-surfaceLow text-gold',
  TypeScript: 'bg-rose-light/60 text-rose',
  'Next.js': 'bg-surfaceHigh text-onSurface/70',
  Blog: 'bg-surfaceLow text-gold',
  JavaScript: 'bg-rose-light/40 text-rose',
  Bootstrap: 'bg-surfaceHigh text-onSurface/60',
};

const ProjectList = () => (
  <section className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="font-500 mb-12 font-heading text-3xl md:text-[42px]">
        Recent{' '}
        <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className="group flex flex-col gap-6 rounded-sm border border-outline/10 bg-surfaceLowest p-6 shadow-[0_10px_30px_-5px_rgba(32,26,26,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(32,26,26,0.1)] md:flex-row"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-36 w-full shrink-0 rounded-sm object-cover md:w-48"
              loading="lazy"
            />
            <div className="flex-1">
              <h3 className="font-500 mb-2 font-heading text-xl transition-colors duration-300 group-hover:text-gold">
                {project.name}
              </h3>
              <p className="font-300 mb-4 font-body text-sm leading-relaxed text-onSurface/60">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-500 rounded-pill px-3 py-1 font-body text-[11px] uppercase tracking-wider ${
                      tagColors[tag] || 'bg-surfaceHigh text-onSurface/60'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export { ProjectList };
