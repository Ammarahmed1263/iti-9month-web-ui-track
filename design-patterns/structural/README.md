# Structural Design Patterns

This folder is my TypeScript learning log for structural design patterns. It collects the implementations I built while learning how to compose objects, wrap behavior, and control access through interfaces.

## What is implemented

- Bridge pattern in `bridge.ts`
- Composite pattern in `composite.ts`
- Decorator pattern in `decorator.ts`
- Proxy pattern in `proxy.ts`

## How it is implemented

Each file isolates one structural pattern and demonstrates the pattern through a tiny domain model. `index.ts` ties them together and prints the output so the relationships between the objects are visible when the program runs.

- `bridge.ts` keeps remote controls separate from devices by sharing a `Device` interface.
- `composite.ts` allows boxes to contain books or other boxes while both still behave as `Item`.
- `decorator.ts` wraps a teacher object with extra behavior instead of adding many subclasses.
- `proxy.ts` intercepts country lookups, reuses cached values, and only calls the real service when needed.

## What each file demonstrates

- `bridge.ts` connects `BasicRemoteControl` and `AdvancedRemoteControl` to `TV` and `Speaker` devices through a shared `Device` contract.
- `composite.ts` models nested boxes of books with recursive display and page-count aggregation.
- `decorator.ts` stacks teacher decorators to add salary, nationality, and address data at runtime.
- `proxy.ts` caches country lookups so repeated requests avoid hitting the real service.
- `index.ts` runs the examples in sequence and prints the results to the console.

## Folder Structure

```text
structural/
├── src/
│   ├── bridge.ts
│   ├── composite.ts
│   ├── decorator.ts
│   ├── index.ts
│   └── proxy.ts
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

- Learned how structural patterns reduce tight coupling between classes.
- Practiced recursive composition, runtime decoration, and caching through a proxy.
- Used console output as a simple proof that each pattern behaves correctly.
