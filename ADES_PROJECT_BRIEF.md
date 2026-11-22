# ADES PROJECT BRIEF — NARA OBJECTS

**Single source of current project state.** ADES Guide Rev 2.7 governs the method; the supplied filled intake governs synthetic scenario input. This Brief records project facts, decisions, evidence, approvals, limitations and next actions only.

## 1. Project control

- **Project:** NARA Objects — fictional contemporary custom-furniture/interior-object studio scenario. All intake business facts are synthetic test data, not verified real-business facts.
- **Entry path:** `redo_existing_project`
- **Business mode:** `studio_development`
- **ADES mode:** `single_agent_end_to_end`
- **Repository:** https://github.com/kannaryukkei/NARA-OBJECTS-WEBSITE
- **Live website:** NOT_PROVIDED; no live site is asserted.
- **Lead:** GPT GO (CURRENT); provider/model/version NOT_EXPOSED; harness ChatGPT Project.
- **Execution Agent:** SAME AS LEAD — GPT GO (CURRENT); provider/model/version NOT_EXPOSED; harness ChatGPT Project.
- **Governance Lead:** SAME AS LEAD — GPT GO (CURRENT); provider/model/version NOT_EXPOSED; harness ChatGPT Project.
- **Evaluators/Synthesizer:** NONE. One identity authors, executes and self-assesses; no independent jury or consensus claim.
- **External roster:** NONE. Role overlap is operator-declared and explicit.
- **Budget / authority:** Rp0. Internal research and repository work only. No third-party contact, spending, DNS, merge, deployment or public release without explicit scoped authorization.
- **Current Lead context:** ADES Guide Rev 2.7, blank Brief template and filled synthetic intake were supplied in this Project and read. GitHub connector read/write access confirmed. Node v22.16.0, Python 3.13, Chromium and Playwright packages are installed in the execution container, but no local checkout exists; shell network DNS prevented GitHub clone/download. GitHub connector can inspect and write repository text files. No browser-rendering/Computer Use tool is available in this session; actual browser rendering remains NOT_VERIFIED. ImageGen tool is available for later use; do not create project north-star before R1.
- **Baseline:** branch `delivery/nara-r4-3-g5-handover`; commit `51c0eef7bcb598149153248b874bb5cbc3f3b3f9`; tree `263fda790d9c4621b5b4c155e2eb30d27fc25a36`.
- **Working branch:** `ades/nara-redo-r5-audit`; current head after Brief update recorded in latest commit / verify on read-back. It was created from exact baseline. Baseline branch and PRs remain unchanged.
- **Existing review PR:** PR #3 is draft/unmerged. PR #2 is obsolete R4.1. Do not merge either.
- **Current stage:** PRD approved; G2 research pack validated/frozen with explicit browser/viewport limitations; R1 may begin after this Brief read-back and acceptance of its limitations. G0/G1 status below.
- **Last verified:** 2026-11-22.

## 2. Business and visitor outcome

- **Scenario offer:** Custom contemporary furniture and interior storage: wardrobe, compact workspace, credenza/dining and pantry cabinetry; consultation, measurement, material/finish discussion, drawing/specification approval, production, delivery and installation. Synthetic scenario only.
- **Scenario audience:** homeowners/apartment residents and home-office professionals (approx. 28–45) in Surabaya/Sidoarjo; secondary small premium rental owners and independent interior stylists. Segments are unvalidated.
- **Business goal:** Help suitable visitors understand a space-first custom-furniture offer and prepare a useful consultation brief.
- **Primary visitor task:** Understand solution fit, process and price drivers, then prepare a local-only brief with category, city/service area, approximate dimensions, use-case/room need and target timing.
- **Conversion action:** Generate, preview and copy a structured consultation brief. No live recipient or endpoint exists.
- **Positioning input:** “Furnitur yang dimulai dari cara ruang digunakan.” Thoughtful, spatial, tactile, understated, practical. Indonesian primary language; clear, consultative, intelligent, non-hyperbolic.
- **Trust requirements:** Explain scope, service-area assumptions, process milestones, price factors and what visitors should prepare. No fabricated client proof, reviews, awards, certificates, warranties, workshop credentials, guarantees or operational performance.
- **Synthetic-only facts:** Service areas, hours, lead times, capacity, payment milestones, warranty draft, audience and pricing in intake are assumptions for the exercise only. Do not publish as verified business claims.
- **Privacy/operations:** No backend, CRM, analytics, booking, payment or real inquiry endpoint. Prototype form must not send/store data. No real customer data. A real form would require owner-approved privacy notice, collection purpose, retention and contact route.

