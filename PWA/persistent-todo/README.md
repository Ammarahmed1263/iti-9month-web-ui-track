# Persistent Todo - Task Trek PWA

A Progressive Web App (PWA) for managing tasks with persistent storage, notifications, and background reminders. Tasks are saved to IndexedDB and remain available across sessions.

---

## What It Does
- Lets users add tasks with date and time.
- Stores tasks in IndexedDB using a lightweight IDB wrapper.
- Sends notifications when a task time is reached.
- Displays activity logs for key actions.

---

## Key Features
- **IndexedDB persistence** with add, update, delete, and list operations.
- **Notification API** for reminders and onboarding alerts.
- **Service worker** for notification click handling.
- **Input normalization** for time values and validation.

---

## How It Works
1. The user adds a task with date and time.
2. Tasks are saved to IndexedDB via `db.js`.
3. A timer checks deadlines every 15 seconds.
4. When due, a notification is shown and the task is marked as notified.
5. Notification clicks focus or open the app window.

---

## Project Structure
- `index.html` - UI layout and inputs.
- `style.css` - App styling.
- `app.js` - Main logic, notifications, rendering, and validation.
- `db.js` - IndexedDB helpers (add/get/update/delete).
- `idb.js` - Promise-based IndexedDB wrapper.
- `sw.js` - Notification click handling.
- `notification-icon.png` - Notification icon.

---

## Run It
Open `index.html` using a local server (recommended for notifications and service worker behavior). Then:
- Allow notification permissions
- Add a task and wait for its reminder

---

## Learning Points
- IndexedDB basics and object stores
- Web notifications and permissions flow
- Service worker interaction with notifications
- Basic PWA structure
