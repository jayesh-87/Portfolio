import siteConfig from '../data/siteConfig';
import {
  ArrowRightIcon,
  DocumentIcon,
  GithubIcon,
  LinkedinIcon,
} from './icons';

export default function Hero() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">{siteConfig.eyebrow}</p>
          <p className="hero__role">
            {siteConfig.designation} <span aria-hidden="true">·</span> {siteConfig.focus}
          </p>

          <h1 className="hero__title" id="hero-title">
            {siteConfig.headline[0]}{' '}
            <span className="hero__title-accent">{siteConfig.headline[1]}</span>
          </h1>

          <p className="hero__intro">{siteConfig.heroIntro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              Explore My Work
              <ArrowRightIcon className="icon icon--sm" />
            </a>
            <a
              className="btn btn--outline"
              href={siteConfig.resume}
              target="_blank"
              rel="noreferrer"
            >
              <DocumentIcon className="icon icon--sm" />
              View Resume
            </a>
          </div>

          <ul className="hero__social" aria-label="Profiles">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                <GithubIcon className="icon" />
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                <LinkedinIcon className="icon" />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <aside className="flow-card" aria-labelledby="flow-title">
          <div className="flow-card__header">
            <span className="flow-card__dot" aria-hidden="true" />
            <p className="flow-card__label" id="flow-title">
              Test execution flow
            </p>
          </div>

          <ol className="flow-card__list">
            {siteConfig.heroFlow.map((step) => (
              <li className="flow-step" key={step.step}>
                <span className="flow-step__index" aria-hidden="true">
                  {step.step}
                </span>
                <span className="flow-step__body">
                  <span className="flow-step__label">{step.label}</span>
                  <span className="flow-step__detail">{step.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
