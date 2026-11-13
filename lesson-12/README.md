# Lesson 12 – Node.js and Express Weather API

This folder contains a small Express server that requests current weather from OpenWeather without exposing the API key in browser code.

## Requirements
- Node.js 22 or 24
- An OpenWeather API key

## Setup
1. Copy `.env.example` to `.env`.
2. Put your key after `OPENWEATHER_API_KEY=` in `.env`.
3. Run `npm install`.
4. Start the server with `npm start`.

Open `http://localhost:3000/weather?city=Nairobi` to test the endpoint.

The `.env` file is ignored by Git. Never commit your real API key.