## 3. Approved PRD and Redo decisions

- **Approved PRD:** `NARA-PRD-v1.0`, presented in full in conversation on 2026-11-22 and explicitly approved by operator with exact command `APPROVE NARA-PRD-v1.0`. Approval covers the presented outcome, audience scenario, scope, exclusions, synthetic-data boundary and acceptance criteria. It does not authorize design direction, spending, merge, deployment or public release.
- **PRD objective:** Create a distinctive, responsive NARA concept site that explains the space-first offer and helps visitors prepare a complete local-only consultation brief.
- **Primary journey:** Understand studio → explore four furniture needs → understand process/material/price factors and boundaries → prepare dimensions/use case/location/timing → preview and copy brief.
- **IA:** One integrated page with hero, studio approach, furniture categories, process, material explorer, project fit/service boundary, FAQ and consultation builder.
- **Required interactions:** responsive sticky navigation; accessible mobile navigation; section/progress feedback; category prefill; material controls synchronising content and image; keyboard support; single-open FAQ; structured local brief validation/progress/preview/copy fallback; reduced-motion support.
- **Acceptance:** clear offer and task; complete brief; accurate local-only disclosure; functional visible affordances; accessible labels/focus/error feedback; 4.5:1 normal text contrast / 3:1 large text target; responsive design; no material overflow or runtime errors; meaningful baseline-relative improvement and retained-feature regression evidence. No business impact claims without measurements.
- **Exclusions:** login/dashboard, 3D/AR, cart/checkout/payment, booking integrations, CRM/analytics, real WhatsApp integration, data collection, backend, paid services/assets, domain purchase, DNS, deployment, public release.
- **KEEP:** static HTML/CSS/JS approach unless evidence warrants change; space-first narrative; four category entry points; process/material/project-fit/FAQ sections; local-only brief builder; sticky navigation; illustrative WebP assets with disclosure; responsive breakpoints.
- **IMPROVE:** consultation builder completeness and actionable validation; reproduce and resolve mobile Escape/menu mismatch; verify keyboard/focus/ARIA; material tab image/text synchrony; copy fallback honesty; responsive rendering and visual hierarchy.
- **REMOVE:** none approved. Three SVG study files and superseded CSS are cleanup candidates only after dependency checks.
- **ADD:** stronger structured local-only brief and canonical project Brief. No backend or real data collection.
- **Mandatory material improvement:** baseline requires only category and city; dimensions, notes/use-case and target timing are optional. New accepted brief must require category, city/service area, approximate dimensions, use-case/need and target timing, then create a complete copyable local summary. Evidence: invalid/missing-field tests and valid summary comparison, plus regression tests.
- **Creative constraint:** PRD does not prescribe a visual solution. R1 must explore three materially distinct homepage concepts, not palette/copy variants. No north-star before all three concepts are completed and validated.

### Verified Redo baseline inventory

