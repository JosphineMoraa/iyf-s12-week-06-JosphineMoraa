# Week 7 – JavaScript Best Practices

**Student:** Josphine Moraa (GitHub: [JosphineMoraa](https://github.com/JosphineMoraa))
**Course:** IYF Weekend Academy, Season 12

## About
This project refactors my Week 5 to-do list using best practices. I moved the
core logic into small, named functions, added code-quality tools, and wrote
unit tests.

## What's included
- **To-do list app** (`index.html`, `app.js`, `styles.css`)
- **Pure logic functions** in `js/todo-logic.js` (add, toggle, remove)
- **Unit tests** in `tests/todo.test.js`, written with Vitest
- **ESLint** (`eslint.config.js`) for catching code problems
- **Prettier** (`.prettierrc`) for consistent formatting

## How to run
1. Install dependencies: `npm install`
2. Run the tests: `npm test`
3. Check code quality: `npm run lint`
4. Format the code: `npm run format`

## What I learned
- How to refactor messy code into small, clean functions with clear names
- Why keeping logic separate from the page (in `js/todo-logic.js`) makes code easier to test
- How to set up ESLint to catch mistakes and Prettier to keep formatting consistent
- How to write my first unit tests with Vitest and run them with `npm test`
- How to use `package.json` scripts to run tests, linting and formatting

## Challenges
- **Pushing to GitHub:** My files would not push from my computer, so I created
  some of them directly on GitHub instead.
- **Setting up the tools:** ESLint, Prettier and Vitest were new to me, and
  understanding how the config files work took time.
- **Separating logic from the page:** Moving the to-do logic out of `app.js`
  into pure functions was hard at first.
- **Time:** I had to manage my time carefully to finish all the Week 7 tasks.

## How I solved them
- I asked for help and read the documentation.
- I worked on one file at a time and tested each step.

## Peer review
Reviewed my partner's project with a pull request and comments.