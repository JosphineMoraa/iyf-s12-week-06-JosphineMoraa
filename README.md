# Week 6: Async JavaScript and Weather Dashboard

This repository contains the Week 6 Weather Dashboard, callback/Promise/async-await practice, five daily challenges, and the Lesson 12 Node.js/Express weather API.

## Repository layout

- `index.html`, `styles.css`, `app.js` – browser weather dashboard
- `config.example.js` – safe OpenWeather API-key template
- `config.js` – local API-key file; ignored by Git and created by the Pages workflow during deployment
- `async-practice.js` – Lesson 11 callback, Promise chaining, async/await, and Promise.all exercise
- `daily-challenges/` – five async JavaScript challenges
- `lesson-12/` – separate Node.js/Express weather API project
- `.github/workflows/deploy.yml` – deploys the root dashboard to GitHub Pages
- `.github/workflows/week6-checks.yml` – checks JavaScript syntax on every push

## Run the weather dashboard locally

1. Get an API key from [OpenWeather](https://openweathermap.org/api).
2. Copy `config.example.js` and name the copy `config.js`.
3. Replace the placeholder in `config.js` with your API key:

   ```js
   const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
   ```

4. Open `index.html` in a browser. If your browser blocks local requests, serve the repository root with a local static web server.

Search for a city to display its current temperature, feels-like temperature, weather description, humidity, wind speed, pressure, visibility, and weather icon.

`config.js` is ignored by Git. Never commit a real API key. A key used by a browser is visible to visitors, so restrict it through OpenWeather's API settings and usage limits.

## Async JavaScript practice

Run the standalone Lesson 11 example:

```sh
node async-practice.js
```

It demonstrates the same user/orders/total flow with callbacks, Promise chaining, async/await, and Promise.all.

Run any daily challenge with Node.js, for example:

```sh
node daily-challenges/day-1-promises.js
```

The five challenges cover promises and timers, sequential async/await, Promise.all, fetch error handling, and retry logic. The fetch challenge requires network access.

## Lesson 12 – Node.js and Express

See [lesson-12/README.md](lesson-12/README.md). The Express server reads its key from a local `.env` file and exposes `/weather?city=Nairobi`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` deploys the repository root when changes are pushed to `main`. In repository Settings → Secrets and variables → Actions, add a repository secret named `OPENWEATHER_API_KEY` containing your OpenWeather key. Then set GitHub Pages' build source to **GitHub Actions**.

The workflow writes a temporary `config.js` from that secret during deployment. Because browser-side API keys are publicly observable, restrict the key to the required service and usage limits. Do not put a privileged server-side key in this dashboard.