- Stack: one static semantic HTML page, custom CSS and vanilla JS; no package.json/build/test dependencies or backend.
- Files: `index.html`, `styles.css`, `script.js`, `assets/*`, `qa/*`, `README.md`.
- Page sections: hero, approach, categories, process, material explorer, project-fit, FAQ, local brief builder.
- Baseline interactions in source: sticky responsive nav, mobile menu, active section/progress, category prefill, material tabs update explanatory copy and image, arrow-key material navigation, single-open FAQ, local brief validation/progress/preview/copy fallback, reveal motion and reduced-motion.
- Assets: six WebP labelled by the existing repo as AI-generated concept images; three SVG studies also present. Generator/model/terms/rights are NOT_VERIFIED. No client-supplied logo, product photos, video, catalog or testimonials.
- Historical QA evidence paths: `qa/desktop-r4-3-firstview.png`, `qa/desktop-r4-3-full.png`, `qa/tablet-r4-3-firstview.png`, `qa/tablet-r4-3-full.png`, `qa/mobile-r4-3-firstview.png`, `qa/mobile-r4-3-full.png`, `qa/small-r4-3-firstview.png`, `qa/small-r4-3-full.png`, `qa/qa-report-r4-3.json`.
- Historical QA used `page.set_content` with asset bytes; reports 1440, 1024, 390 and 320 px states, seven images loaded, no overflow/page errors, contrast scan without flagged elements in tested nodes. It explicitly reports `mobile_menu_escape_close=false`; axe/manual screen reader NOT_RUN; clipboard contents NOT_VERIFIED. This is historical evidence, not a current rerun.
- Current JS source has an Escape key handler that calls `closeMenu()`; test/source mismatch needs reproduction. No source changes have been made in this redo cycle.
- Baseline preview README command: `python3 -m http.server 8000`; not run by current Lead. Clean checkout/browser localhost navigation NOT_VERIFIED.

## 4. Gate status

| Gate | Status | Evidence / remaining control |
|---|---|---|
| G0 Project activation | PASS WITH LIMITATIONS | Repo identity/access, baseline branch/commit/tree, source/README/QA/PR and isolated branch verified. Shell checkout/DNS and current browser renderer unavailable; recorded as NOT_VERIFIED, not inherited PASS. |
| G1 Discovery & scope | PASS | Synthetic intake reconciled with baseline; KEEP/IMPROVE/REMOVE/ADD and measurable material improvement defined; complete PRD presented and exact version approved. |
| G2 Exploration and mode-correct decision | IN_PROGRESS | Common Research & Experience Benchmark Pack frozen in §5. R1→north-star→R2, self-assessment and operator direction approval remain ahead. |
| G3 Build ready for QA | NOT_STARTED | R1/R2 and production V0/V1 not started. |
| G4 Review accepted | NOT_STARTED | Internal rendered QA and operator review not done. |
| G5 Handover complete | NOT_STARTED | Clean-checkout runbook and handover pending. Public release is separate and NOT_AUTHORIZED. |
| G6 ADES learning | NOT_STARTED | Two-way operator–Lead evaluation after G5. |

## 5. Exploration — frozen Research & Experience Benchmark Pack

**Pack ID:** `NARA-RESEARCH-v1.0`  
**Research/access date:** 2026-11-22.  
**Status:** VALIDATED AND FROZEN FOR R1, with explicit limitations below.  
**Common baseline:** approved `NARA-PRD-v1.0`, the visitor task and acceptance criteria in §3, and the observations/patterns in this section. All R1 concepts must use this same baseline. Supplemental research must be labelled and cannot silently change it.

### Evidence method and limitations

- Direct page inspection was performed using available web page retrieval: page text, headings, image alt/descriptions where exposed, navigation links, section structure, page routes and selected linked pages were inspected. Direct page URLs, accessed pages and findings are listed below.
- Browser rendering at desktop/tablet/mobile widths, pixel-level visual inspection, keyboard/pointer/touch interaction execution, network waterfall and performance profiling were NOT_VERIFIED. Web page retrieval is not equivalent to a live browser session.
- Search snippets were used only as discovery leads. Finterio and Sarwood were not counted among the inspected references because direct page retrieval failed. No external image or layout has been copied or granted reuse permission.
- All reference websites are independent businesses/design practices. Their factual claims are attributed to those sources only and are not NARA facts.
- Research limitation is explicit; it does not invalidate the minimum coverage: four relevant Indonesian niche sites and three adjacent design-led references were directly inspected.

### Inspected reference set (7)

