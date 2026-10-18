import siteConfig from '../data/siteConfig';
import SectionHeading from './SectionHeading';

export default function About() {
  const { about } = siteConfig;

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="01 / About"
          title="About me"
          lead="I build reliable test automation solutions that help engineering teams validate software quality, detect regressions, and ship changes with confidence."
        />

        <div className="about__grid">
          <div className="about__media">
            <img
              className="about__photo"
              src={siteConfig.profilePhoto}
              alt={about.photoAlt}
              width="460"
              height="460"
              loading="lazy"
              decoding="async"
            />

            <dl className="fact-list">
              {about.facts.map((fact) => (
                <div className="fact-list__item" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="about__body">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
