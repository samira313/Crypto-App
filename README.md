# Crypto App

Welcome to Crypto App — a React.js-based cryptocurrency tracker where users can:
 • View top cryptocurrencies.
 • Search for specific coins.
 • See detailed coin information.
 • View 7-day price charts.
 • Add/remove favorite coins.
 • Navigate easily between pages.
 • Experience a responsive, mobile-friendly design.

⸻

## Features
 • Homepage: Displays a paginated table of coins with basic information.
 • Search: Live search functionality to find coins quickly.
 • Details Page: View detailed info about a coin like price, market cap, 24h change, and description.
 • Chart Page: Interactive line chart showing 7-day price trends.
 • Favorites Page: Add and manage your favorite coins. (Saved even after refresh using localStorage.)
 • 404 Page: Beautiful not found page for undefined routes.
 • Responsive Design: Fully optimized for mobile and desktop.
 • Custom Hooks: Smart code with reusable useFetch hook.

⸻

## Tech Stack
 • React.js (Vite Setup)
 • React Router DOM for page navigation
 • Context API for managing favorite coins
 • Chart.js and react-chartjs-2 for charts
 • CoinGecko API for real-time data
 • CSS Modules for component-level styling
 • LocalStorage for saving favorites

### Folder Structure

src/
|-- assets/
|-- components/
|   |-- layout/
|   |-- modules/
|   |-- templates/
|-- context/
|-- hooks/
|-- services/
|-- utils/  
|-- styles/
|-- App.jsx
|-- main.jsx

### API Reference

- [CoinGecko API Documentation](https://www.coingecko.com/en/api/documentation)

### Live Demo
[name](url)

### Author

Developed by: Samira Ahmadi