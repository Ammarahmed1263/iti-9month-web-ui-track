# Memory Game - TypeScript + SCSS (BEM)

This project is a browser memory card game inspired by the Marvel Endgame theme.

It is my first project that focuses on:

- Object-oriented TypeScript using classes and interfaces
- SCSS for organized styling
- BEM naming to keep UI classes clear and maintainable

## Features

- Flip cards and match pairs
- Progress bar with matched pairs counter
- Background music and sound effects
- Game over overlay with restart button
- Responsive board layout for different screen sizes

## Project Structure

```text
Day2/
|-- index.html
|-- readme.md
|-- assets/
|   |-- images/
|   `-- sounds/
|-- src/
|   |-- main.ts
|   |-- main.js
|   |-- classes/
|   |   |-- Card.ts
|   |   |-- CardFactory.ts
|   |   |-- GameEngine.ts
|   |   |-- ProgressBar.ts
|   |   `-- SoundManager.ts
|   `-- interfaces/
|       |-- ICard.ts
|       |-- IGameConfig.ts
|       `-- ISoundConfig.ts
`-- styles/
	|-- style.scss
	`-- style.css
```

## TypeScript Architecture

### Classes

- `Card`: Represents a single card and manages card state (flip/reset/match).
- `CardFactory`: Creates and shuffles card objects from the game config.
- `GameEngine`: Controls gameplay flow, user interaction, matching logic, and restart.
- `ProgressBar`: Updates progress bar width and text label.
- `SoundManager`: Handles loading, playing, and stopping audio tracks.

### Interfaces

- `ICard`: Shape of a card object used by game logic.
- `IGameConfig`: Game setup contract (images, total pairs).
- `ISoundConfig`: Sound key/path mapping contract.

Using interfaces keeps class contracts explicit and easier to scale.

## SCSS + BEM Approach

SCSS is used to:

- Define variables for colors, spacing, timing, and theme
- Keep styles modular and readable
- Add responsive behavior with media queries

BEM naming examples used in this project:

- `card__inner`
- `card__face`
- `card__face--front`
- `card__face--back`
- `game-over__card`

This structure makes component styles predictable and avoids naming conflicts.

## How To Run

### Option 1: Quick run (already built files)

Because `index.html` loads `src/main.js` and `styles/style.css`, you can run directly with a static server:

1. Open project folder in VS Code.
2. Start a static server (for example Five Server extension).
3. Open `index.html` in the browser.

### Option 2: Development mode (watch TypeScript + SCSS)

Use this when you edit `.ts` or `.scss` files.

1. Watch TypeScript output:

```bash
tsc --watch
```

2. Watch SCSS output:

```bash
npx sass --watch styles/style.scss:styles/style.css
```

3. Serve the project with a static server and open `index.html`.

## Learning Notes

This project demonstrates how to connect:

- OOP design in TypeScript (classes + interfaces)
- Component-oriented styling with SCSS and BEM
- Browser game logic with modular structure

It is a strong foundation to move next into:

- Better state management
- Unit testing for game logic
- Build tooling (for example adding a full TypeScript config and npm scripts)
