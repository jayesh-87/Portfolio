import resumePdf from '../../resume.pdf?url';
// Optimized copy of src/assets/profile.png (same 460×460 render, ~77% smaller file).
import profilePhoto from '../assets/profile.jpg';

/**
 * Single source of truth for every piece of copy on the site.
 *
 * To add a project: append an object to `projects` (featured) or
 * `earlierProjects`. No component changes are required.
 *
 * Keep this file free of employer names, internal tooling, and proprietary detail.
 */
const siteConfig = {
  name: 'Jayesh Solanke',
  designation: 'SDET 1',
  eyebrow: 'Software Development Engineer in Test',
  focus: 'Software Quality Engineering & Test Automation',

  headline: ['Building reliable automation.', 'Delivering software with confidence.'],
  heroIntro:
    'I engineer maintainable test automation, validate APIs and user workflows, and explore smarter ways to identify regression risks before changes reach production.',

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
      "I'm a Software Development Engineer in Test (SDET 1) focused on quality engineering and test automation. Day to day that means designing, building, and maintaining automated suites that a team can trust — mostly with Playwright and Java — covering UI workflows, API behaviour, and the integration points where regressions tend to hide.",
      'I treat test architecture as seriously as individual test cases: predictable isolation, deliberate test data setup and cleanup, and failures that read clearly instead of sending you back to the logs. When a suite goes red I work from evidence — traces, diffs, and logs — to separate a genuine product defect from a flaky test rather than guessing.',
      'I also care about where tests run: CI/CD pipelines that surface regressions early, suites that stay fast enough to run often, and smarter ways to choose the right regression scope instead of always running everything.',
    ],
    facts: [
      { label: 'Current role', value: 'SDET 1' },
      { label: 'Focus', value: 'Test automation & quality engineering' },
      { label: 'Primary stack', value: 'Playwright · Java' },
      { label: 'Education', value: 'B.Tech, Information Technology' },
    ],
    photoAlt: 'Portrait of Jayesh Solanke',
  },

  skills: [
    {
      title: 'Programming',
      items: ['Java', 'TypeScript'],
    },
    {
      title: 'Test automation',
      items: ['Playwright', 'Selenium WebDriver', 'pytest', 'Page object model', 'End-to-end tests'],
    },
    {
      title: 'API & integration testing',
      items: ['REST API testing', 'Integration testing', 'Response & error validation', 'Cross-layer workflows'],
    },
    {
      title: 'CI/CD & version control',
      items: ['Git', 'GitHub Actions', 'Jenkins', 'CI pipeline configuration'],
    },
    {
      title: 'Quality engineering',
      items: [
        'Regression testing',
        'Test isolation',
        'Test data management',
        'Defect analysis',
        'Root cause analysis',
        'Risk-based testing',
        'Flaky test triage',
      ],
    },
    {
      title: 'Tools',
      items: ['IntelliJ IDEA', 'Jira', 'Confluence'],
    },
  ],
  skillsNote:
    'Currently exploring: intelligent regression test selection, risk-based test selection, and automation framework architecture.',

  experience: [
    {
      id: 'sdet-1',
      role: 'SDET 1',
      focus: 'Software Quality Engineering & Test Automation',
      period: 'Current role',
      summary:
        'Building and maintaining automated coverage for user-facing and API behaviour — with an emphasis on suites that stay reliable and reproducible, so a red run can be trusted.',
      responsibilities: [
        'Developing and maintaining automated tests across UI and API layers.',
        'Validating application behaviour against requirements and expected outcomes.',
        'Improving regression reliability, coverage, and execution stability.',
        'Investigating failures, analysing defects, and isolating root causes.',
        'Working with version control and CI/CD workflows to run suites consistently.',
        'Improving test data setup, isolation, and cleanup so runs stay reproducible.',
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
        'A library management system built automation-first: layered pytest suites for API and business logic, Selenium UI automation using the page object pattern, and GitHub Actions running the tests on every change.',
      tags: ['Python', 'FastAPI', 'pytest', 'Selenium', 'Page object model', 'GitHub Actions'],
      source: 'https://github.com/jayesh-87/Automated-Library-Management-System',
      sourceLabel: 'View Source',
      demo: null,
    },
    {
      id: 'stock-price-predictor',
      name: 'Stock Price Predictor',
      status: 'Public repository',
      description:
        'A machine learning project exploring stock price prediction and data-driven analysis, forecasting prices with an LSTM prototype alongside a data exploration pipeline.',
      tags: ['Python', 'LSTM', 'Time-series forecasting'],
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
    heading: 'Open to conversations about quality engineering, test automation, and SDET roles.',
    note: 'The fastest way to reach me is email — I read everything that lands there.',
  },
};

export default siteConfig;
