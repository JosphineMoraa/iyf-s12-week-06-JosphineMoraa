require("dotenv").config();

const express = require("express");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const API_KEY = process.env.OPENWEATHER_API_KEY;

app.get("/weather", async (req, res) => {
  const city = typeof req.query.city === "string" ? req.query.city.trim() : "";

  if (!city) {
    return res.status(400).json({ error: "Please provide a city name." });
  }

  if (!API_KEY) {
    return res.status(503).json({
      error: "Weather service is not configured. Add OPENWEATHER_API_KEY to the .env file.",
    });
  }

  try {
    const params = new URLSearchParams({
      q: city,
      appid: API_KEY,
      units: "metric",
    });
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${params.toString()}`,
      { signal: AbortSignal.timeout(10000) },
    );
    const data = await response.json();

    if (!response.ok) {
      const status = response.status === 404 ? 404 : response.status === 401 ? 502 : 502;
      return res.status(status).json({
        error: data.message || "Weather request failed.",
      });
    }

    return res.json(data);
  } catch (error) {
    const timedOut = error && error.name === "TimeoutError";
    return res.status(timedOut ? 504 : 502).json({
      error: timedOut
        ? "The weather service took too long to respond."
        : "Unable to contact the weather service. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Weather API server running at http://localhost:${PORT}`);
});
