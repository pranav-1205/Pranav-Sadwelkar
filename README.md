# Pranav Sadwelkar - Personal Portfolio

A modern, responsive personal portfolio website built with React 19, Vite, and React Router.

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool & dev server
- **React Router v7** - Client-side routing
- **EmailJS** - Contact form handling
- **Oxlint** - Fast linting

## Project Structure

```
├── public/                 # Static assets (copied to dist/)
│   ├── favicon.svg
│   ├── icons.svg
│   └── assets/
│       └── resume/
│           └── Pranav_Sadwelkar_Resume.pdf
├── src/
│   ├── assets/            # Images, fonts, etc.
│   │   ├── hero.png
│   │   └── img/
│   ├── components/        # React components
│   │   ├── About/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Footer/
│   │   ├── Home/
│   │   ├── Layout/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── styles/
│   │   └── styles.css     # Global styles
│   ├── App.jsx            # App routing
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── netlify.toml           # Netlify deployment config
├── vercel.json            # Vercel deployment config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts dev server at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Outputs to `dist/` directory

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `netlify.toml` handles SPA routing automatically

### Vercel

1. Import project in Vercel
2. Framework preset: Vite
3. The `vercel.json` handles SPA routing automatically

### GitHub Pages

1. Add `base: '/repo-name/'` to `vite.config.js`
2. Run `npm run build`
3. Deploy `dist/` folder to GitHub Pages

### Static Hosting (Any)

The `dist/` folder contains a complete static site. Upload to any static host (Netlify Drop, Vercel CLI, Firebase Hosting, Surge.sh, etc.)

## Features

- **Single Page Application** - Smooth navigation without page reloads
- **Responsive Design** - Works on mobile, tablet, desktop
- **Contact Form** - Powered by EmailJS
- **SEO Ready** - Semantic HTML, meta tags
- **Fast** - Optimized Vite build with code splitting
- **Accessible** - Proper ARIA labels, keyboard navigation

## Customization

- Update content in component files under `src/components/`
- Replace images in `src/assets/img/`
- Update resume PDF in `public/assets/resume/`
- Modify styles in `src/styles/styles.css`

## License

MIT