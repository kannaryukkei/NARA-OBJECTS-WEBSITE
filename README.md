# NARA Objects — Material Atelier

Operator-approved R4 production build. Synthetic studio-development concept; not a representation of an operating business.

## Run locally

Requires Python 3. Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## Stack

Semantic HTML, custom CSS and vanilla JavaScript. No package manager, build step, paid dependency, backend or third-party runtime service.

## Interactions

- Responsive sticky navigation, mobile menu, active section and scroll progress
- Category cards preselect the matching inquiry category
- Material selector with live content and pressed state
- Native FAQ disclosures
- Validated local-only inquiry brief, progress indicator, preview and copy fallback
- Keyboard focus and reduced-motion support

## Visual integrity

The GitHub build uses four custom-authored SVG interior/furniture illustrations for portability. They are illustrative, not documentary project photography or client proof. The local production workspace retains original generated raster studies, which are not part of the GitHub commit.

## Inquiry integrity

The inquiry builder runs in the browser only. It does not transmit or store data. No backend, CRM, analytics or live recipient is connected.

## Verification limits

Chromium 144 + Playwright QA used `page.set_content` with the production HTML, CSS, JavaScript and embedded SVG assets. A clean clone and local server navigation remain unverified in the current execution environment.
