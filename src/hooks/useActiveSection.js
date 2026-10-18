import { useEffect, useState } from 'react';

/**
 * Highlights the section currently under the viewport and marks its nav link
 * with `aria-current`, so keyboard and screen-reader users get the same cue
 * sighted users get from the active link style.
 */
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] || '');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0 || !('IntersectionObserver' in window)) return undefined;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        });

        if (visible.size === 0) return;
        const [topId] = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        setActiveId(topId);
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids.join('|')]);

  return activeId;
}
