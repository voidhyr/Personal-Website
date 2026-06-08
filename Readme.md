# voidhyr.github.io — Personal Portfolio

> Network Automation Engineer in training. MSc CS student, Kerala, India.  
> Building in public — silicon to protocol.

Live site → **[voidhyr.github.io/Personal-Website](https://voidhyr.github.io/Personal-Website)**

---

## About

Personal portfolio site for **Dani Sam (voidhyr)** — a systems-focused engineer
transitioning from BCA into Network Automation Engineering. The site covers
projects, writing, skills, and contact.

---

## Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Bootstrap 5.3.8 (CDN) + custom.css |
| Icons | Bootstrap Icons, Boxicons, Remixicon |
| Fonts | Google Fonts — Montserrat, Poppins, Lato |
| JS | Vanilla JS (IntersectionObserver, ScrollSpy, skill bar animation) |
| Hosting | GitHub Pages |

---

## Structure

```
├── index.html          # Main page
├── css/
│   └── custom.css      # All custom styles (Bootstrap overrides + components)
├── js/
│   └── scripts.js      # Navbar shrink, scroll reveal, skill bar animation, tabs
└── assets/
    └── img/            # Profile photo and project images
```

---

## Key Features

- Responsive single-page layout
- Animated skill progress bars with glow effect
- Scroll reveal animations via IntersectionObserver
- Work section with tabbed Projects / Articles view
- Quote rotator in hero section
- Shrinking navbar on scroll

---

## Local Development

No build tools needed. Just open in browser:

```bash
git clone https://github.com/voidhyr/Personal-Website.git
cd Personal-Website
# Open index.html in your browser
```

Or use a local server:

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## Changelog

| Version | Description |
|---|---|
| v1.4.0 | Migrated to Bootstrap 5.3.8 CDN, extracted custom.css, removed vendor folder |
| v1.3.0 | Rebrand — network automation engineering focus |

---

## Connect

| Platform | Link |
|---|---|
| GitHub | [@voidhyr](https://github.com/voidhyr) |
| LinkedIn | [dani-sam](https://linkedin.com/in/dani-sam) |
| dev.to | [@voidhyr](https://dev.to/voidhyr) |
| X | [@voidhyr](https://x.com/voidhyr) |
