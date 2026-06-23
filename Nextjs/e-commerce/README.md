# Pages Router E-Commerce Application

A dynamic e-commerce catalog application built using Next.js Pages Router. It features user authentication integration, product listing pages, detail dialogs, news/announcement managers, and theme customization.

## Technologies Used

- **Framework**: Next.js 16 (Pages Router)
- **Runtime**: React 19
- **Authentication**: NextAuth.js (`next-auth` integration)
- **Database ODM**: Mongoose (`mongoose`) with MongoDB
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/postcss`)
- **Theme Engine**: `next-themes` (Dark/Light mode support)
- **Data Hook**: SWR (`swr`) for optimized client-side state caching
- **Notifications**: Sonner (`sonner` toaster alerts)
- **Language**: TypeScript

## Main Features

- Credential-based user authentication using NextAuth middleware.
- Client-side navigation across Home, Product Listing, and News Manager routes.
- Fully responsive product details modal layout.
- Persistent global theme state (System, Light, Dark).
