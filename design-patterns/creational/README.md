# Creational Design Patterns

This folder is my learning log for the creational design-pattern exercises in TypeScript. It shows the code I built, the patterns I practiced, and the commands used to run the examples.

## What is implemented

- Singleton through `counter.ts`
- Prototype through `documentClone.ts`
- Builder through `pizzaBuilder.ts`
- Abstract Factory through `furnitureFactory.ts`

## How it is implemented

This lab is written as a set of small runnable examples, one for each creational pattern. The code in `index.ts` imports each example and runs it in sequence so the console output becomes the proof that the pattern works.

- `counter.ts` keeps one shared instance and shows that multiple calls point to the same object.
- `documentClone.ts` copies an object and then modifies the clone without changing the original.
- `pizzaBuilder.ts` separates the pizza construction steps from the final pizza object.
- `furnitureFactory.ts` creates matching furniture families without the caller knowing the concrete classes.

## What each example demonstrates

- `counter.ts` shows how one shared instance can manage state across the app.
- `documentClone.ts` shows how an object can be copied and then adjusted independently.
- `pizzaBuilder.ts` shows step-by-step object construction for different pizza types.
- `furnitureFactory.ts` shows how one factory interface can create related families of objects.
- `index.ts` runs all examples together so the console output can be used as a quick learning trace.

## Folder Structure

```text
creational/
├── src/
│   ├── counter.ts
│   ├── documentClone.ts
│   ├── furnitureFactory.ts
│   ├── index.ts
│   └── pizzaBuilder.ts
├── build/
├── package.json
└── tsconfig.json
```

## How to run

```bash
npm install
npm run build
npm run dev
```

`npm run dev` keeps TypeScript compiling in watch mode and reruns the built output from `build/index.js`.

## Learning progress notes

- Learned when to use each creational pattern instead of creating objects directly.
- Practiced separating construction logic from object usage.
- Used console output to verify that each pattern behaves as expected.
