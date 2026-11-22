# NARA Objects — Material Atelier R4.3

Fictional studio-development website concept. Not a representation of an operating business.

## Run locally

Requires Python 3. From this folder run `python3 -m http.server 8000`, then open `http://localhost:8000`. Stop with Ctrl+C.

## Stack and interactions

Semantic HTML, custom CSS and vanilla JavaScript. No package manager, build step, paid dependency, backend or third-party runtime service. Responsive sticky navigation includes active-section feedback and a reading-progress indicator. Category cards prefill the local brief. Material controls swap both image and explanatory copy and support arrow-key navigation. FAQ is single-open. The brief builder validates required fields, reflects completion progress, previews a local-only summary and offers clipboard copy with fallback feedback. Controls have consistent hover, pressed, focus and touch states; content reveals use a restrained stagger and short easing rather than hero parallax. Reduced-motion disables transitions and keeps all content visible.

## Original generated visuals

Six local WebP assets are bundled. They are AI-generated concept visuals, not photographs of real products, completed projects, clients or an operating business. Separate hero, wardrobe, workspace, credenza, pantry and joinery-detail images are used; no collage is reused as category photography.

## Inquiry integrity

The brief builder runs in the browser only. It does not transmit or store data. No backend, CRM, analytics or live recipient is connected.

## QA notes

Chromium 144 + Playwright rendered the exact production HTML/CSS/JS and actual bundled WebP assets at 1440×1000, 1024×900, 390×844 and 320×740. All 7 image elements loaded with alt text; zero horizontal overflow; zero page errors; all 20 reveal targets became visible after incremental scroll. Mobile menu open/Escape close, category prefill, material image and copy swap, FAQ single-open, brief generation and reduced-motion behavior passed. A rendered text-node contrast scan found no flagged text nodes below 4.5:1 in the exercised states. Browser harness uses `page.set_content` with embedded local image bytes because direct Chromium navigation to localhost is blocked by the current administrator policy. Local HTTP responses were independently checked previously; clean-clone navigation, axe-core and manual screen-reader testing remain NOT_VERIFIED / NOT_RUN. Clipboard API content remains NOT_VERIFIED in the restricted embedded origin.
