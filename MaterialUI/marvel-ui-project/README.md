# Marvel UI Project

This folder is a React + MUI learning project built with Vite. It focuses on layout composition, reusable sections, and styling a landing page around a Marvel theme.

## What is implemented

- A sticky header with logo and login button in `Header.tsx`
- A hero section with a full-screen background image in `HeroSection.tsx`
- A cards grid for featured characters or content in `CardsGrid.tsx`
- A stats section in `HeroStatsSection.tsx`
- A call-to-action block in `CallToActionSection.tsx`
- A footer in `Footer.tsx`
- Shared data in `constants.ts`

## How it is implemented

`App.jsx` assembles the page from small sections instead of one large component. The styling is driven by CSS variables in `src/index.css`, while MUI handles the layout, spacing, and button structure.

- `Header.tsx` creates the top bar and keeps the brand and action button aligned.
- `HeroSection.tsx` uses a background image and centered content to introduce the page.
- `CardsGrid.tsx` renders the main featured items from shared data.
- `HeroStatsSection.tsx` highlights a few quick stats in card form.
- `CallToActionSection.tsx` gives the page a final conversion block.
- `Footer.tsx` closes the layout and keeps the visual style consistent.

## What the app shows

- A single-page landing layout built with MUI components
- Color variables and layout rules in `src/index.css`
- Section-based composition through `App.jsx`
- Static assets from the `public/` folder, including images and SVGs

## Folder Structure

```text
marvel-ui-project/
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

- Practiced building a UI from reusable sections instead of one large component.
- Learned how to combine MUI styling with CSS variables for consistent theming.
- Used the project as a reference for responsive layout and component composition.
