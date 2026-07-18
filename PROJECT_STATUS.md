# Project status

Last updated: 18 July 2026

## Project goal

Northstar is an unofficial Computer Science portfolio project designed to help people choose a MacBook based on their needs. The finished website will ask plain-language questions, compare the answers with a small verified dataset and explain a focused recommendation without requiring visitors to understand every technical term.

The project is independent and is not affiliated with, endorsed by or sponsored by Apple Inc.

## Technology stack

- **HTML5** for semantic page structure and accessible native controls.
- **CSS3** for the original visual identity, responsive layouts, focus states and reduced-motion support.
- **JavaScript modules** for separated interface behavior, product data and future recommendation logic.
- **Git and GitHub** for version control, project history and future hosting workflow.
- **GitHub Pages** is the planned static deployment target.

No external frameworks, component libraries, package dependencies, database or backend are currently required.

## Completed Stage 1 work

- Created the basic HTML, CSS and JavaScript module structure.
- Built the Northstar landing page with a responsive navigation bar, introduction and calls-to-action.
- Added a prominent disclaimer explaining that this is an unofficial student project.
- Added intentionally empty questionnaire and recommendation-results sections.
- Created an empty, frozen `products` array in `js/products.js`; no product records exist yet.
- Added responsive desktop, tablet and mobile layouts.
- Added accessible mobile navigation behavior, including Enter activation, Escape-to-close and focus return.
- Added the project README and repository ignore rules.
- Verified Stage 1 in Chrome at 1440×900, 768×1024 and 390×844.
- Initialized Git on the `main` branch and committed the verified Stage 1 implementation.

## Design and accessibility decisions

- The visual identity uses the original Northstar name, dark navy surfaces and mint/violet accents rather than reproducing Apple's website.
- Semantic landmarks, one `h1` and a logical `h2`/`h3` hierarchy describe the page.
- A skip link provides direct keyboard access to the main content.
- Links and the menu control use native HTML elements so they remain keyboard accessible.
- Keyboard focus uses a visible 3px gold outline.
- Key text and control combinations exceed WCAG AA contrast requirements.
- Responsive breakpoints support wide, tablet and narrow mobile layouts without horizontal overflow.
- The mobile menu exposes its state with `aria-expanded` and returns focus to its button when closed with Escape.
- Anchor targets use a scroll offset so the sticky header does not obscure their content.
- Decorative placeholders are hidden from assistive technology, while meaningful content remains available as text.
- Motion is reduced when the visitor enables the operating system's reduced-motion preference.
- Navigation remains available as a progressive fallback if JavaScript does not load.

## Local preview

No installation or build step is required. From the repository root, start a static server:

```text
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

On Windows, `py` can be used instead of `python` when that is the configured launcher. Stop the server with `Ctrl+C`.

## Current limitations

- The questionnaire contains no controls or state logic yet.
- There is no recommendation algorithm.
- The product data module is empty.
- No real prices, specifications or product images have been added.
- There is no backend, account system, analytics or persistent storage.
- Automated browser verification has used Chrome; Firefox, Safari, physical-device and screen-reader testing remain outstanding.
- The project has not yet been connected to a GitHub remote or deployed.

## Planned Stage 2 work

Stage 2 will begin only after explicit approval. Its intended scope is:

1. Define a short set of plain-language questions for MacBook use cases and priorities.
2. Build an accessible questionnaire using native controls, labels, `fieldset` and `legend` where appropriate.
3. Add clear progress feedback, validation messages and keyboard behavior.
4. Manage questionnaire state in a dedicated JavaScript module.
5. Test incomplete answers, restarting and navigation between questionnaire steps.
6. Update the README and this handover document with the implemented behavior and checks.

Product records, scoring rules and recommendation results remain deferred until their later approved stage.