1. **Papyrus Interior — https://www.papyrusinterior.com/**  
   Pages: homepage, process, project/material/pricing/calculator/contact sections. Directly inspected page text and anchor-linked content. Observations: navigation separates About, Projects, Process, Locations, Partnership, Pricing and Budget Calculator; process explains six milestones from consultation/estimate through survey, deposit, 3D design, production and installation; material comparison and itemised price inclusions; a four-step calculator with a live summary and explicit “estimate only” caveat; contact details and showroom/factory routes. Learn: make material trade-offs, process dependencies, inclusions/exclusions and what happens next legible. Do not copy its claims, price tables, guarantees, testimonials, branded proof or dense package layout. NARA application: plain-language price drivers and consultation preparation, no invented price estimate. Interaction execution and responsive layout NOT_VERIFIED.
2. **Insima Fine Furnitures — https://www.insimafurniture.com/** and **https://www.insimafurniture.com/process**  
   Directly inspected homepage and Process page. Observations: navigation splits Kitchen, Bespoke, Venture, Living, Process and Services; craft narrative combines machine milling and craftsmanship; process page names material, treatment, milling, finishing, assembly and QC; showroom/project examples and consultation CTA; contact form fields are exposed. Learn: separate residential bespoke from commercial project capability and give material/process details their own narrative. Do not borrow premium/luxury claims, experience metrics or workshop claims. NARA application: editorial process/material storytelling and distinct solution families. Visual/responsive states and form submission behaviour NOT_VERIFIED.
3. **Aria Living — https://arialiving.id/**  
   Directly inspected homepage. Observations: residential/commercial/hotel/apartment categories; long portfolio entries attach room/package and project/location metadata; testimonial section; commercial work gallery; custom-production positioning; five-stage process from consultation and design to production, installation and occupancy; multiple contact routes. Learn: project categories and use-context metadata help visitors scan a portfolio. Do not copy testimonials, client names, locations, claims, images or operational promises. NARA application: if showing illustrative projects, label them concept examples; do not simulate real clients. Responsive and interactive behavior NOT_VERIFIED.
4. **Sinar Indah Teknik — https://sinarindahteknik.co.id/** and **https://sinarindahteknik.co.id/galeri/**  
   Directly inspected homepage and gallery page. Observations: product categories (rack, chair, table, bed, custom); use-case gallery for meeting rooms, cafes/restaurants, schools and auditoriums; separate custom-order route and catalog download; CTA to request products. Search result for custom quote page (not directly inspected) describes a multi-step quote form; it is a discovery lead only, not inspected interaction evidence. Learn: separate ready-made catalogue from custom-order pathway and classify examples by context. Do not reproduce industrial catalog language or unsupported claims. NARA application: route custom needs by room/problem, not by product inventory alone.
5. **URBANE Design — https://www.urbane.com.tw/**, **/about**, **/service**, **/projects**, **/field/Residential**  
   Directly inspected homepage, About, Service, Projects and Residential route. Observations: bilingual positioning; services connect spatial planning, material selection, furniture selection, detailed design and execution; project listing has Private/Public and Residential/Commercial/Real Estate/Office filters; about page explains proportion, material, light, detail and blank space as design logic. Learn: communicate a coherent point of view through design principles and make project browsing meaningful. Do not copy its high-end vocabulary, distinctive project naming, imagery or layout. NARA application: connect material and proportion to everyday use, keep project category filters understandable.
6. **And Studio — https://and-studio.com/**  
   Directly inspected homepage. Observations: top-level Projects, Collection, About and Contact; featured project entries include date/location metadata and multiple contextual images; collection item exposes period, dimensions and material; separate project enquiry and general contact routes. Learn: pair imagery with a small amount of structured context; differentiate project enquiries from product/object enquiries. Do not reuse imagery, text, metadata or visual composition. NARA application: context metadata and clearly scoped enquiry. Actual overlay/interaction and mobile behaviour NOT_VERIFIED.
7. **Daniel Boddam — https://www.danielboddam.com/**  
   Directly inspected homepage and site index. Observations: architecture and furniture are parallel entry points; studio philosophy ties calm, sculptural form, spatial arrangement and craftsmanship; Showroom, Studio, Diary, Press and Contact provide distinct proof/context routes. Learn: one studio point of view can unify architecture and furniture without flattening their differences. Do not copy its specific minimal design or claims. NARA application: explore whether the studio narrative should lead with spatial function, crafted objects or integrated room solutions. Responsive and interactive states NOT_VERIFIED.

