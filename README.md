# WTC Homepage Rebuild

A rebuild of the [Welding Technology Corp homepage](https://www.weldtechcorp.com/) as a modern, maintainable, accessible, and fast site. It keeps WTC's brand, content, and structure, and improves them in ways that can be measured.

- **Live site:** https://abdutello.github.io/Welding_Tech_Corp_Assesment/
- **Requirements:** [REQUIREMENTS.md](REQUIREMENTS.md)
- **Planning:** [issues](https://github.com/AbduTello/Welding_Tech_Corp_Assesment/issues?q=is%3Aissue) and [milestones](https://github.com/AbduTello/Welding_Tech_Corp_Assesment/milestones)
- **Lighthouse reports and wireframes:** [project wiki](https://github.com/AbduTello/Welding_Tech_Corp_Assesment/wiki)

## Results at a glance

Lighthouse, original site compared with the rebuild. The full reports are in the [wiki](https://github.com/AbduTello/Welding_Tech_Corp_Assesment/wiki).

| Category       | Desktop: before | Desktop: after | Mobile: before | Mobile: after |
| -------------- | :-------------: | :------------: | :------------: | :-----------: |
| Performance    |       91        |     **97**     |       67       |    **85**     |
| Accessibility  |       73        |     **96**     |       76       |    **96**     |
| Best Practices |       69        |    **100**     |       92       |    **100**    |
| SEO            |       82        |    **100**     |       82       |    **100**    |

| Metric (mobile)          | Before  | After  |
| ------------------------ | :-----: | :----: |
| Largest Contentful Paint | 10.1 s  | 4.2 s  |
| Speed Index              |  5.7 s  | 3.6 s  |
| Total Blocking Time      |  80 ms  | 40 ms  |
| Total page weight        | 11.7 MB | 7.0 MB |

Every category improved. Mobile LCP and page weight are still above the targets in the requirements (under 2.5 s and 1.5 MB before the video plays). The cause and the next fix are covered under [Known limitations](#known-limitations-and-next-steps).

## How I approached it

I treated this like a client project and ran it in six milestones, each tracked as GitHub issues with checklists and priorities:

1. **Research:** audited the live homepage and captured all of its content. Recorded a Lighthouse baseline. Wrote [REQUIREMENTS.md](REQUIREMENTS.md). 
2. **Design:** made low-fi wireframes (in the wiki), chose the hero direction, and pulled design tokens from the existing brand.
3. **Build:** built one homepage section per branch, each merged through its own pull request (#34 to #44). That keeps every change small and reviewable.
4. **Quality:** ran an accessibility pass, an SEO and metadata pass, and a review of the code against the requirements.
5. **Delivery:** deployed to GitHub Pages and wrote this README.
6. **Polish:** final self-review.

**Assumptions.** My clarifying questions weren't answered before the deadline, so I made these calls and kept them consistent:

- WTC's own logo, photos, video, and copy are reused, since this is a rebuild of their site.
- The design stays faithful to the brand. Improvements happen within it, not as a redesign.
- I chose the stack (below).
- Inner pages are out of scope, so their links open the live WTC site.

**Tools.** I used Claude Code as a pair programmer for planning, code review, and implementation. Every design and technical decision, and the final code, is mine.

## Getting started

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Then open http://localhost:3000.

| Script                 | What it does                                      |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the development server                      |
| `npm run build`        | Create a production build                         |
| `npm start`            | Serve the production build                        |
| `npm run lint`         | Run ESLint                                        |
| `npm run typecheck`    | Type-check with TypeScript                        |
| `npm run format`       | Format all files with Prettier                    |
| `npm run format:check` | Check formatting without changing any files       |

**Deployment.** Every push to `main` runs [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml). It builds a static export and publishes it to GitHub Pages.

## Tech stack

| Choice                           | Why                                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js 16** (App Router)      | Pages are rendered to static HTML, so they're fast and easy for search engines to read. It also brings built-in image handling, metadata, `robots.txt`, and sitemap support. |
| **React 19 + TypeScript**        | Reusable, type-checked components. Content types catch mistakes at build time.                                                             |
| **Tailwind CSS 4**               | Brand tokens are defined once and styles sit next to the markup. Only the CSS that's used ships to the browser.                             |
| **Lucide**                       | One consistent, lightweight icon set.                                                                                                       |
| **ESLint + Prettier**            | Consistent code. Tailwind classes are sorted automatically.                                                                                 |
| **GitHub Pages** (static export) | Free, public hosting tied to the repo. The trade-off: there's no image server, so images ship pre-sized instead of resized per device.      |

## Project structure

```
src/
  app/                  Routes only: root layout, homepage, metadata files (robots, sitemap, icons)
  components/
    layout/             Site-wide chrome: Navbar and its menus, Footer
    home/               Homepage sections, in page order
    ui/                 Shared building blocks: section header, button and link styles
  data/                 All page content: copy, links, images, contact details
  lib/                  Small helpers (asset paths for GitHub Pages)
public/                 Images, videos, and the ISO certificate PDF
```

**Content is kept apart from the code.** Every piece of copy, every link, and every image reference lives in `src/data/`. Updating a phone number, a link, or a product description means editing one data file, not hunting through components.

| File                | Contents                                              |
| ------------------- | ----------------------------------------------------- |
| `site.ts`           | Site URL, title, description, share image             |
| `navigation.ts`     | Every URL on the page, nav links, footer link groups  |
| `company.ts`        | Phone, address, founding year, social links           |
| `hero.ts`           | Hero video and poster                                 |
| `certifications.ts` | Certifications and the ISO certificate preview        |
| `products.ts`       | Product cards                                         |
| `services.ts`       | Service items and WTC University                      |
| `about.ts`          | HQ photo and company facts                            |
| `languages.ts`      | Languages shown in the language menu                  |

## What changed from the original site, and why

**The carousel became sections.** The original homepage relies on a rotating slider. Carousels hide most of their content, rotate faster than people read, and are hard to use with a keyboard or screen reader. I mapped each slide's message to the audience it serves:

- **Buyers:** products, certifications.
- **Existing customers:** service and support, WTC University, the My WTC portal.
- **Job seekers:** careers.

Each one became its own section, so every message and link from the slider is still on the page and always visible.

**The video stands on its own, with a real headline below it.** The hero keeps WTC's brand video as a muted background loop. Clicking it opens the full video with sound. The page headline (the only h1) is real text in a band below the video, not text burned into the footage, so search engines and screen readers can read it.

**Nothing was dropped.** Every link from the old site's header and footer is in the new footer. That includes some that were easy to miss: Careers, Website Terms of Use, WTC University, My WTC sign-in and sign-up, and the ISO certificate. WTC publishes no email address, so the footer links to the contact page instead of inventing one.

**Same brand, tighter system.** The brand red, navy, condensed headings (Oswald), and body font (Roboto) come from the original site. They are defined once as theme tokens. Section headings, buttons, and links share one set of styles, so sections stay consistent and a brand change is a single edit.

**Two small additions, drawn from the subject.** Everything else follows the original layout. Two details give the page some character:

- **The weld seam:** in Products, the hardware and software banners meet at a red seam with spot-weld "nuggets". The nuggets flash in sequence once when the section scrolls into view, as one system joined at the weld.
- **The door:** the careers panel ("Many doors of opportunity") has a door that swings open on hover or keyboard focus.

Both are skipped for anyone who prefers reduced motion, and both are hidden from screen readers.

## Quality work

**Accessibility**

- The hero video and certificate preview use the native `<dialog>` element, which handles focus trapping, the Esc key, and the backdrop.
- The mobile menu is unreachable by keyboard while closed and closes on Esc.
- Every interactive element has a visible keyboard focus outline, colored to stay visible on both light and dark sections.
- Content images have descriptive alt text. Decorative images are hidden from screen readers.
- Headings run in order: one h1, then h2 and h3.
- Animation and video autoplay respect the reduced-motion setting.

**Performance**

- Images are lazy-loaded below the fold.
- The full hero video, with sound, downloads only when someone plays it.
- The hero poster is preloaded, because it's the first large thing on screen.
- New photos were resized and compressed. The HQ photo, for example, was resized from 2000 px to 1600 px wide and is 205 KB.
- Most components render on the server. Only interactive pieces (navbar, hero, certificate preview, weld seam) ship JavaScript.

**SEO and sharing**

- Title, description, and canonical URL.
- Open Graph and Twitter tags with a custom 1200×630 share image, so links shared on LinkedIn, Slack, or iMessage show a proper preview.
- `robots.txt` and `sitemap.xml`.
- Organization structured data (name, logo, phone, address, founding year, social profiles) for Google's company panel and local results.
- Apple touch icon and a navy theme color for mobile browsers.

**Privacy.** The HQ photo from WTC's site still carried the iPhone's GPS location in its metadata. I removed all metadata from it before publishing.

**Deployment fix.** On GitHub Pages the site lives under `/Welding_Tech_Corp_Assesment/`. Next.js adds that prefix to its own files but not to plain image, video, and PDF paths, so those returned 404 on the first deploy. I fixed it in two places:

- `next.config.ts` now owns the base path.
- A small `asset()` helper in `src/lib/asset.ts` prefixes every file path from `public/`.

## Known limitations and next steps

Listed openly so nothing is hidden:

- **Mobile performance.** Mobile LCP is 4.2 s and the page is 7.0 MB, mostly the 3.8 MB background video plus full-size images (GitHub Pages can't resize images per device).
  - Next steps: compress the background video further and start it after the page loads, and serve smaller image sizes.
- **Language menu.** Picking a language updates the menu only; the page is not translated. The requirement asks for translation loaded only on request. I'd add it on demand rather than load it for every visitor.
- **Search.** The header search field is visual only, since search results are out of scope.
- **Hero video captions.** These need a transcript of the video's audio, which I didn't have.
- **Certifications.** AS9100D, AWS D17.2, and MIL-W-6858 come from the original site but still need to be confirmed with WTC. ISO 9001:2015 is verified against the actual certificate.
- **Copyright year.** The year is set when the site is built, so it updates on the next deploy, not on January 1.
- **Testing.** The site uses standard, widely supported web features and targets the latest Chrome, Safari, Firefox, and Edge. There are no automated tests yet. Next steps:
  - Playwright smoke tests: page loads, mobile menu, video.
  - A CI workflow that runs lint, typecheck, and build on every pull request.

## Credits

All content, imagery, video, and branding belong to Welding Technology Corp and are used here only for this technical assessment.
