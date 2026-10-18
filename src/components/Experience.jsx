import siteConfig from '../data/siteConfig';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="03 / Experience"
          title="Professional experience"
          lead="Where my time goes: keeping automated coverage dependable and useful to the team shipping the software."
        />

        <ol className="timeline">
          {siteConfig.experience.map((entry) => (
            <li className="timeline__item" key={entry.id}>
              <span className="timeline__marker" aria-hidden="true" />

              <article className="timeline__card">
                <div className="timeline__head">
                  <div>
                    <h3 className="timeline__role">{entry.role}</h3>
                    <p className="timeline__focus">{entry.focus}</p>
                  </div>
                  <p className="timeline__period">{entry.period}</p>
                </div>

                <p className="timeline__summary">{entry.summary}</p>

                <ul className="timeline__list">
                  {entry.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
