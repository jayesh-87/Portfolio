# React Single-Page Portfolio (Vite)

This is a minimal, ready-to-customize single-page portfolio built with **React** and **Vite**.
It uses plain CSS and a component-based structure for: Hero, About, Skills, Projects, Experience, Contact, Footer.

## Quick start

1. Install dependencies
```bash
npm install
```

2. Run dev server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
```

4. Deploy to GitHub Pages
- Install gh-pages if you don't have it locally: `npm i -D gh-pages`
- Then run:
```bash
npm run deploy
```
This uses the `predeploy` script to build and `gh-pages` to publish the `dist` folder to GitHub Pages.

## Customize
- Edit `src/data/siteConfig.js` to change your name, links, projects, and skills.
- Replace `src/assets/profile.jpg` with your photo.
- Update styles in `src/styles.css`

## Notes
- This project uses simple anchor navigation with `scroll-behavior: smooth`.
- Contact form is wired to Post placeholder (no server). For a working form, use EmailJS or Formspree and add keys in `src/components/Contact.jsx`.