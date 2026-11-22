# NARA Objects — Ruang sebagai Peta

Fictional studio-development website concept. This repository is not a representation of an operating business.

## Clean checkout and local preview

The production candidate is the isolated branch `ades/nara-redo-r5-audit`. The current reviewed candidate commit is `9b1fa8c22ee5a254c8afd848c6fc8fcd80bd5484`.

### macOS / Linux (Bash or Zsh)

Requires Git and Python 3. No package installation is required.

```bash
git clone --branch ades/nara-redo-r5-audit --single-branch https://github.com/kannaryukkei/NARA-OBJECTS-WEBSITE.git
cd NARA-OBJECTS-WEBSITE
git rev-parse HEAD
python3 --version
python3 -m http.server 8000
```

Open http://localhost:8000 in a browser. Stop the server with Ctrl+C.

### Windows (PowerShell)

Requires Git and the Python 3 launcher (`py`). No package installation is required.

```powershell
git clone --branch ades/nara-redo-r5-audit --single-branch https://github.com/kannaryukkei/NARA-OBJECTS-WEBSITE.git
Set-Location NARA-OBJECTS-WEBSITE
git rev-parse HEAD
py -3 --version
py -3 -m http.server 8000
```

Open http://localhost:8000 in a browser. Stop the server with Ctrl+C.

### Troubleshooting

- If port 8000 is occupied, stop the other local server or use another port, then open the matching URL (for example, `python3 -m http.server 8001` / `py -3 -m http.server 8001` and http://localhost:8001).
- If the branch cannot be cloned, check GitHub connectivity and confirm the repository URL and branch name.
- If Python is not found, install Python 3 from its official distribution or use the platform's configured Python 3 command. Do not install project dependencies; there are none.
- Keep the terminal running while previewing. Refresh the browser after changing files.

## Stack and interactions

Semantic HTML, custom CSS and vanilla JavaScript. No package manager, build step, paid dependency, backend or third-party runtime service. The responsive sticky navigation includes active-section feedback and a reading-progress indicator. Category rows prefill the local brief. Material controls update the image and explanatory copy and support arrow-key navigation. The FAQ uses three explicit accessible button/panel pairs with single-open, repeatable open/close state and bidirectional animation. The brief builder validates required fields, reflects completion progress, previews a local-only summary and offers clipboard copy with fallback feedback. Reduced-motion preferences suppress nonessential transitions.

## Original generated visuals

Six local WebP assets are bundled. They are AI-generated concept visuals, not photographs of real products, completed projects, clients or an operating business. Their exact generator/provider/model and reuse terms have not been independently verified in this project record. Do not present them as documentary evidence or claim verified asset licensing.

## Inquiry integrity

The brief builder runs in the browser only. It does not transmit or store data. No backend, CRM, analytics, booking, payment, WhatsApp integration or live recipient is connected. Do not enter real customer or sensitive personal data.

## QA and verification status

- Source-level review of the current FAQ confirms three button triggers, three associated panels, unique HTML IDs, explicit repeatable state handling, sibling close, `aria-expanded` / `aria-hidden` synchronization, `inert` on closed panels, open/close CSS transitions and reduced-motion overrides. Process-step interaction rules remain in the current stylesheet.
- The operator has reviewed the latest R5.4 local preview and reported it “SEMPURNA”; the final FAQ correction is accepted by the operator. This is operator-observed review, not a retained screenshot or an independent Lead browser test.
- A prior QA record describes Chromium 144 / Playwright checks at 1440×1000, 1024×900, 390×844 and 320×740. Treat that as historical evidence from an earlier candidate, not a fresh test of this exact commit. Current-session Lead browser rendering, screenshots, computed-style inspection, axe analysis and manual screen-reader testing are NOT_VERIFIED / NOT_RUN.
- Clean-checkout runbook commands are documented above but have not yet been executed from a clean workstation checkout in the current handover cycle.
- This candidate has not been merged, deployed or publicly released. No hosting, domain, recurring cost or release authorization is in scope.
