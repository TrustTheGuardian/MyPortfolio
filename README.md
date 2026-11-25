# Portfolio — Jason Gomez

A personal cybersecurity portfolio built with **React + Vite + Tailwind CSS**.

## Stack

- React 18 + Vite 6
- Tailwind CSS 3 (JetBrains Mono, neon green dark theme)
- GitHub Pages deployment via GitHub Actions

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

The site auto-deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

## Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── Certifications/   # cert images by issuer
│   │   ├── Events/           # event photos
│   │   └── Profile/          # profile photos
│   └── Tasks/                # PDF writeups
└── src/
    ├── components/           # Sidebar, Lightbox, PdfModal, MobileHeader
    ├── sections/             # AboutSection, ExperienceSection, ...
    ├── App.jsx
    └── main.jsx
```

