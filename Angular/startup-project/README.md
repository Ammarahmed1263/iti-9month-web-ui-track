# Task Manager with Angular

A beginner-friendly Angular project built with standalone components.

This project started as a UI-focused task dashboard and now includes task workflow screens, route protection with guards, authentication forms, and toast notifications.

---

## Current Features

- Standalone component architecture with reusable UI sections.
- App routing with guarded routes:
  - `guestGuard` protects `login` and `register` from authenticated users.
  - `authGuard` protects app children routes (`home`, `add-task`, `my-tasks`).
- Authentication UI flow:
  - Login form built with template-driven forms (`NgForm`).
  - Register form built with reactive forms (`FormGroup`) and custom password match validation.
  - Basic local session state using `localStorage` key: `user`.
- Task management UI sections for adding and viewing tasks.
- Toast notifications for user actions and validation feedback.
- Not found route with auto-redirect back to login.
- Responsive layout with shared design tokens via CSS variables.
- Carousel section with previous/next navigation and pagination controls.
- Header with a live running timer.

---

## Main Architecture Changes

- Introduced route-level access control with:
  - `auth-guard.ts` for protected pages.
  - `guest-guard.ts` for public auth pages.
- Added dedicated auth pages:
  - `login` (template-driven validation).
  - `register` (reactive form with cross-field password validation).
- Added wildcard (`**`) route handling with `not-found` and delayed redirect.
- Centralized app shell includes `header`, routed content (`router-outlet`), `footer`, and global `toast`.
- App configuration uses zoneless change detection and router providers in `app.config.ts`.

---

## Tech Stack

- Angular 21 (standalone components)
- TypeScript
- HTML templates
- CSS (global + component styles)
- Angular Router + Route Guards
- Angular Forms (`FormsModule` + `ReactiveFormsModule`)

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
│   │       ├── login/
│   │       ├── register/
│   │       ├── not-found/
│   │       ├── task-list/
│   │       ├── todo-list/
│   │       └── toast/
│   │   └── guards/
│   │       ├── auth-guard.ts
│   │       └── guest-guard.ts
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

- Replace local `localStorage` session handling with a proper auth service/token flow.
- Persist tasks in local storage or a backend API.
- Add sorting options (priority, due date, status).
- Add logout flow and route-aware header states for authenticated vs guest users.
- Add more unit tests around task state transitions.

---

## Notes

This project is focused on Angular fundamentals and component communication patterns, and it will continue evolving as more advanced patterns are added.
