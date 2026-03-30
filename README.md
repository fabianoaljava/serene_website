# Serene — Beauty Salon Website Template

A modern, elegant website template for beauty salons, skin therapists, and anti-aging specialists. Built with **Astro**, **TypeScript**, **React**, and **Tailwind CSS**.

## ✨ Features

### Design

- 🎨 Premium design system with a warm, luxurious aesthetic
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🌅 Full-screen hero section with overlay gradient
- 🧭 Transparent-to-solid navbar with scroll detection
- 🖼️ Service menu, testimonials, and contact sections
- ✍️ Custom typography with heading and body font families
- 🎯 Material Design 3 inspired colour tokens

### Technical

- 🚀 [Astro](https://astro.build/) for fast, static-first rendering
- ⚛️ [React](https://react.dev/) interactive components
- 🎨 [Tailwind CSS 3](https://tailwindcss.com/) with custom theme tokens
- 🎉 [TypeScript](https://www.typescriptlang.org/) for type safety
- 🤖 SEO-friendly with sitemap and robots.txt
- ⚙️ RSS feed support
- ✏️ ESLint + Prettier (Astro-compatible)
- 🦊 Husky + lint-staged + Commitlint for clean commits
- 🔧 One-click deploy on Netlify

## 🗂️ Project Structure

```
src/
├── images/           # Logo and image assets
├── pages/            # Astro page routes
├── partials/         # React components (Navbar, Hero, Footer, etc.)
├── templates/        # Astro layout templates
└── utils/
    └── AppConfig.ts  # Centralised site configuration
```

## ⚙️ Configuration

All site-wide settings are managed in `src/utils/AppConfig.ts`:

```ts
export const AppConfig = {
  site_name: 'Serene',
  title: 'Serene - Skin Therapist & Anti-Aging Specialist',
  description: '...',
  phone: '123494 124345',
  email: 'info@mybeautysaloon.co.uk',
  address_line1: '123 Main Street',
  address_line2: 'Anytown',
  address_line3: 'United Kingdom',
  hours: ['Mon to Fri: 7:30 am — 1:00 am', ...],
  social: {
    instagram: 'https://www.instagram.com/mybeautysaloon/',
    facebook: 'https://www.facebook.com/mybeautysaloon',
  },
};
```

Update this file to customise the salon name, contact details, opening hours, and social links across the entire site.

## 🚀 Getting Started

### Requirements

- [Node.js](https://nodejs.org/) (v16.15+ recommended)
- npm

### Installation

```bash
git clone https://github.com/fabianoaljava/serene_website.git
cd serene_website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build

```bash
npm run build
```

The optimised output will be in the `dist/` folder, ready to deploy to any static hosting provider.

## 🧞 Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the production build locally        |
| `npm run clean`   | Remove `./dist` folder                      |
| `npm run lint`    | Run ESLint and report errors                |

## 🚢 Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fabianoaljava/serene_website)

## 📄 License

Licensed under the MIT License.

---

Made with ♥ by [Fabiano Aljava](https://github.com/fabianoaljava)