### Synthesis: patterns to adopt, challenge and avoid

- **Adopt:** visitor-first explanation of space and use; clear process milestones; material comparisons that explain trade-offs rather than declare a universal “best”; contextual project/category metadata; repeated but restrained next-step CTAs; concise, accessible form instructions and explicit local-only simulation.
- **Challenge:** default long-scroll single-page structure; generic card grids; broad claims such as “premium”, “best”, “guaranteed” without evidence; dense price lists that may overwhelm an early-stage visitor; one generic contact form for every intent.
- **Avoid:** invented testimonials/project evidence, copied reference imagery, unverified warranty/material claims, fake estimator outputs, unsupported lead-time/response promises, deceptive form success states, autoplay/scroll hijacking and decorative motion without a user purpose.
- **Open opportunity:** make the room/problem the organising idea; show how dimensions and use affect furniture choices; explain price drivers before requesting contact details; present illustrative visual work with unmistakable synthetic labels; make the local brief feel like a helpful preparation tool rather than a lead-capture form.

### Interaction and conversion observations

- Papyrus presents a staged estimate wizard, material comparison, clear price inclusions and multiple next-step routes. It illustrates a structured task but its commercial claims and actual calculation logic are not verified by this research.
- Insima uses separate navigation routes for kitchen/bespoke/venture/living/process and a direct consultation form.
- Aria uses a large categorized portfolio and repeated consultation CTA.
- URBANE uses project filters and separate service/about/project routes.
- And Studio separates project enquiries from general contact and surfaces item dimensions/material in the object collection.
- Sinar Indah distinguishes catalogue browsing from custom order.
- Dynamic state changes, keyboard/focus, form error/success, mobile nav and touch interactions were not exercised in browser; no claim of interaction PASS.

### Visual and experience principles for NARA (research guidance, not a prescribed concept)

- Hero: communicate space/use and custom-furniture offer immediately; headline and CTA remain readable over media.
- Category sections: use context-specific imagery with clear category names; avoid uniform catalogue-card repetition as the only rhythm.
- Process: use a compact sequence of decisions/milestones; distinguish exploratory consultation from approved specifications and production.
- Materials: compare options by function, finish, care and constraints; no unsupported technical guarantees.
- Portfolio/visuals: contextual metadata is useful, but generated images must be labelled “visual konsep AI / bukan proyek nyata NARA”.
- Consultation: explain why each field matters; required fields get clear instructions; errors identify how to fix; completion summary is local and explicitly not sent/stored.
- Navigation: sticky navigation remains default; mobile menu must expose expanded/collapsed state and close predictably by Escape, outside click and link selection, restoring focus appropriately.
- Motion: use only to clarify state, reveal content or support narrative; respect `prefers-reduced-motion`; no autoplay, heavy parallax or scroll hijacking.

### UI ecosystem / implementation feasibility / license decision

