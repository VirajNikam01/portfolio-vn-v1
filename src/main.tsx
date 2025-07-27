import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './translations/i18next-config.ts'
import './commonStyles.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
