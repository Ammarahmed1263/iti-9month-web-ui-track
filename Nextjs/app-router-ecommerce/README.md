# App Router E-Commerce (Bookstore)

A modern, responsive Bookstore web application built using Next.js App Router. It features a complete server-side and client-side page structure, displaying collections of books, custom book listings, and detail pages with dark/light theme support.

## Technologies Used

- **Framework**: Next.js 16 (App Router with Server & Client Components)
- **Runtime**: React 19
- **Database ODM**: Mongoose (`mongoose`) with MongoDB
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/postcss`)
- **Theme Engine**: `next-themes` (system, light, and dark modes)
- **Data Hook**: SWR (`swr`) for client-side state caching
- **Notifications**: Sonner (`sonner` toaster alerts)
- **Language**: TypeScript

## Main Features

- Dynamic nested routing for books lists (`/books`) and single item pages (`/books/[id]`).
- Clean, modular component structures (e.g. `BookCard`, `Navbar`, `ThemeToggle`).
- Dynamic server-side API routes (`/api/books` and `/api/books/[id]`) serving database content.
- Global theme transitions (Light/Dark themes) using CSS variables.
