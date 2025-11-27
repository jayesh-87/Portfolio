import React from 'react';
import siteConfig from '../data/siteConfig';

function SkillList({ title, items }) {
  return (
    <div className="skill-category">
      <h4>{title}</h4>
      <ul>
        {items.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="skills container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {siteConfig.skills.map((category, index) => (
          <SkillList key={index} title={category.title} items={category.items} />
        ))}
      </div>
    </div>
  );
}