- **Default recommendation:** retain semantic HTML + custom CSS + vanilla JS. The current site is one page, no backend, no package.json and has modest local interactions. No React/Vite migration is justified by the approved PRD.
- **Native HTML forms:** use visible, programmatically associated labels; native required/type constraints where suitable; supplement with concise inline errors, focus to first invalid field and clear success/summary status. Client-only validation is for usability only, not security. W3C WAI guidance: https://www.w3.org/WAI/tutorials/forms/labels/ ; https://www.w3.org/WAI/tutorials/forms/validation/ ; https://www.w3.org/WAI/tutorials/forms/notifications/
- **Disclosure/navigation:** use native disclosure semantics or a button with `aria-expanded` synchronized to visibility; Enter/Space activation; Escape closes the mobile nav and returns focus to its controlling button. WAI APG: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
- **Dialogs:** only if R1/R2 actually need a modal; native `<dialog>` provides modal inertness and Escape handling with a close control, avoiding custom focus trap complexity. MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog
- **Reveal/visibility:** native `IntersectionObserver` is broadly available for viewport intersection and can trigger restrained reveals/lazy loading; retain a no-JS/fallback visible state. MDN: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- **Reduced motion:** use CSS `@media (prefers-reduced-motion: reduce)` to remove or substantially reduce nonessential movement. MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- **Contrast:** target WCAG 2.2 AA normal text 4.5:1 and large text 3:1; verify actual color pairs, including placeholder and focus states. W3C: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
- **Libraries considered:** Embla Carousel accessibility plugin documentation exists, but no carousel is required by PRD and its current v9 page is RC; do not add a dependency unless R1/R2 reveals a clear need. GSAP/large animation frameworks are not justified by scope. Avoid remote font/CDN dependence unless selected font, license and network/performance trade-off are verified; exact typeface remains open to R1.
- **Reuse vs custom:** reuse native platform capabilities and semantic patterns; custom-build NARA-specific editorial layout, category exploration and local brief. Do not import a component library or template just to accelerate an unapproved design direction.
- **Stack trigger for reconsideration:** multiple routes, reusable complex state, content management or real integration requirements would justify re-evaluation; none are approved now.

### Research freeze and R1 handoff

- **Frozen inputs:** approved PRD v1.0; seven inspected references above; source observations; synthesis; UI ecosystem recommendation; constraints and limitations.
- **Frozen author:** GPT GO (CURRENT), same identity as Lead/Execution Agent/Governance Lead; provider/model/version NOT_EXPOSED; harness ChatGPT Project. No external agents.
- **R1 requirement:** exactly three materially distinct, inspectable homepage HTML concepts for the same visitor task/scope; each has its own thesis, visual system, composition and content/media logic. No palette/copy swaps. Candidates remain isolated. Source artifacts, provenance, preview where available and divergence comparison recorded.
- **R1 results (2026-11-22):** three concepts created and source-validated on this branch:
  1. `concepts/r1/concept-01-spatial-map.html` — “Ruang sebagai Peta”; dark architectural editorial, space-first index, numbered room logic. Latest blob `c73215cdbced5474e6d8feb7c49af0f3ead2c8f8`.
  2. `concepts/r1/concept-02-object-story.html` — “Satu Objek, Satu Cerita”; warm object-led gallery, asymmetric editorial and tactile object imagery. Latest blob `51c440716b672b5df029df89c2d6e2a10f5089d0`.
  3. `concepts/r1/concept-03-field-notes.html` — “Field Notes”; studio notebook/process-led composition with monospaced field labels and observation-led narrative. Latest blob `0b61f809ef4eaa424a121340b4a902857a128423`.
