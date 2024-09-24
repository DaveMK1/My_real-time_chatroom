// Import necessary modules from React and ReactDOM for rendering the application
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Required for enabling routing in the app
import App from './App.jsx' // Import the main App component
import './index.css' // Import global styles

// Use createRoot to render the app and wrap it inside StrictMode and BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter is needed for handling routing in the app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
