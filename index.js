import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: for basic global styling

// 1. Identify the root element in the HTML
const rootElement = document.getElementById('root');

// 2. Create the React root container (React 18 method)
const root = ReactDOM.createRoot(rootElement);

// 3. Render the main App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