- **R1 source validation:** PASS for HTML5 doctype/lang/viewport, one H1, JavaScript parse, CSS brace balance, internal anchors, label-to-control associations, image alt attributes, four categories, five required fields, local-only brief generation, visible summary fallback, mobile nav Escape/outside-click/link close, reduced-motion CSS and relative asset paths. All referenced local WebP assets exist in baseline. Consultation builder uses a non-submitting group with explicit button actions; no form submission or data transmission path. Accent/text token ratios checked at source level: C1 clay #d68d6a on ink #182b27 5.57:1; C2 rust #a64d32 on paper #f2eee6 4.87:1, soft #6d655a on paper 4.96:1; C3 rust #8c4a32 on canvas #f4f1e9 5.92:1, muted #5e676b on canvas 5.13:1, light note #f7cbb3 on blue #365b68 4.96:1. These do not replace rendered contrast checks.
- **R1 divergence and research use:** PASS at source/content level. C1 expresses spatial/room-first logic and material/process decisions; C2 expresses object/story/gallery logic and contextual product imagery; C3 expresses observation/measurement/process notebook logic. All retain the same PRD journey and four categories. No reference-site assets or copy reused. Existing WebP are AI-generated concept visuals and are explicitly labelled.
- **Preview / visual quality:** NOT_AVAILABLE / NOT_VERIFIED. No browser renderer or local checkout in this session. Source-level checks do not prove visual fidelity, actual responsive rendering, CSS application, image loading or real interaction behaviour. Browser-ready source structure is verified; visual quality is not.
- **Post-R1 visual north-star:** NOT_VERIFIED / NOT_CREATED. ImageGen attempts returned ADES project-status dashboard graphics rather than a NARA website homepage; they are not accepted as a north-star. Per Guide fallback, use the written direction brief below for same-author R2. Do not present the unrelated generated images as website design evidence.
- **R2 Synthesis Brief (same author; no new PRD):** retain Concept 01 (“Ruang sebagai Peta”) largely intact as the strongest foundation because it most directly translates the space-first proposition into the visitor journey and category discovery. Keep its dark forest/ink, warm paper and clay index palette; editorial serif + restrained sans; room-context hero; numbered category index; concise process sequence; material detail; FAQ; local brief. Improve its visual rhythm with warmer light-paper content sections and a more substantial object/material image moment so the full page does not feel uniformly dark. Keep the spatial-index thesis rather than forcing a blend. Reuse only Concept 03’s restrained field-note numbering where it clarifies information; do not adopt its full technical notebook voice. Reject Concept 02 as the main direction because the object-gallery emphasis risks reading like a catalogue and underweights the space-first task; retain its lesson that imagery needs context and strong object detail.
- **R2 art-direction contract:** editorial architectural field guide; strong room-scale image and clear headline; generous grid and deliberate whitespace; numbered index as information architecture; warm paper content panels against deep ink anchor sections; clay/rust used as a small navigational accent; expressive but readable serif headings with neutral sans body; small mono labels only for metadata; real hierarchy over card repetition. No copied reference layout or decorative pseudo-blueprint overlays. Images are synthetic AI concepts, not project proof.
- **R2 section media/interaction plan:** hero uses existing `assets/hero.webp` as a room-context illustration with legible copy and disclosure; four category entries use relevant existing wardrobe/workspace/credenza/pantry WebP with responsive crop and AI disclosure; approach uses three concise principles; process uses four clear milestones without decorative icons; material section uses `assets/joinery-detail.webp` with purposeful material choices and synchronized tab copy/image; FAQ uses native disclosure; consultation builder requires category, city, approximate dimensions, use-case and target timing, shows a local preview and copy fallback, never transmits/stores. Sticky nav remains. Mobile nav closes on Escape, outside click and link selection; Escape restores focus. Motion is restrained and reduced-motion respected.
- **R2 acceptance / limitation:** one coherent, inspectable browser-ready HTML candidate with retain/reject rationale and complete art-direction contract. Actual rendered preview remains NOT_VERIFIED until browser capability becomes available.

### R2 result and single-agent R3 self-assessment

