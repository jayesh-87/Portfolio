import siteConfig from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__identity">
          <p className="site-footer__name">{siteConfig.name}</p>
          <p className="site-footer__role">
            {siteConfig.designation} <span aria-hidden="true">·</span> {siteConfig.focus}
          </p>
        </div>

        <nav className="site-footer__links" aria-label="Footer">
          <a href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
        </nav>

        <p className="site-footer__copy">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        </p>
      </div>
    </footer>
  );
}
