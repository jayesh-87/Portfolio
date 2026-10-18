/**
 * Shared section header: mono eyebrow, title, and an optional lead line.
 * Keeps every section aligned to the same rhythm.
 */
export default function SectionHeading({ id, eyebrow, title, lead, align = 'start' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </header>
  );
}
