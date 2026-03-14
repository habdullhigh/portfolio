# Abdullah Oyetoro — Portfolio

Personal portfolio website for Abdullah Oyetoro, a Backend Engineer based in Lagos, Nigeria. Built with a terminal/hacker aesthetic to reflect a systems-focused engineering mindset.

## Tech Stack

- HTML5
- CSS3 — custom properties, grid, flexbox, no frameworks
- Vanilla JavaScript
- Fonts: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) · [Inter](https://fonts.google.com/specimen/Inter)

## Structure

```
portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── icons/
        ├── ao-logo.svg          # Full logo — dark bg variant
        ├── ao-logo-light.svg    # Full logo — light bg variant
        └── favicon.svg          # Browser tab icon (32×32)
```

## Sections

| Section | Description |
|---|---|
| Hero | Terminal-style card with name, role, and skill tags |
| Talent Spotlighting & Recognition | StudentPaddy featured talent spotlight |
| System Architecture & Projects | Project cards with images, achievements, and tech tags |
| Impact & Achievements | Quantified metrics grouped by System Performance, Infrastructure & Cost, and Development Efficiency |
| Contact | Email, resume download, social links, and contact form |

## JavaScript Features

All JS is vanilla — no libraries or frameworks.

- **Smooth scroll** — native `scrollIntoView` on nav link clicks
- **Active nav highlighting** — `IntersectionObserver` watches each `section[id]`, highlights the matching nav link at 40% threshold
- **Scroll reveal animations** — second `IntersectionObserver` at 12% threshold adds `.revealed` to `[data-reveal]` elements on entry, then stops watching. Supports `fade-up`, `fade-left`, and `scale` variants with `data-delay` stagger (0.1s–0.4s). Respects `prefers-reduced-motion`.
- **Contact form** — async `fetch` POST to Google Apps Script endpoint (`mode: no-cors`). Shows inline success/error status in monospace terminal style.

## Contact Form — Google Apps Script

Form submissions are handled by a Google Apps Script Web App that writes rows to a private Google Sheet and sends an email notification.

To update the endpoint, replace `SCRIPT_URL` in `js/main.js`. To redeploy the script, go to your Google Sheet → Extensions → Apps Script → Deploy → Manage Deployments → create a new version.


> Note: `mode: no-cors` means the response body is opaque — success is assumed if the fetch doesn't throw. Check the Google Sheet directly if a submission seems missing.

## Resume

Hosted on Google Drive. Opens in a new tab via the Drive viewer. Link format:
```
https://drive.google.com/file/d/FILE_ID/view
```
Update the `href` on the resume button in `index.html` if you upload a new version.

## Scroll Reveal — Adding Animations

To animate any element on scroll, add a `data-reveal` attribute:

Available values: `fade-up`, `fade-left`, `scale`
Available delays: `1` (0.1s) · `2` (0.2s) · `3` (0.3s) · `4` (0.4s)

## Logo Assets

The `ao.` logo is available as standalone SVG files:


## Live
