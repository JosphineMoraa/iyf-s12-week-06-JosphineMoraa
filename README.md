# Week 6: Async JavaScript and Weather Dashboard

This folder contains a browser-based weather dashboard, async JavaScript practice, five daily challenges, and a GitHub Pages deployment workflow.

## Repository layout

- `index.html`, `styles.css`, `app.js`, and `config.js` are the weather dashboard at the repository root. Keep these here because the GitHub Pages workflow deploys the root.
- `config.example.js` is the safe API-key template; `config.js` is the local, ignored configuration file.
- `async-practice.js` is a standalone async JavaScript example.
- `daily-challenges/` contains the five daily practice scripts.
- `lesson-12/` is a separate Node.js/Express lesson project with its own `package.json` and server.
- `.github/workflows/` contains the GitHub Pages deployment workflow.

## Run the weather dashboard locally

1. Get an API key from [OpenWeather](https://openweathermap.org/api).
2. Add the key to `config.js`:

   ```js
   const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
   ```

3. Open `index.html` in a browser. If your browser blocks local requests, serve this folder with a local static web server instead.

`config.js` is ignored by Git. `config.example.js` is a safe template and contains no working credential. A key used in a browser is visible to visitors; restrict it through the API provider's settings and usage limits.

## Async practice

Run the standalone Node.js example:

```sh
node async-practice.js
```

The five scripts in `daily-challenges/` cover promises, sequential `async`/`await`, `Promise.all`, error handling, and retries. The fetch challenge requires network access and a modern browser or Node.js version with `fetch`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys the repository root when changes are pushed to `main`. Enable GitHub Pages with **GitHub Actions** as the build source and add an `OPENWEATHER_API_KEY` repository secret.

The workflow injects that key into the deployed static site. Because browser-side keys are publicly observable, restrict the key and its allowed services; do not use a privileged or server-side secret here.
