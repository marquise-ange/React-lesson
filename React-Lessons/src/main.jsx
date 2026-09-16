import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './static-pages/Project1/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
