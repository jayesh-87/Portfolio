import siteConfig from '../data/siteConfig';
import SectionHeading from './SectionHeading';

export default function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <SectionHeading
          id="approach-title"
          eyebrow="05 / Approach"
          title="Engineering approach"
          lead="The principles I use when deciding what to test, how to structure it, and what a failure should tell you."
        />

        <ol className="principles-grid">
          {siteConfig.principles.map((principle, index) => (
            <li className="principle" key={principle.title}>
              <span className="principle__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="principle__title">{principle.title}</h3>
                <p className="principle__body">{principle.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
