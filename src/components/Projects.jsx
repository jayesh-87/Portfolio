import siteConfig from '../data/siteConfig';
import SectionHeading from './SectionHeading';
import { ArrowRightIcon, ExternalIcon, RepoIcon } from './icons';

function statusTone(status) {
  return /planned|development|explor/i.test(status) ? 'planned' : 'available';
}

function ProjectCard({ project }) {
  const tone = statusTone(project.status);

  return (
    <article className={`project-card project-card--${project.id}`}>
      <div className="project-card__head">
        <span className={`status-badge status-badge--${tone}`}>{project.status}</span>
        {project.sourceRepo ? (
          <span className="project-card__repo">{project.sourceRepo}</span>
        ) : null}
      </div>

      <h3 className="project-card__title">{project.name}</h3>
      <p className="project-card__desc">{project.description}</p>

      {project.goals ? (
        <div className="project-card__goals">
          <p className="project-card__label">{project.goalLabel}</p>
          <ul className="goal-list">
            {project.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <ul className="chip-list chip-list--sm">
        {project.tags.map((tag) => (
          <li className="chip" key={tag}>
            {tag}
          </li>
        ))}
      </ul>

      <div className="project-card__footer">
        {project.source ? (
          <a
            className="text-link"
            href={project.source}
            target="_blank"
            rel="noreferrer"
          >
            <RepoIcon className="icon icon--sm" />
            {project.sourceLabel || 'View Source'}
            <ExternalIcon className="icon icon--xs" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <p className="project-card__note">
            Source will be published once implementation begins.
          </p>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section section--muted" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="04 / Projects"
          title="Featured projects"
          lead="One project in development and two you can read today. Each card states its real status, so nothing reads as shipped before it is."
        />

        <div className="projects-grid">
          {siteConfig.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="earlier">
          <h3 className="earlier__title">Other repositories</h3>
          <p className="earlier__lead">
            Exploratory work in data and web development, linked for completeness.
          </p>

          <ul className="earlier__grid">
            {siteConfig.earlierProjects.map((project) => (
              <li className="earlier__item" key={project.id}>
                <a
                  className="earlier__link"
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="earlier__name">{project.name}</span>
                  <ArrowRightIcon className="icon icon--sm" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p className="earlier__desc">{project.description}</p>
                <ul className="chip-list chip-list--sm">
                  {project.tech.map((tag) => (
                    <li className="chip" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
