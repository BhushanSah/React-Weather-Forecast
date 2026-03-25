# React Weather App

A simple weather application built with React, Material UI, and the OpenWeather API. Users can search for a city and view real-time weather details such as temperature, humidity, minimum and maximum temperature, and weather conditions.

## Features

- Search weather by city name
- Displays:
  - Current temperature
  - Minimum temperature
  - Maximum temperature
  - Humidity
  - Feels-like temperature
  - Weather description
- Dynamic weather images based on temperature and humidity
- Error handling for invalid city names
- Built with Material UI for a clean interface

## Tech Stack

- React
- JavaScript
- Material UI
- OpenWeather API
- CSS

## Project Structure

- `WeatherApp.jsx` handles the main state
- `SearchBox.jsx` manages city input and API requests
- `InfoBox.jsx` displays weather information in a card layout

## How It Works

1. The user enters a city name
2. The app sends a request to the OpenWeather API
3. The weather data is fetched and stored in state
4. The UI updates and displays the result in a weather card

## Environment Variables

Create a `.env` file in the root folder and add your API key:

```env
VITE_APIKEY=your_api_key_here