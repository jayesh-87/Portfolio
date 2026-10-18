import siteConfig from '../data/siteConfig';
import SectionHeading from './SectionHeading';
import { ExternalIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons';

const handle = (url) => url.replace(/\/+$/, '').split('/').pop();

const channels = (config) => [
  {
    id: 'email',
    label: 'Email',
    value: config.email,
    hint: 'Best for roles, collaborations, and questions',
    icon: MailIcon,
    href: `mailto:${config.email}`,
    external: false,
    action: 'Send an email',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: handle(config.linkedin),
    hint: 'Professional profile and background',
    icon: LinkedinIcon,
    href: config.linkedin,
    external: true,
    action: 'Open profile',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: handle(config.github),
    hint: 'Source code and automation work',
    icon: GithubIcon,
    href: config.github,
    external: true,
    action: 'View repositories',
  },
];

export default function Contact() {
  const items = channels(siteConfig);

  return (
    <section className="section section--navy" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="06 / Contact"
          title="Get in touch"
          lead={siteConfig.contact.heading}
        />

        <ul className="contact-grid">
          {items.map(({ icon: Icon, external, href, label, value, hint, action, id }) => (
            <li key={id}>
              <a
                className="contact-card"
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="contact-card__icon" aria-hidden="true">
                  <Icon className="icon" />
                </span>
                <span className="contact-card__label">{label}</span>
                <span className="contact-card__value">{value}</span>
                <span className="contact-card__hint">{hint}</span>
                <span className="contact-card__action">
                  {action}
                  {external ? (
                    <>
                      <ExternalIcon className="icon icon--xs" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </>
                  ) : null}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="contact__note">{siteConfig.contact.note}</p>
      </div>
    </section>
  );
}
