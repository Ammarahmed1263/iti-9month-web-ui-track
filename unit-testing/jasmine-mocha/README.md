# Jasmine + Mocha Practice

This folder is my learning log for testing in Node.js with Jasmine and Mocha. It combines API testing, math utility exercises, and async function checks.

## What is implemented

- `fetchPosts()` for async API fetching from `dummyjson.com`
- `MathUtils` for arithmetic, average, factorial, and positivity checks
- Validation helpers inside `MathUtils.prototype._validateArgs`
- Express app testing in `mocha/app.test.js`
- Fetch response testing in `mocha/fetch.test.js`
- Jasmine spec coverage in `jasmine/math.spec.js`

## How it is implemented

This lab is split into two styles of testing. The Jasmine spec file focuses on the `MathUtils` class and its validation rules, while the Mocha tests cover the Express route and the async fetch helper.

- `fetchPosts()` returns JSON from an external API and is verified with async/await.
- `MathUtils` includes shared validation plus methods for addition, subtraction, multiplication, division, average, factorial, and positivity checks.
- `mocha/app.test.js` checks the Express app responses with Supertest.
- `mocha/fetch.test.js` validates that the fetched payload contains posts.
- `jasmine/math.spec.js` exercises the math methods and their error handling.

## What the tests cover

- Success and error paths for math utilities
- Async/await test flow
- HTTP request testing with Supertest
- API response shape checks
- Input validation and edge cases

## Folder Structure

```text
jasmine-mocha/
├── app.js
├── index.js
├── jasmine/
│   └── math.spec.js
├── mocha/
│   ├── app.test.js
│   └── fetch.test.js
├── package.json
├── bun.lock
└── README.md
```

## How to run

```bash
npm install
npm run test:jasmine
npm run test:mocha
```

## Learning progress notes

- Practiced testing both pure functions and async code.
- Learned how to structure separate Jasmine and Mocha test suites in one practice folder.
- Used this project to document how assertions, error handling, and API checks fit together.
