# Task Manager with Angular

A beginner-friendly Angular project built as a Task Manager dashboard using standalone components.

This is my first Angular project, and the main goal was to practice component architecture, template syntax, two-way data binding, and UI composition while building a clean static + interactive interface.

---

## Core Features

- Dashboard-style layout with reusable UI sections (Header, Carousel, Task List, Task Form, Footer).
- Task form with structured fields: title, description, priority, due date, category, and tags.
- Interactive task creation flow using form state and an add action.
- Image carousel with previous/next navigation and direct pagination controls.
- Responsive layout behavior for mobile and desktop screens.
- Consistent design system using CSS variables for colors, spacing, and controls.

---

## What I Learned So Far (First Angular Project)

### 1. Standalone Component Architecture

- I learned how to create and compose standalone components without NgModules.
- I practiced organizing UI into focused parts:
  - Header and Footer for page shell.
  - Card and Card List for task display.
  - Inputs for task creation.
  - Carousel for media interaction.

### 2. Angular Templates and Data Binding

- I used interpolation (`{{ }}`) to render dynamic values in templates.
- I used property binding (`[src]`, `[alt]`, `[class.active]`) to bind DOM properties to component state.
- I used event binding (`(click)`) to trigger component methods.

### 3. FormsModule and Two-Way Binding

- I imported `FormsModule` in the form component.
- I used `[(ngModel)]` to keep form inputs and component state synchronized.
- I learned how to reset form state after submitting a new task.

### 4. TypeScript Modeling in Angular Components

- I practiced using TypeScript `type` aliases and `interface` definitions to model form data and task objects.
- I used strongly typed arrays and fields to improve code clarity and prevent common mistakes.

### 5. State-Driven UI Updates

- I learned how UI updates automatically when component state changes.
- I practiced simple state logic for:
  - Adding tasks to a local array.
  - Tracking active carousel index.
  - Navigating slides with wrap-around behavior.

### 6. Styling and Responsive Design

- I used global styles and component-level styles together.
- I applied CSS variables to keep theme values centralized.
- I built a responsive content area that shifts layout at larger breakpoints.

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
│   │       ├── card/
│   │       ├── card-list/
│   │       ├── inputs/
│   │       └── carousel/
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

- Connect the form component and card list through shared state or input/output communication.
- Add edit and delete functionality for tasks.
- Persist tasks in local storage or a backend API.
- Add Angular routing for separate pages (Home, About, Contact).
- Explore reactive forms and form validation messages.

---

## Notes

This project is intentionally focused on fundamentals. It reflects my early Angular learning journey and will keep evolving as I learn more advanced patterns.
