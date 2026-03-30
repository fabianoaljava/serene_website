import { AppConfig } from '@/utils/AppConfig';

const footerLinks1 = [
  { label: 'Service Menu', href: '#service-menu' },
  { label: 'Book Appointment', href: '#' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Shop', href: '#shop' },
  { label: 'Wedding', href: '#' },
  { label: 'Academy', href: '#' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#' },
];

const footerLinks2 = [
  { label: 'Gift Cards', href: '#gift-cards' },
  { label: 'Career', href: '#' },
  { label: 'Our Team', href: '#' },
  { label: 'Franchise', href: '#' },
  { label: 'Rental', href: '#' },
  { label: 'Blog', href: '#blog' },
  { label: 'T&C', href: '#' },
];

const Footer = () => (
  <footer className="border-t border-outline/10 bg-surfaceLow">
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Copyright */}
        <div>
          <a
            href="/"
            className="mb-3 block font-heading text-2xl font-medium tracking-wider text-onSurface"
          >
            {AppConfig.site_name}
          </a>
          <p className="font-300 font-body text-[13px] text-onSurface/40">
            © {new Date().getFullYear()} {AppConfig.site_name}
          </p>
        </div>

        {/* Nav Column 1 */}
        <div>
          <nav className="flex flex-col gap-2.5">
            {footerLinks1.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-400 font-body text-[14px] tracking-wide text-onSurface/70 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Nav Column 2 */}
        <div>
          <nav className="flex flex-col gap-2.5">
            {footerLinks2.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-400 font-body text-[14px] tracking-wide text-onSurface/70 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Subscribe & Social */}
        <div>
          <h5 className="font-500 mb-2 font-body text-[15px] tracking-wide">
            We don&apos;t keep our beauty secrets
          </h5>
          <p className="font-300 mb-4 font-body text-[13px] text-onSurface/50">
            Subscribe now and thank us later
          </p>
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="font-300 rounded border-none bg-surfaceHigh px-4 py-2.5 font-body text-sm text-onSurface transition-all placeholder:text-onSurface/40 focus:outline-none focus:ring-1 focus:ring-gold/20"
            />
            <button
              type="submit"
              className="font-500 rounded-pill bg-rose-light px-4 py-2.5 font-body text-[12px] uppercase tracking-[0.1em] text-rose transition-all duration-300 hover:bg-surfaceHigh hover:text-onSurface"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={AppConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-onSurface/40 transition-colors hover:text-gold"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={AppConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-onSurface/40 transition-colors hover:text-gold"
              aria-label="Facebook"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
