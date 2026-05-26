# Nature Responsive Project

This folder is a React + MUI responsive landing page built with Vite. It is my reference project for learning modern layout structure, section-based composition, and theme-driven UI styling.

## What is implemented

- Responsive navigation in `Navbar.tsx`
- Hero section with layered background imagery in `HeroSection.tsx`
- Plant cards grid in `CardsGrid.tsx`
- About section in `AboutSection.tsx`
- Contact form in `ContactUs.tsx`
- Footer in `Footer.tsx`
- Shared content data in `constants.ts`

## How it is implemented

`App.jsx` builds the page by stacking reusable sections in a clear order: navigation, hero, products, about, contact, and footer. The layout relies on MUI components and theme-like CSS variables so the page stays consistent across screen sizes.

- `Navbar.tsx` provides anchor-based navigation for the main sections.
- `HeroSection.tsx` uses a full-viewport background and centered content to create the first visual block.
- `CardsGrid.tsx` presents the plant cards in a responsive grid.
- `AboutSection.tsx` explains the brand with a split image-and-text layout.
- `ContactUs.tsx` demonstrates form handling and validation styling.
- `Footer.tsx` finishes the page with matching colors and spacing.

## What the app shows

- A full landing page with anchor navigation
- Responsive layout behavior across mobile and desktop sizes
- MUI components styled with CSS variables
- Custom typography through `@fontsource/inter` and `@fontsource/lora`
- Public assets and background images stored in `public/`

## Folder Structure

```text
nature-responsive-project/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── constants.ts
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## How to run

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Learning progress notes

- Practiced responsive sections instead of fixed-width layouts.
- Learned how to organize a landing page into reusable components.
- Used the project as a record of how MUI, CSS variables, and custom fonts work together.
