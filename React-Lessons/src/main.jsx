
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Challenge4 from './static-pages/Challenge4'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Challenge4 />
  </StrictMode>,
)
