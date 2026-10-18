import siteConfig from '../data/siteConfig';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section className="section section--muted" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="02 / Skills"
          title="Technical skills"
          lead="The languages, frameworks, and practices I use day to day — grouped by what they are for."
        />

        <ul className="skills-grid">
          {siteConfig.skills.map((category) => (
            <li className="skill-group" key={category.title}>
              <h3 className="skill-group__title">{category.title}</h3>
              <ul className="chip-list">
                {category.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="skills__note">{siteConfig.skillsNote}</p>
      </div>
    </section>
  );
}
