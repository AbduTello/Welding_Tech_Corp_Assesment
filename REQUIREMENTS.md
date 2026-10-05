# WTC Homepage Rebuild: Requirements

**Site:** https://www.weldtechcorp.com/ (homepage only)
**Due:** October 5, 2026

## 1. Goal

Rebuild the Welding Technology Corp homepage so it keeps the same brand and content, and is faster, more accessible, and easier to use on mobile.

## 2. Page Sections

| # | Section | Content |
|---|---|---|
| 1 | Navbar | Logo, main links (Products and Solutions, Service and Support, Learning Center, About, News, Contact), search, My WTC, language |
| 2 | Hero | Full-width video with play button and scroll cue |
| 3 | Tagline band | Page headline (h1), short subline, two calls to action |
| 4 | Certifications | ISO 9001:2015, AS9100D, AWS D17.2, MIL-W-6858 |
| 5 | Products and solutions | Two cards: Weld controls, Software algorithms |
| 6 | Service and support | Intro plus four cards: Repair, Setup, Retrofit, WTC University |
| 7 | About | HQ photo, short company copy, link to read more |
| 8 | Phone consultation | Banner with tap-to-call number |
| 9 | Portal and careers | My WTC account sign-up, careers link |
| 10 | Footer | Logo, links, phone, address, social links, copyright |

## 3. Functional Requirements

| ID | Requirement |
|---|---|
| F1 | Navbar links scroll to the matching section or open the matching live WTC page |
| F2 | Mobile menu opens and closes by tap, keyboard, and the Esc key |
| F3 | Hero video plays on click, shows a poster image first, and has captions |
| F4 | Scroll cue moves the page to the tagline band |
| F5 | All headlines and buttons are real text, not part of an image |
| F6 | Product and service cards link to the matching live WTC pages |
| F7 | Phone number is a `tel:` link (tap to call on mobile) |
| F8 | ISO certificate link opens the certificate |
| F9 | Language selector works, loading translation only when the user asks for it |
| F10 | Copyright year updates automatically |

## 4. Non-Functional Requirements

| Area | Requirement |
|---|---|
| Responsive | Works from 360 px to 1920 px wide; tested at 375, 768, 1024, 1440 |
| Performance | Mobile LCP under 2.5 s; page under 1.5 MB before the video plays; images in modern formats and lazy-loaded below the fold |
| Accessibility | WCAG 2.2 AA; full keyboard navigation; visible focus states; alt text on images; text contrast of 4.5:1 or better; motion reduced when the user prefers it |
| SEO | One h1 and ordered headings; page title and meta description; Open Graph tags; descriptive link text |
| Browsers | Latest Chrome, Safari, Firefox, and Edge |
| Code quality | TypeScript, reusable components, linting and formatting, page content kept in data files |
| Delivery | Public GitHub repo, live deployment, README with setup steps and decisions |

## 5. Out of Scope

- Inner pages (links go to the live WTC site)
- My WTC login and account features
- Site search results
- CMS or backend
