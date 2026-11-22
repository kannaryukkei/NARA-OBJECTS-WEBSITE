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

The current revision uses photographic interior references hosted by Unsplash. These are reference imagery, not NARA project photography, client proof or evidence of completed work. The original SVG studies are retained only as source artifacts and are no longer used in the page layout.

## Inquiry integrity

The inquiry builder runs in the browser only. It does not transmit or store data. No backend, CRM, analytics or live recipient is connected.

## Verification limits

Chromium 144 + Playwright QA used `page.set_content` with the production HTML, CSS, JavaScript and embedded SVG assets. A clean clone and local server navigation remain unverified in the current execution environment.
