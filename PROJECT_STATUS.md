# Project status

Last updated: 19 July 2026

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

## Completed Stage 2 work

- Replaced the empty questionnaire placeholder with an eight-step, MacBook-only form.
- Added questions covering maximum budget, primary use, screen size, portability versus performance, workload intensity, minimum storage, external displays and expected ownership period.
- Used native radio buttons, checkboxes and select controls with semantic labels, `fieldset` and `legend` elements where appropriate.
- Added Back and Continue controls using native form submission behavior.
- Added visible “Step X of 8” text and a native progress element with synchronized numeric `value` and `max` attributes.
- Added required-answer validation for all eight steps.
- Associated each validation message with its control or fieldset through `aria-describedby` and announced errors through `role="alert"`.
- Prevented a third primary-use selection while keeping the first two choices available to uncheck.
- Preserved answers when navigating backwards and forwards.
- Added an accessible inline Restart questionnaire confirmation with confirm and cancel behavior.
- Moved focus to each new step heading, with `tabindex="-1"`, and to the first invalid control when validation fails.
- Added a questionnaire-complete state without adding recommendations or product results.
- Added `js/questionnaire-state.js`, which keeps raw state private and exposes controlled state functions returning frozen snapshots.
- Added `js/questionnaire.js` for form behavior, validation, progress, focus and restart handling.
- Kept `js/products.js` as an empty, frozen array.

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
- Questionnaire answer values use stable machine-readable IDs rather than visible labels.
- Only the current questionnaire step is exposed; the other steps use the native `hidden` attribute.
- Validation errors are both visibly displayed and announced to assistive technology.
- Each step change places focus on a visible heading without adding that heading to the normal tab order.
- Questionnaire state is held in memory and cannot be mutated directly by unrelated modules.

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

- There is no recommendation algorithm.
- The product data module is empty.
- No real prices, specifications or product images have been added.
- Questionnaire answers are held only for the current page session and are cleared by a reload.
- There is no backend, account system, analytics or persistent storage.
- Automated browser verification has used a Chromium-based in-app browser; Firefox, Safari, physical-device, full manual keyboard and screen-reader testing remain outstanding.
- The repository has a GitHub remote but has not been deployed.

## Stage 2 verification

Stage 2 was tested locally at 1440×900, 768×1024 and 390×844. Verification covered:

- all eight steps and their progress values;
- missing-answer validation on every step;
- accessible error roles and `aria-describedby` associations;
- the maximum-two primary-use behavior;
- Back and Continue navigation;
- answer preservation after moving backwards;
- Restart cancellation, confirmation and focus return;
- completion without product results;
- step-heading and invalid-control focus placement;
- visible focus styling and native keyboard-operable control semantics;
- frozen state snapshots, controlled state updates and full reset behavior;
- mobile, tablet and desktop layouts without horizontal overflow; and
- the browser console, with no errors or warnings observed.

Stage 3 has not been approved. Product records, real product prices, model specifications, scoring rules and recommendation results remain deferred until that later stage.
