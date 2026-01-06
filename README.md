```markdown
# Rent&Drive — Toyota & Honda Rental Site (Static)

This is a modern, responsive static website for Rent&Drive featuring Toyota and Honda vehicles.
It includes a beautiful landing page, scroll-triggered "popout" car cards, simple filtering,
and a small accessible booking modal (client-side only).

Files
- index.html — main page (includes inline SVG logo)
- styles.css — styles and animations
- script.js — scroll reveal, filtering, booking modal
- README.md — this file

How to run locally
1. Save the files (index.html, styles.css, script.js) into a folder.
2. Open `index.html` directly in a browser, or run a simple HTTP server:

```bash
# Python 3 (recommended)
python3 -m http.server 8000
# then open http://localhost:8000
```

Customizing
- Change colors in `:root` variables in `styles.css` (accent, background).
- Replace the images in the `.car-card .card-media img` `src` URLs with your assets (recommended folder `assets/`).
- Update contact info in the footer in `index.html`.

Accessibility & preferences
- Cards are keyboard-focusable and reveal with a visible focus ring.
- Respect for `prefers-reduced-motion` — transitions disabled if user prefers reduced motion.
- Images include alt text.

Deployment
- Push to a GitHub repository and enable GitHub Pages for the branch you upload (root folder).
- Or deploy to any static host (Netlify, Vercel, Surge, Firebase Hosting).

Next steps (optional)
- Add a backend API to persist bookings (Express/Node, Firebase, Supabase).
- Integrate payments (Stripe) if you want deposits or paid reservations.
- Add admin dashboard to view/manage bookings.

If you'd like, I can:
- Replace the Unsplash images with your own images.
- Change the color palette (provide hex codes or pick a theme).
- Add a simple Node/Express backend and show how to deploy it.

Tell me which change you'd like next and I will update the files.
```