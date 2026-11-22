import resumePdf from '../../resume.pdf?url';
// Optimized copy of src/assets/profile.png (same 460×460 render, ~77% smaller file).
import profilePhoto from '../assets/profile.jpg';

/**
 * Single source of truth for every piece of copy on the site.
 *
 * To add a project: append an object to `projects` (featured) or
 * `earlierProjects`. No component changes are required.
 *
 * Keep personal copy, employer names, and public project details centralized here.
 */
const siteConfig = {
  name: 'Jayesh Solanke',
  designation: 'Automation Engineer',
  eyebrow: 'Automation Engineer · FinacPlus',
  focus: 'Software Quality Engineering & Test Automation',

  headline: ['Building reliable automation.', 'Delivering software with confidence.'],
  heroIntro:
    "Hi, I'm Jayesh Solanke, an Automation Engineer at FinacPlus, passionate about building reliable automation solutions, developing scalable test frameworks, and improving software quality through efficient testing strategies. Previously, I worked as an SDET 1 at GoComet, gaining hands-on experience in UI automation, API testing, regression testing, and software quality engineering.",

  email: 'jayeshsoanke47@gmail.com',
  github: 'https://github.com/jayesh-87',
  linkedin: 'https://www.linkedin.com/in/jayesh-solanke',
  resume: resumePdf,
  profilePhoto,

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ],

  /**
   * Static test-execution flow shown in the hero.
   * Labels only — no fabricated pass/fail results or metrics.
   */
  heroFlow: [
    {
      step: '01',
      label: 'Arrange',
      detail: 'Reproducible test data and environment setup',
    },
    {
      step: '02',
      label: 'Act',
      detail: 'Exercise user workflows and the APIs behind them',
    },
    {
      step: '03',
      label: 'Assert',
      detail: 'Check the behaviour that carries the real risk',
    },
    {
      step: '04',
      label: 'Report',
      detail: 'Clear evidence, so a failure can be debugged quickly',
    },
  ],

  about: {
    paragraphs: [
      'Automation Engineer at FinacPlus with previous experience as an SDET 1 at GoComet. Experienced in UI automation, API testing, regression testing, and integration testing.',
      'Interested in building maintainable automation frameworks, improving test coverage, optimizing testing workflows, and integrating automation into CI/CD pipelines.',
      'Passionate about continuous learning, debugging complex issues, and delivering reliable software through automation.',
    ],
    facts: [
      { label: 'Current role', value: 'Automation Engineer' },
      { label: 'Organization', value: 'FinacPlus' },
      { label: 'Previous role', value: 'SDET 1 at GoComet' },
      { label: 'Education', value: 'B.Tech, Information Technology' },
    ],
    photoAlt: 'Portrait of Jayesh Solanke',
  },

  skills: [
    {
      title: 'QA & Automation',
      items: ['Java', 'Playwright', 'Selenium', 'JUnit', 'API Testing', 'Postman', 'pytest'],
    },
    {
      title: 'Programming & Development',
      items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'REST APIs'],
    },
    {
      title: 'CI/CD & Tools',
      items: ['Jenkins', 'Git', 'GitHub', 'GitHub Actions', 'Jira'],
    },
  ],
  skillsNote:
    'Focused on maintainable automation frameworks, regression testing, integration testing, and software quality engineering.',

  experience: [
    {
      id: 'finacplus',
      role: 'Automation Engineer',
      focus: 'FinacPlus',
      period: 'Present',
      summary: 'Working as an Automation Engineer, focusing on automation solutions and software quality.',
      responsibilities: [
        'Working as an Automation Engineer, focusing on automation solutions and software quality.',
        'Contributing to reliable and maintainable automation workflows.',
        'Applying automation engineering practices to improve testing efficiency and software reliability.',
      ],
    },
    {
      id: 'gocomet',
      role: 'Software Development Engineer in Test (SDET 1)',
      focus: 'GoComet',
      period: 'Previous',
      summary: 'Built and maintained test automation solutions and contributed to software quality engineering.',
      responsibilities: [
        'Worked on building and maintaining test automation solutions.',
        'Performed UI automation and API testing.',
        'Contributed to regression and integration testing.',
        'Investigated defects and debugged test failures.',
        'Worked towards improving test coverage and overall software quality.',
      ],
    },
  ],

  projects: [
    {
      id: 'impacttest',
      name: 'ImpactTest',
      status: 'Planned',
      description:
        'An intelligent regression test selection engine that analyzes code changes, dependency relationships, and test coverage to recommend an appropriate regression suite.',
      goalLabel: 'Planned capabilities',
      goals: [
        'Git diff analysis',
        'Static dependency graph analysis',
        'Per-test runtime coverage',
        'Impact-based test selection',
        'Conservative full-suite fallback when impact is uncertain',
        'CI/CD integration',
        'Explainable selection reports',
        'Validation against full-suite results',
      ],
      tags: ['Regression selection', 'Static analysis', 'Coverage', 'CI/CD'],
      source: null,
      sourceLabel: null,
      demo: null,
    },
    {
      id: 'library-management',
      name: 'Automated Library Management System',
      status: 'Public repository',
      description:
        'An automated library management system project using Python and Selenium, with a page object model for maintainable UI test automation.',
      tags: ['Python', 'Selenium', 'Page Object Model'],
      source: 'https://github.com/jayesh-87/Automated-Library-Management-System',
      sourceLabel: 'View Source',
      demo: null,
    },
    {
      id: 'stock-price-predictor',
      name: 'Stock Price Predictor',
      status: 'Public repository',
      description:
        'A data-driven stock price prediction project exploring machine learning models and SQL-based data workflows.',
      tags: ['Python', 'TensorFlow', 'SQL'],
      source: 'https://github.com/jayesh-87/1st-prototype',
      sourceRepo: 'jayesh-87/1st-prototype',
      sourceLabel: 'View Source',
      demo: null,
    },
  ],

  earlierProjects: [
    {
      id: 'house-price',
      name: 'House Price Prediction using Machine Learning',
      description:
        'An end-to-end regression workflow covering preprocessing, exploratory analysis, feature engineering, training, and evaluation.',
      tech: ['Python', 'scikit-learn'],
      source: 'https://github.com/jayesh-87/House-Price-Prediction-using-Machine-Learning',
    },
    {
      id: 'ai-trading-genie',
      name: 'AI Trading Genie',
      description:
        'An ensemble model combining a Keras LSTM for time-series patterns with XGBoost for regression.',
      tech: ['Python', 'Keras', 'XGBoost'],
      source: 'https://github.com/jayesh-87/Al-Trading-Genie',
    },
    {
      id: 'smart-parking',
      name: 'Smart Parking System',
      description:
        'A web application for managing visitors and parking availability for residential communities.',
      tech: ['Web application'],
      source: 'https://github.com/jayesh-87/smart-parking-system',
    },
  ],

  principles: [
    {
      title: 'Risk first',
      body: 'Test the highest-risk behaviour first — the flows whose failure would cost the most to ship or to users.',
    },
    {
      title: 'Isolated and reproducible',
      body: 'Keep tests independent so any single run can be repeated without side effects from a previous one.',
    },
    {
      title: 'Interfaces, not implementations',
      body: 'Validate what APIs and user-facing behaviour actually promise, not incidental details of the code.',
    },
    {
      title: 'Actionable failures',
      body: 'Make a red test useful: clear messages, logs, and evidence that point to the cause instead of hiding it.',
    },
    {
      title: 'Automate the repetitive',
      body: 'Push the repeated regression effort into automation so people spend their time on the risky parts.',
    },
    {
      title: 'Selective, not skipped',
      body: 'Prefer evidence-based test selection over skipping tests — when impact is unclear, fall back to the full suite.',
    },
  ],

  contact: {
    heading: 'Open to conversations about automation engineering, test automation, and software quality engineering.',
    note: 'The fastest way to reach me is email — I read everything that lands there.',
  },
};

export default siteConfig;
