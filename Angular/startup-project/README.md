# Task Manager with Angular

A beginner-friendly Angular project built with standalone components.

This project started as a UI-focused task dashboard and now includes a complete local task workflow: create, edit, delete, complete/pending toggling, filtering, and toast notifications.

---

## Current Features

- Standalone component architecture with reusable UI sections.
- Full task workflow:
  - Add new tasks.
  - Edit existing tasks.
  - Delete tasks.
  - Toggle task completion status.
  - Filter tasks by all/completed/pending.
- Toast notifications for user actions and validation feedback.
- Form state synchronization between add mode and edit mode.
- Responsive layout with shared design tokens via CSS variables.
- Carousel section with previous/next navigation and pagination controls.

---

## Main Architecture Changes

- Replaced the old static card list flow with a composed todo flow:
  - `todo-list` now manages task state and filtering.
  - `task-list` handles task rendering and filter buttons.
  - `card` handles individual task actions (edit/delete/toggle complete).
  - `inputs` supports add mode and edit mode.
  - `toast` provides global feedback messages.
- Removed the old `card-list` component.
- Added shared types for tasks, filters, and toast events.

---

## Tech Stack

- Angular 21 (standalone components)
- TypeScript
- HTML templates
- CSS (global + component styles)
- Angular Forms (`FormsModule`)

---

## Project Structure

```text
startup-project/
├── src/
│   ├── app/
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── components/
│   │       ├── header/
│   │       ├── footer/
│   │       ├── carousel/
│   │       ├── card/
│   │       ├── inputs/
│   │       ├── task-list/
│   │       ├── todo-list/
│   │       └── toast/
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── README.md
```

---

## Setup and Run

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

3. Open the app:

- http://localhost:4200/

4. Run unit tests:

```bash
npm test
```

5. Build for production:

```bash
npm run build
```

---

## Next Learning Goals

- Persist tasks in local storage or a backend API.
- Add stronger validation and field-level error messages.
- Add sorting options (priority, due date, status).
- Add Angular routing for dedicated pages.
- Add more unit tests around task state transitions.

---

## Notes

This project is focused on Angular fundamentals and component communication patterns, and it will continue evolving as more advanced patterns are added.
