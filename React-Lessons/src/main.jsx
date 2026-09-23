import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './Data-driven React/Contact'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Contact />
    </StrictMode>,
)