- **R2 final candidate:** `concepts/r2/nara-final-candidate.html`; latest blob `af8ea43043a6e6a0cee3edeb4aae5adc68b638e3`; created on the isolated branch. It retains Concept 01’s “Ruang sebagai Peta” thesis, deep-ink hero/process/brief anchors, warm-paper editorial sections, clay index accents, numbered category index and room-first narrative. It adds project-fit/scope guidance, material tabs synchronising copy and local imagery, active-section navigation, reading progress, one-open FAQ, outside-click/Escape mobile nav closure, and a strictly local consultation builder with five required fields, visible summary and copy fallback.
- **R2 content/media/interaction:** hero uses `assets/hero.webp`; category visuals use existing wardrobe/workspace/credenza/pantry WebP; material explorer uses credenza/joinery/pantry images with alt/disclosure. All six images remain AI-generated illustrative assets from the baseline, not documentary proof. Motion remains restrained and reduced-motion aware. No external dependencies or external network integrations.
- **R2 source validation:** PASS for HTML5 doctype, one H1, JS parse, CSS brace balance, internal anchor targets, label associations, image alt attributes, five required fields, no HTML form/default submit path, local-only explicit button interaction, material tab keyboard controls, FAQ single-open, mobile Escape/outside/link close, reduced motion and navigation progress. Source color-pair calculations: ink #182b27 on paper #e9e6db 11.89:1; light clay #d68d6a on ink 5.57:1; ink on clay 5.57:1; dark rust #8c4a32 on paper 5.35:1; body muted #5c655f on paper 4.83:1; pale text #c4cec5 on ink 9.18:1. Values are source token calculations, not rendered-state contrast audit.
- **R2 visual/browser preview:** NOT_VERIFIED. No browser renderer, local checkout or reliable remote preview path available. No screenshot or rendered claim is recorded.
- **R2 retain/reject rationale:** retain C1’s spatial index and room-first story. Use C2’s lesson about strong object-detail imagery without adopting a product-catalogue layout. Use C3’s restrained annotation/field-note labels only where they aid orientation; reject its full technical notebook voice. No forced blend.
- **Single-agent R3 self-assessment (not independent):** provisional recommendation SELECT the R2 “Ruang sebagai Peta” candidate for operator direction review. Strengths: clearest connection to the approved space-first proposition; category index makes the four needs scannable; process/material/scope are explicit; consultation brief is more complete than R4.3 and has no network submission path. Weaknesses/risks: no rendered visual confirmation; static content and AI concept images may not yet feel distinctive enough; material-tab and responsive states are not browser-tested; the four-step process could still feel generic. Strongest moment at source level: room-first hero + numbered category index. Weakest moment at source level: process sequence is familiar and requires distinctive visual treatment. Highest-value next improvement: render and tune hero/media crop, mobile rhythm, contrast and material-tab state in browser before any acceptance.
- **R3 governance:** single-agent mode has no independent jury, no independent verdict and no consensus. Lead self-assessment is not external validation. Governance recommendation is provisional SELECT; operator material-direction approval is PENDING and is mandatory before R4.
- **R3:** single-agent self-assessment only; not an independent jury. Operator must approve material design direction before R4.

## 6. Build, assets and verification

- **Stack:** static HTML/CSS/vanilla JS remains recommended.
- **Asset status:** six baseline WebP disclosed as AI-generated; generator/model/terms and commercial-use permissions NOT_VERIFIED. Do not treat as documentary project evidence. Existing visual assets may be reused only as labelled illustrative concepts until provenance is established. No reference website assets are reusable by default.
- **Baseline QA:** historical report/screenshots recorded in §3. No current rerun. Known discrepancy: Escape test false in JSON despite handler in source. Axe/manual SR and clipboard NOT_VERIFIED.
- **Current cycle code edits:** Three R1 concept HTML artifacts under `concepts/r1/` and one R2 final candidate under `concepts/r2/`; production root files unchanged. Canonical Brief updated. Baseline files unchanged.
- **V0→V1:** NOT_STARTED. Must make a meaningful correction, inspect it and regression-test retained behaviours after R4.
- **Current browser QA:** NOT_VERIFIED; no local checkout or browser-control tool. Do not claim visual acceptance.
- **No live integrations:** no endpoint, WhatsApp, analytics, CRM, payment or booking.

## 7. Handover and release

- Existing README has basic `python3 -m http.server 8000` instructions; clean-checkout runbook not verified.
- Repository ownership remains unchanged. No access transfer.
- No domain, hosting, purchase or recurring cost approved.
- Deployment/public release: NOT_AUTHORIZED.

## 8. G6 learning

- NOT_STARTED; only after G5 and operator–Lead evaluation.

## 9. Current next action

- G0: PASS WITH LIMITATIONS.
- G1: PASS; `NARA-PRD-v1.0` approved 2026-11-22.
- G2: Research pack `NARA-RESEARCH-v1.0` VALIDATED/FROZEN with browser viewport/interaction limitations recorded.
- Next: begin single-agent R1 with three materially divergent, inspectable homepage concepts. Do not create north-star until all three are complete and validated. No R4 until explicit operator approval of selected material direction.
- **Release restrictions remain:** no spending, third-party contact, DNS, merge, deployment or public release without explicit scoped operator authorization.

**Maintenance:** Lead updates this one Brief when material project state changes. Never claim unverified work, preview, test, approval or deployment.
