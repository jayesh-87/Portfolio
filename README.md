# Jayesh Solanke — SDET Portfolio

A single-page, statically built portfolio for **Jayesh Solanke, SDET 1** (software
quality engineering & test automation). Built with React 18 + Vite and plain CSS,
deployed to GitHub Pages.

**Live site:** <https://jayesh-87.github.io/Portfolio/>

---

## Quick start

```bash
npm ci          # install exactly what package-lock.json pins
npm run dev     # dev server → http://localhost:5173/Portfolio/
npm run build   # production build → dist/
npm run preview # serve the production build locally → http://localhost:4173/Portfolio/
```

There is no lint or test script configured in this project.

> The site is a GitHub **project** site, so it lives under `/Portfolio/`, not at the
> domain root. `vite.config.mjs` sets `base: '/Portfolio/'` and that base is applied
> in dev, in `npm run preview`, and in the production build. Always check links in
> `npm run preview`, not just in the dev server.

---

## Project structure

```
index.html                 Meta tags, favicon, Open Graph, pre-paint theme script
public/
  favicon.svg              Favicon / touch icon
  404.html                 GitHub Pages 404 → redirects to the single page
src/
  App.jsx                  Section order + active-section tracking
  main.jsx                 React entry
  styles.css               Design system: tokens, base, components, motion
  data/siteConfig.js       ★ All copy, links, skills, experience, projects
  components/              Navbar, Hero, About, Skills, Experience, Projects,
                           Approach, Contact, Footer, SectionHeading, icons
  hooks/useTheme.js        Theme toggle (system default + persisted preference)
  hooks/useActiveSection.js  Scroll spy for nav highlight (aria-current)
  assets/                  Profile image (jpg = optimized, png = original), screenshots
  ../resume.pdf            Bundled from the repository root into dist/
.github/workflows/deploy.yml  Build + deploy to GitHub Pages
```

---

## Editing content (the maintenance guide)

Everything a visitor reads lives in **`src/data/siteConfig.js`**. Components render
that data; you should not need to touch a component to change copy.

| Want to…                  | Edit                                                      |
| ------------------------- | --------------------------------------------------------- |
| Change name, headline, CTAs | `name`, `designation`, `eyebrow`, `headline`, `heroIntro` |
| Add/reorder nav links      | `nav` (the `href` must match a section `id` in `App.jsx`)  |
| Update the About copy      | `about.paragraphs`, `about.facts`                          |
| Change skills              | `skills` (array of `{ title, items[] }`)                   |
| Add a future role          | append to `experience` (role, focus, period, summary, responsibilities) |
| **Add a project**          | append to `projects`                                       |
| Add an extra repository link | append to `earlierProjects`                              |
| Edit engineering principles | `principles`                                              |
| Contact details            | `email`, `github`, `linkedin`, `contact`                   |

### Adding a project

```js
{
  id: 'my-project',                 // unique, also used for the card modifier class
  name: 'My Project',
  status: 'Public repository',      // or 'Planned' / 'In development'
  description: 'One or two honest sentences.',
  tags: ['Java', 'Playwright'],
  source: 'https://github.com/jayesh-87/my-project', // null = no link is rendered
  sourceLabel: 'View Source',
  demo: null,                        // add a URL only when a demo actually runs
}
```

Rules this codebase follows on purpose:

- A `status` of `Planned` or `In development` renders a muted badge, and the card
  never claims shipped behaviour for work that is not built yet.
- `source: null` renders an explanatory line instead of a broken link.
- `demo` links are only rendered when a URL exists — no placeholder buttons.

---

## Design system

`src/styles.css` defines the tokens once and every component consumes them:

- **Color** `--bg` (#F8FAFC) / `--navy` (#0F172A) / `--surface` (#FFFFFF light,
  #1E293B dark), `--border`, `--text` / `--text-muted` (slate scale),
  `--accent` (restrained blue #2563EB), `--accent-2` (subtle teal — ImpactTest
  highlight only). Hero, contact, and footer scope an inverse navy palette.
- **Type** `--font-sans`, `--font-mono`, `--fs-*` (mono is reserved for eyebrows,
  chips, and small technical labels)
- **Space** `--space-1…8`, `--section-y`, `--gutter`, `--container`
- **Shape** `--radius*`, `--shadow-*`
- **Motion** `--transition`, `--ease-out`

**Themes:** light is the default; `[data-theme="dark"]` overrides the tokens. An
inline script in `index.html` applies the visitor's saved choice (or their OS
preference) before first paint, so there is no flash of wrong colors. The toggle
persists to `localStorage` under `portfolio-theme`.

**Accessibility built in:** skip link, visible `:focus-visible` outline, semantic
section/heading structure, `aria-current` on the active nav link, `aria-expanded`
/ `aria-controls` on the menu button, Escape-to-close with focus return, external
links marked "opens in a new tab" for screen readers, and `prefers-reduced-motion`
disabling smooth scrolling and transforms.

---

## Deployment — GitHub Pages

The site is deployed automatically by GitHub Actions
(`.github/workflows/deploy.yml`):

1. Push to `main` (or run the workflow manually from the **Actions** tab).
2. `npm ci` installs dependencies from `package-lock.json`.
3. `npm run build` produces `dist/`.
4. The official Pages actions upload and deploy `dist/`.

### One-time repository settings

> **Settings → Pages → Build and deployment → Source: `GitHub Actions`.**

Pages is currently configured to publish from the `docs/` folder on `main` (a stale
build left over from the previous site). The committed `docs/` folder and the
tracked `node_modules/` have both been removed from the repository; after you switch
the source above, the workflow takes over on the next push to `main`.

### Things that stay true on Pages

- `base: '/Portfolio/'` is correct for a repository named `Portfolio`.
- No backend, no server APIs, no client-side router — deep links are
  `…/Portfolio/#projects`, which GitHub Pages resolves without a server.
- `resume.pdf` is imported through Vite, so it is fingerprinted and served from
  `/Portfolio/assets/…`.
- `public/404.html` sends unknown paths back to the single page.

**Do not commit `dist/`** — it is generated and `.gitignore`d.

---

## Notes

- **Resume:** `resume.pdf` at the repository root is the source of truth. It is
  linked from the header, hero, and mobile menu. Do not rename it without
  checking `src/data/siteConfig.js`.
- **Photo:** `src/assets/profile.jpg` is an optimized copy (quality 84) of the
  original `profile.png` — same 460×460 render, ~77% smaller download.
- **Contact:** links go straight to email, LinkedIn, and GitHub — there is no
  contact form or backend. If a form is wanted later, wire up a static-service
  endpoint (Formspree/EmailJS) in `src/components/Contact.jsx` and remove that
  dependency's keys from the source only if they are public, client-side keys.
- **Confidentiality:** keep employer names, internal tooling, and proprietary
  detail out of `src/data/siteConfig.js`.
