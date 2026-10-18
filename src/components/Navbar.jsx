import { useEffect, useRef, useState } from 'react';
import siteConfig from '../data/siteConfig';
import useTheme from '../hooks/useTheme';
import { CloseIcon, DocumentIcon, MenuIcon, MoonIcon, SunIcon } from './icons';

const MOBILE_QUERY = '(min-width: 900px)';

export default function Navbar({ activeId }) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);

  const closeMenu = (returnFocus = false) => {
    setIsMenuOpen(false);
    if (returnFocus && menuButtonRef.current) menuButtonRef.current.focus();
  };

  // Escape closes the drawer and hands focus back to the button that opened it.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu(true);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('nav-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('nav-open');
    };
  }, [isMenuOpen]);

  // Close the drawer when the viewport grows to the desktop navigation.
  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const onChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  // Move focus into the drawer when it opens so keyboard users land in the menu.
  useEffect(() => {
    if (isMenuOpen && firstLinkRef.current) firstLinkRef.current.focus();
  }, [isMenuOpen]);

  const nextThemeLabel = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="container site-header__inner">
        <a
          className="wordmark"
          href="#home"
          aria-label={`${siteConfig.name} — back to top`}
          onClick={() => closeMenu()}
        >
          <span className="wordmark__name">{siteConfig.name}</span>
          <span className="wordmark__role">{siteConfig.designation}</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {siteConfig.nav.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    className="site-nav__link"
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a
            className="btn btn--outline btn--sm resume-btn"
            href={siteConfig.resume}
            target="_blank"
            rel="noreferrer"
          >
            <DocumentIcon className="icon icon--sm" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextThemeLabel} theme`}
            title={`Switch to ${nextThemeLabel} theme`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            ref={menuButtonRef}
            className="icon-btn menu-btn"
            onClick={() => (isMenuOpen ? closeMenu(true) : setIsMenuOpen(true))}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="mobile-menu"
        aria-hidden={!isMenuOpen}
        onKeyDown={(event) => {
          if (event.key === 'Escape') closeMenu(true);
        }}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {siteConfig.nav.map((item, index) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    className="mobile-menu__link"
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => closeMenu()}
                    tabIndex={isMenuOpen ? undefined : -1}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <a
            className="btn btn--outline btn--sm"
            href={siteConfig.resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => closeMenu()}
            tabIndex={isMenuOpen ? undefined : -1}
          >
            <DocumentIcon className="icon icon--sm" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
