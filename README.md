# India Bible College & Seminary — Website

## Project Structure

```
ibc-website/
├── index.html          ← Main entry point (open this in browser)
├── css/
│   └── style.css       ← All styles, colors, responsive layout
├── js/
│   ├── components.js   ← Topbar, Navigation, Mobile Menu, Footer
│   ├── pages.js        ← All 6 page HTML content
│   └── main.js         ← Navigation logic & form handling
└── README.md
```

## Pages Included
1. **Home** — Hero, Why IBC, Programme preview, Alumni testimonies
2. **About Us** — History, Vision, Faculty profiles
3. **Programmes** — 6 theological courses with details
4. **Events** — 6 upcoming campus events
5. **Admission** — 4-step process + full application form
6. **Contact** — Contact info + enquiry/prayer request form

## How to Use
1. Open `index.html` in any modern browser — no server needed
2. Click nav links to switch between pages
3. Forms show a success message on submission (demo mode)

## Customisation
- **Colors**: Edit `:root` variables at the top of `css/style.css`
- **Content**: Update text in `js/pages.js`
- **Logo/Name**: Update in `js/components.js`
- **Add real form backend**: Replace `submitForm()` in `js/main.js` with your API call

## Accreditation
Senate of Serampore Affiliated · ACTEA Accredited · EFI Member

## Design
- Maroon & Gold colour scheme
- Cormorant Garamond (headings) + Lato (body)
- Fully mobile responsive
- Cross motif throughout
