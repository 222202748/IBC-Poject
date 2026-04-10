# India Bible College & Seminary — Website

## Project Structure

```
ibc-website/
├── index.html          ← Main entry point
├── css/
│   └── style.css       ← Modern masonry layout, full-screen gallery, responsive styles
├── js/
│   ├── components.js   ← Global components: Nav, Mobile Menu, Footer
│   ├── pages.js        ← Content for all 6 pages (Home, About, Courses, Contact, Gallery)
│   └── main.js         ← Routing logic, Lightbox, Form handling (WhatsApp redirect)
└── README.md
```

## Features
1. **Dynamic Navigation** — Single-page application (SPA) style routing using URL hashes.
2. **Modern Masonry Gallery** — Beautifully organized certificates and photos with varying card heights.
3. **Full-Screen Media** — Immersive view for images and graduation videos with glass-morphism controls.
4. **WhatsApp Integration** — Contact form automatically redirects to WhatsApp with a pre-filled message.
5. **Interactive Video** — Muted video previews on hover within the gallery grid.

## Pages
- **Home** — Hero banner, verse ticker, admission CTA, alumni testimonials.
- **About Us** — Vision, mission, and detailed faculty profiles with circular portraits.
- **Programmes** — Detailed course descriptions for C.Th, D.Th, B.Th, and M.Div.
- **Gallery** — Academic accreditations and ceremony highlights in a premium masonry grid.
- **Contact** — Office info and interactive enquiry form.

## Accreditation & Recognition
- Affiliated with **Dayspring Theological University**, Texas, USA.
- Accredited by **NATA**, India.

## Design Identity
- **Brand Colors**: Deep Maroon (#4a0e0e) and Gold (#c8973a).
- **Typography**: Cormorant Garamond (Classical Headings) + Lato (Clean Body Text).
- **Experience**: Immersive, spiritual, and professional.

## How to Use
1. **Using a Local Server (Recommended)**:
   - Open the project in your terminal.
   - Run `npm start`.
   - Open [http://localhost:3000](http://localhost:3000) in your browser.
2. **Direct Open**:
   - You can still open `index.html` directly, but some features (like URL routing) may trigger browser security warnings.
