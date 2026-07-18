# Northstar

Northstar is an unofficial student portfolio project that aims to help people choose a MacBook based on their needs. It will use a short, plain-language questionnaire and an explainable scoring system to produce a focused recommendation.

The project is intentionally being developed in small stages. Stage 1 establishes an accessible, responsive interface before any product data or recommendation logic is introduced.

> **Disclaimer:** Northstar is an independent educational project. It is not affiliated with, endorsed by or sponsored by Apple Inc. Apple and MacBook are trademarks of Apple Inc.

## Current status

Stage 1 includes:

- an accessible landing page;
- a responsive primary navigation bar;
- an introduction and clear call-to-action;
- visible project and affiliation disclaimers;
- placeholder questionnaire and results sections;
- an empty JavaScript product data module; and
- an original responsive visual identity.

No real product prices, specifications, questionnaire controls or recommendation logic are included at this stage.

## Planned features

- A short MacBook-only questionnaire focused on everyday needs and priorities.
- A small product dataset that is straightforward to inspect and test.
- An explainable, deterministic recommendation score.
- A focused set of results with reasons and trade-offs.
- Keyboard-accessible interactions and useful status announcements.
- Responsive layouts for mobile, tablet and desktop screens.
- Tests covering scoring rules, edge cases and expected recommendations.

## Technology stack

- **HTML5** provides semantic page structure and accessible native elements.
- **CSS3** provides the visual identity, layouts, responsive behaviour and focus styles.
- **JavaScript modules** separate interface behaviour, product data and—later—the recommendation logic.
- **Git and GitHub** will provide version control and a public project history.
- **GitHub Pages** is planned for static website deployment.
- **Browser developer tools and Lighthouse** will support accessibility, performance and responsive testing.

No external frameworks, component libraries or runtime dependencies are used.

## Project structure

```text
.
├── index.html          # Landing page and semantic content
├── README.md           # Project documentation and roadmap
├── css/
│   └── styles.css      # Visual design and responsive behaviour
├── js/
│   ├── app.js          # Application entry point
│   ├── products.js     # Product data module (empty in Stage 1)
│   └── ui.js           # Navigation and future interface behaviour
└── sources/            # Read-only project reference material
```

## Development stages

### Stage 1 — Foundation

Create the project structure, landing page, responsive navigation, original visual system, visible disclaimer and empty questionnaire/results sections.

### Stage 2 — Questionnaire

Design and implement the accessible multi-step MacBook questionnaire, including input validation, progress feedback and keyboard behaviour.

### Stage 3 — Data and recommendations

Add a small MacBook dataset to `products.js`, define transparent scoring rules, calculate matches and explain each result. Product information will include a clear last-reviewed date.

### Stage 4 — Testing and refinement

Test expected recommendations and edge cases, review accessibility, test common screen sizes and browsers, and refine the content and visual experience.

### Stage 5 — Documentation and deployment

Document the algorithm and design decisions, add project screenshots, complete final quality checks and deploy the static site with GitHub Pages.

## Running locally

Because the site uses JavaScript modules, serve the project with a local development server rather than opening `index.html` directly. No installation or build step is required.

Development of the questionnaire will begin only after Stage 1 has been reviewed and approved.
