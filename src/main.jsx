import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter  basename="/react-frontend-restaurant">
        <App />
      </BrowserRouter>
    </StrictMode>

)
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
      